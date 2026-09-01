import { useState } from "react";

import { Button } from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { captureAttribution } from "@/lib/attribution";
import { submitNewsletter } from "@/lib/submitNewsletter";

const inputClass =
	"w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--renoz-green)] focus:border-transparent outline-none transition-all placeholder:text-gray-400";

export function NewsletterSignup() {
	const [email, setEmail] = useState("");
	const [status, setStatus] = useState<
		"idle" | "sending" | "success" | "error"
	>("idle");
	const [error, setError] = useState<string | null>(null);

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (status === "sending") return;
		if (!email.trim()) return;

		setStatus("sending");
		setError(null);
		const result = await submitNewsletter({ data: { email } });
		if (result.success) {
			setStatus("success");
			if (typeof window !== "undefined" && window.gtag) {
				window.gtag("event", "sign_up", {
					method: "newsletter",
					...captureAttribution(),
				});
			}
		} else {
			setStatus("error");
			setError(result.error ?? "Something went wrong. Please try again.");
		}
	};

	return (
		<section className="section-closure max-w-[var(--measure-reading)] px-5 py-12 sm:px-8 md:px-10">
			<Card className="border border-[var(--renoz-green)]/20 bg-[var(--surface-inverse)]">
				<span className="text-label mb-2 block text-[var(--text-inverse-muted)]">
					Newsletter
				</span>
				<h2 className="text-2xl font-bold tracking-[-0.03em] text-[var(--text-inverse)] md:text-3xl">
					Battery intelligence, straight to your inbox
				</h2>
				<p className="mt-3 max-w-[62ch] leading-[var(--leading-body)] text-[var(--text-inverse-muted)]">
					Evidence-led guides, WA market notes and system planning briefs from
					the Perth engineering team. No noise, unsubscribe any time.
				</p>

				{status === "success" ? (
					<p className="mt-6 font-semibold text-[var(--renoz-green)]">
						Thanks — you're on the list.
					</p>
				) : (
					<form
						className="mt-6 flex flex-col gap-3 sm:flex-row"
						onSubmit={handleSubmit}
						noValidate
					>
						<label
							htmlFor="newsletter-email"
							className="sr-only"
						>
							Email address
						</label>
						<input
							id="newsletter-email"
							type="email"
							name="email"
							required
							autoComplete="email"
							placeholder="you@example.com"
							maxLength={254}
							value={email}
							onChange={(event) => setEmail(event.target.value)}
							disabled={status === "sending"}
							className={inputClass}
						/>
						<Button
							type="submit"
							variant="primary"
							disabled={status === "sending"}
							className="shrink-0 rounded-xl whitespace-nowrap"
						>
							{status === "sending" ? "Signing up…" : "Sign up"}
						</Button>
					</form>
				)}

				{status === "error" && error ? (
					<p className="mt-3 text-sm font-semibold text-red-500" role="alert">
						{error}
					</p>
				) : null}
			</Card>
		</section>
	);
}