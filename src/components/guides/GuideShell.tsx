import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

type GuideShellProps = {
	children: ReactNode;
	eyebrow?: string;
	collectionLabel?: string;
	collectionPath?: "/guides" | "/insights";
	h1: string;
	dek?: string;
	updated: string;
	claimsPending: boolean;
	partnerName?: string;
};

export function GuideShell({
	children,
	eyebrow,
	collectionLabel,
	collectionPath,
	h1,
	dek,
	updated,
	claimsPending,
	partnerName,
}: GuideShellProps) {
	const collectionName = collectionPath
		? (collectionLabel ?? "Guides")
		: "Guides";
	const collectionHref = collectionPath ?? "/guides";
	const sectionLabel = collectionPath ? undefined : collectionLabel;
	return (
		<div className="editorial min-h-screen bg-[var(--surface-canvas)] text-[var(--text-strong)]">
			<section className="bg-[var(--surface-inverse)] text-[var(--text-inverse)]">
				<div className="layout-container pb-14 pt-32 md:pb-20 md:pt-40">
					<div className="max-w-[var(--measure-reading)]">
						<nav
							aria-label="Breadcrumb"
							className="mb-6 text-xs font-semibold text-[var(--text-inverse-muted)]"
						>
							<ol className="flex flex-wrap items-center gap-2">
								<li>
									<Link
										to={collectionHref}
										activeOptions={{ exact: true }}
										className="underline decoration-[var(--accent)] decoration-2 underline-offset-4 transition-colors hover:text-[var(--text-inverse)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--focus-ring)]"
									>
										{collectionName}
									</Link>
								</li>
								{sectionLabel ? (
									<>
										<li
											aria-hidden="true"
											className="text-[var(--text-inverse-muted)]"
										>
											/
										</li>
										<li aria-current="page">{sectionLabel}</li>
									</>
								) : null}
							</ol>
						</nav>
						<span className="text-label mb-4 block text-[var(--accent)]">
							{eyebrow ?? "RENOZ technical guide · Perth & Western Australia"}
						</span>
						<h1 className="max-w-[var(--measure-reading)] text-3xl font-bold leading-[var(--leading-heading)] tracking-[var(--tracking-display)] text-balance md:text-5xl">
							{h1}
						</h1>
						{dek ? (
							<p className="mt-5 max-w-[var(--measure-reading)] text-base leading-[var(--leading-body)] text-[var(--text-inverse-muted)] md:text-lg">
								{dek}
							</p>
						) : null}
						<div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-[color-mix(in_srgb,var(--text-inverse)_18%,transparent)] pt-4 text-xs text-[var(--text-inverse-muted)]">
							<span>
								Updated <time dateTime={updated}>{updated}</time>
							</span>
							{partnerName ? (
								<span className="font-semibold text-[var(--accent)]">
									{partnerName} pairing
								</span>
							) : null}
							<span>
								{claimsPending
									? "Model-specific evidence required"
									: "Figures sourced & dated"}
							</span>
						</div>
					</div>
				</div>
			</section>

			<article className="exhibit-container section-standard">
				{children}
			</article>
		</div>
	);
}
