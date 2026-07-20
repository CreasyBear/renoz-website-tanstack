import type { ReactNode } from "react";

type GuideShellProps = {
	children: ReactNode;
	updated: string;
	claimsPending: boolean;
	partnerName?: string;
};

export function GuideShell({
	children,
	updated,
	claimsPending,
	partnerName,
}: GuideShellProps) {
	return (
		<div className="min-h-screen bg-[var(--cream)] text-[var(--black)] relative">
			<div
				aria-hidden
				className="pointer-events-none absolute inset-x-0 top-0 h-[28rem] opacity-90"
				style={{
					backgroundImage:
						"radial-gradient(ellipse 70% 50% at 15% -10%, color-mix(in oklab, var(--renoz-green) 14%, transparent), transparent 60%), linear-gradient(180deg, rgba(0,0,0,0.04), transparent 55%)",
				}}
			/>
			<div className="relative border-b border-black/10 bg-[var(--black)] text-white">
				<div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs tracking-wide text-gray-300">
					<span>Technical guide — not listed in site navigation</span>
					<span className="text-white/30" aria-hidden>
						·
					</span>
					<span>
						Updated <time dateTime={updated}>{updated}</time>
					</span>
					{partnerName ? (
						<>
							<span className="text-white/30" aria-hidden>
								·
							</span>
							<span className="text-[var(--renoz-green)]">
								{partnerName} pairing
							</span>
						</>
					) : null}
					{claimsPending ? (
						<>
							<span className="text-white/30" aria-hidden>
								·
							</span>
							<span className="text-[var(--renoz-green)]">
								Verify claims before quoting
							</span>
						</>
					) : null}
				</div>
			</div>
			<article className="relative max-w-3xl mx-auto px-4 sm:px-6 py-12 md:py-16">
				{children}
			</article>
		</div>
	);
}
