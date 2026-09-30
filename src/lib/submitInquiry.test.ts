import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import type { submitInquiry as InquiryFunction } from "./submitInquiry";

const { insert, send, verifyTurnstile } = vi.hoisted(() => ({
	insert: vi.fn(),
	send: vi.fn(),
	verifyTurnstile: vi.fn(),
}));

// Invoke the registered production handler and validator without TanStack's HTTP
// compilation. Database, email, and spam verification remain external boundaries.
vi.mock("@tanstack/react-start", () => ({
	createServerFn: () => ({
		validator: (schema: { parse: (data: unknown) => unknown }) => ({
			handler: (
				_rpc: unknown,
				handler: (options: { data: unknown }) => Promise<unknown>,
			) => ({
				__executeServer: async ({ data }: { data: unknown }) =>
					handler({ data: schema.parse(data) }),
			}),
		}),
	}),
}));

vi.mock("@tanstack/react-start/server-rpc", () => ({
	createServerRpc: (_metadata: unknown, execute: unknown) => execute,
}));

vi.mock("@supabase/supabase-js", () => ({
	createClient: () => ({ from: () => ({ insert }) }),
}));

vi.mock("resend", () => ({
	Resend: class {
		emails = { send };
	},
}));

// The split provider module retains the production handler; the ordinary import
// is transformed into an SSR RPC caller by the project's existing Vite config.
const providerModule = "./submitInquiry?tss-serverfn-split";
const { submitInquiry_createServerFn_handler: submitInquiry } = (await import(
	providerModule
)) as { submitInquiry_createServerFn_handler: typeof InquiryFunction };

const payload = {
	name: "Sam O'Connor",
	email: "sam@example.com",
	company: "R&D Solar",
	inquiry_type: "residential",
	message: "Please contact me about battery storage for my home.",
	turnstileToken: "verified-token",
};

describe("inquiry submission delivery", () => {
	beforeEach(() => {
		vi.clearAllMocks();
		vi.stubEnv("VITE_DISABLE_TURNSTILE", "false");
		vi.stubEnv("TURNSTILE_SECRET_KEY", "test-secret");
		vi.stubEnv("VITE_SUPABASE_URL", "https://example.supabase.co");
		vi.stubEnv("SUPABASE_SERVICE_ROLE_KEY", "test-service-role");
		vi.stubEnv("RESEND_API_KEY", "test-email-key");
		vi.stubGlobal("fetch", verifyTurnstile);
		verifyTurnstile.mockResolvedValue({
			json: async () => ({ success: true }),
		});
		insert.mockResolvedValue({ error: null });
		send.mockResolvedValue({ data: { id: "accepted-email" }, error: null });
		vi.spyOn(console, "error").mockImplementation(() => {});
		vi.spyOn(console, "warn").mockImplementation(() => {});
	});

	afterEach(() => {
		vi.restoreAllMocks();
		vi.unstubAllEnvs();
		vi.unstubAllGlobals();
	});

	it("reports sent only after storage and positive provider acceptance", async () => {
		const result = await submitInquiry({ data: payload });

		expect(result).toEqual({ success: true, notificationStatus: "sent" });
		expect(insert).toHaveBeenCalledExactlyOnceWith([
			{
				name: payload.name,
				email: payload.email,
				company: payload.company,
				inquiry_type: payload.inquiry_type,
				message: payload.message,
			},
		]);
		expect(send).toHaveBeenCalledTimes(1);
		expect(insert.mock.invocationCallOrder[0]).toBeLessThan(
			send.mock.invocationCallOrder[0],
		);
	});

	it.each([
		["provider rejection", { data: null, error: { message: "Rejected" } }],
		["missing acceptance", { data: null, error: null }],
		["empty acceptance ID", { data: { id: "" }, error: null }],
	])(
		"keeps the saved lead successful on %s without retry",
		async (_, response) => {
			send.mockResolvedValue(response);

			const result = await submitInquiry({ data: payload });

			expect(result).toEqual({ success: true, notificationStatus: "failed" });
			expect(insert).toHaveBeenCalledTimes(1);
			expect(send).toHaveBeenCalledTimes(1);
		},
	);

	it("keeps the saved lead successful when sending throws, without retry", async () => {
		send.mockRejectedValue(new Error("Provider unavailable"));

		const result = await submitInquiry({ data: payload });

		expect(result).toEqual({ success: true, notificationStatus: "failed" });
		expect(insert).toHaveBeenCalledTimes(1);
		expect(send).toHaveBeenCalledTimes(1);
	});

	it("does not send when the database rejects the inquiry", async () => {
		insert.mockResolvedValue({ error: { message: "Storage unavailable" } });

		const result = await submitInquiry({ data: payload });

		expect(result).toEqual({
			success: false,
			error: "Failed to save inquiry: Storage unavailable",
		});
		expect(insert).toHaveBeenCalledTimes(1);
		expect(send).not.toHaveBeenCalled();
	});

	it("does not store or send when spam verification fails", async () => {
		verifyTurnstile.mockResolvedValue({
			json: async () => ({ success: false }),
		});

		const result = await submitInquiry({ data: payload });

		expect(result).toEqual({
			success: false,
			error: "Spam verification failed. Please try again.",
		});
		expect(insert).not.toHaveBeenCalled();
		expect(send).not.toHaveBeenCalled();
	});

	it("rejects invalid payloads before any external side effect", async () => {
		await expect(
			submitInquiry({ data: { ...payload, email: "invalid" } }),
		).rejects.toThrow();

		expect(verifyTurnstile).not.toHaveBeenCalled();
		expect(insert).not.toHaveBeenCalled();
		expect(send).not.toHaveBeenCalled();
	});

	it("reports skipped when email credentials are absent and retains the lead", async () => {
		vi.stubEnv("RESEND_API_KEY", "");

		const result = await submitInquiry({ data: payload });

		expect(result).toEqual({ success: true, notificationStatus: "skipped" });
		expect(insert).toHaveBeenCalledTimes(1);
		expect(send).not.toHaveBeenCalled();
	});

	it("does not retry either insert for simultaneous saved-lead notification failures", async () => {
		send.mockResolvedValue({ data: null, error: { message: "Rejected" } });

		const results = await Promise.all([
			submitInquiry({ data: payload }),
			submitInquiry({ data: { ...payload, email: "alex@example.com" } }),
		]);

		expect(results).toEqual([
			{ success: true, notificationStatus: "failed" },
			{ success: true, notificationStatus: "failed" },
		]);
		expect(insert).toHaveBeenCalledTimes(2);
		expect(send).toHaveBeenCalledTimes(2);
	});
});
