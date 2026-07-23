import { motion } from "framer-motion";
import type { ReactNode } from "react";

type GuideShellProps = {
	children: ReactNode;
	eyebrow?: string;
	h1: string;
	updated: string;
	claimsPending: boolean;
	partnerName?: string;
};

export function GuideShell({
	children,
	eyebrow,
	h1,
	updated,
	claimsPending,
	partnerName,
}: GuideShellProps) {
	return (
		<div className="min-h-screen bg-[var(--white-warm)] text-[var(--black)]">
			{/* Hero */}
			<section className="relative overflow-hidden bg-[var(--black)] text-white">
				<div
					aria-hidden
					className="pointer-events-none absolute inset-0"
					style={{
						backgroundImage:
							"radial-gradient(ellipse 60% 60% at 85% 0%, color-mix(in oklab, var(--renoz-green) 24%, transparent), transparent 65%), radial-gradient(ellipse 40% 45% at 0% 100%, color-mix(in oklab, var(--renoz-green) 10%, transparent), transparent 60%)",
					}}
				/>
				<div
					aria-hidden
					className="pointer-events-none absolute inset-0 opacity-[0.05]"
					style={{
						backgroundImage:
							"linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
						backgroundSize: "56px 56px",
					}}
				/>
				<div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-14 md:pt-40 md:pb-20">
					<motion.span
						initial={{ opacity: 0, y: 12 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						className="block text-[var(--renoz-green)] font-bold tracking-widest uppercase text-xs mb-5"
					>
						{eyebrow ?? "RENOZ technical guide · Perth & Western Australia"}
					</motion.span>
					<motion.h1
						initial={{ opacity: 0, y: 16 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.08 }}
						className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.08] text-balance"
					>
						{h1}
					</motion.h1>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="mt-7 flex flex-wrap items-center gap-2 text-xs"
					>
						<span className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-gray-300">
							Updated <time dateTime={updated}>{updated}</time>
						</span>
						{partnerName ? (
							<span className="rounded-full border border-[var(--renoz-green)]/40 bg-[var(--renoz-green)]/10 px-3 py-1.5 text-[var(--renoz-green)] font-semibold">
								{partnerName} pairing
							</span>
						) : null}
						{claimsPending ? (
							<span className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-gray-300">
								Verify claims before quoting
							</span>
						) : (
							<span className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-gray-300">
								Figures sourced &amp; dated
							</span>
						)}
					</motion.div>
				</div>
			</section>

			<article className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
				{children}
			</article>
		</div>
	);
}
