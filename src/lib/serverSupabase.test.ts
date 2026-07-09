import { describe, expect, it } from "vitest";
import { resolveServerSupabaseConfig } from "./serverSupabase";

describe("server Supabase config", () => {
	it("prefers the service role key for server-side writes", () => {
		const config = resolveServerSupabaseConfig({
			VITE_SUPABASE_URL: "https://example.supabase.co",
			VITE_SUPABASE_ANON_KEY: "anon-key",
			SUPABASE_SERVICE_ROLE_KEY: "service-role-key",
		});

		expect(config).toEqual({
			url: "https://example.supabase.co",
			key: "service-role-key",
			usesServiceRoleKey: true,
		});
	});

	it("falls back to the anon key for local development", () => {
		const config = resolveServerSupabaseConfig({
			VITE_SUPABASE_URL: "https://example.supabase.co",
			VITE_SUPABASE_ANON_KEY: "anon-key",
		});

		expect(config).toEqual({
			url: "https://example.supabase.co",
			key: "anon-key",
			usesServiceRoleKey: false,
		});
	});

	it("returns null when required Supabase credentials are missing", () => {
		expect(
			resolveServerSupabaseConfig({ VITE_SUPABASE_URL: "" }, {}),
		).toBeNull();
	});
});
