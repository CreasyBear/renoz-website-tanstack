import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";

import {
	NAV_CTA,
	navItemIsActive,
	PRIMARY_NAV,
	type PrimaryNavItem,
} from "@/data/nav";
import { cn } from "@/lib/utils";
import Image from "../ui/Image";

const linkClass =
	"text-sm font-medium text-white/85 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--renoz-green)]";

const ctaClass =
	"inline-flex h-11 shrink-0 items-center justify-center whitespace-nowrap rounded-md bg-[var(--renoz-green)] px-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--renoz-green-dark)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:px-4";

export default function Header() {
	const pathname = useRouterState({
		select: (state) => state.location.pathname,
	});
	const [menuOpen, setMenuOpen] = useState(false);
	const [openMenu, setOpenMenu] = useState<string | null>(null);
	const [expandedGroup, setExpandedGroup] = useState<string | null>(null);
	const [scrolled, setScrolled] = useState(false);
	const navRef = useRef<HTMLElement>(null);
	const menuButtonRef = useRef<HTMLButtonElement>(null);
	const menuId = useId();
	const dialogTitleId = useId();

	// biome-ignore lint/correctness/useExhaustiveDependencies: dismiss overlays when the route changes
	useEffect(() => {
		setMenuOpen(false);
		setOpenMenu(null);
		setExpandedGroup(null);
	}, [pathname]);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 20);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	useEffect(() => {
		const media = window.matchMedia("(min-width: 1024px)");
		const onChange = () => {
			if (media.matches) {
				setMenuOpen(false);
				setExpandedGroup(null);
			}
		};
		media.addEventListener("change", onChange);
		return () => media.removeEventListener("change", onChange);
	}, []);

	useEffect(() => {
		if (!menuOpen) return;
		const previous = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		return () => {
			document.body.style.overflow = previous;
		};
	}, [menuOpen]);

	useEffect(() => {
		if (!menuOpen && !openMenu) return;
		const onKey = (event: KeyboardEvent) => {
			if (event.key !== "Escape") return;
			setMenuOpen(false);
			setOpenMenu(null);
			menuButtonRef.current?.focus();
		};
		document.addEventListener("keydown", onKey);
		return () => document.removeEventListener("keydown", onKey);
	}, [menuOpen, openMenu]);

	useEffect(() => {
		if (!openMenu) return;
		const onPointer = (event: PointerEvent) => {
			if (!(event.target instanceof Node)) return;
			if (!navRef.current?.contains(event.target)) {
				setOpenMenu(null);
			}
		};
		document.addEventListener("pointerdown", onPointer);
		return () => document.removeEventListener("pointerdown", onPointer);
	}, [openMenu]);

	return (
		<>
			<header
				className={cn(
					"fixed top-0 right-0 left-0 z-50 transition-[background-color,box-shadow,padding] duration-300 motion-reduce:transition-none",
					menuOpen
						? "bg-[var(--black)] py-3"
						: scrolled
							? "glass-dark py-3 shadow-lg"
							: "bg-transparent bg-gradient-to-b from-black/80 to-transparent py-4",
				)}
			>
				<div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 sm:gap-4 sm:px-6 lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:px-8">
					<Link
						to="/"
						className="min-w-0 justify-self-start focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--renoz-green)]"
					>
						<Image
							src="/images/optimized/logo-white-natural.webp"
							fallback="/images/optimized/logo-white-natural.webp"
							alt="RENOZ Energy"
							className="h-8 w-auto max-w-full sm:h-10"
							loading="eager"
							fetchPriority="high"
						/>
					</Link>

					<nav
						ref={navRef}
						aria-label="Primary"
						className="hidden items-center justify-center gap-7 lg:flex"
					>
						{PRIMARY_NAV.map((item, index) => (
							<div key={item.label} className="flex items-center gap-7">
								{index > 0 ? (
									<span aria-hidden className="h-3 w-px bg-white/20" />
								) : null}
								<DesktopItem
									item={item}
									pathname={pathname}
									open={openMenu === item.label}
									onOpenChange={(next) => setOpenMenu(next ? item.label : null)}
								/>
							</div>
						))}
					</nav>

					<div className="flex shrink-0 items-center gap-1 sm:gap-3">
						<Link to={NAV_CTA.to} className={ctaClass}>
							{NAV_CTA.label}
						</Link>
						<button
							ref={menuButtonRef}
							type="button"
							className="inline-flex size-11 shrink-0 items-center justify-center rounded-md text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--renoz-green)] lg:hidden"
							aria-expanded={menuOpen}
							aria-controls={menuId}
							aria-label={menuOpen ? "Close menu" : "Open menu"}
							onClick={() => setMenuOpen((open) => !open)}
						>
							{menuOpen ? <X size={22} /> : <Menu size={22} />}
						</button>
					</div>
				</div>
			</header>

			{menuOpen ? (
				<div
					id={menuId}
					role="dialog"
					aria-modal="true"
					aria-labelledby={dialogTitleId}
					className="fixed inset-0 z-40 overflow-y-auto bg-[var(--black)] pt-20 pb-[max(1.5rem,env(safe-area-inset-bottom))] lg:hidden"
				>
					<h2 id={dialogTitleId} className="sr-only">
						Site menu
					</h2>
					<nav
						aria-label="Primary"
						className="mx-auto flex min-h-[70dvh] max-w-7xl flex-col justify-center px-4 sm:px-6"
					>
						{PRIMARY_NAV.map((item, index) => (
							<div
								key={item.label}
								className={index === 0 ? undefined : "border-t border-white/10"}
							>
								<MobileItem
									item={item}
									pathname={pathname}
									expanded={expandedGroup === item.label}
									onToggle={() =>
										setExpandedGroup((current) =>
											current === item.label ? null : item.label,
										)
									}
								/>
							</div>
						))}
					</nav>
				</div>
			) : null}
		</>
	);
}

function DesktopItem({
	item,
	pathname,
	open,
	onOpenChange,
}: {
	item: PrimaryNavItem;
	pathname: string;
	open: boolean;
	onOpenChange: (open: boolean) => void;
}) {
	const active = navItemIsActive(item, pathname);

	if (!item.children) {
		return (
			<Link
				to={item.to ?? "/"}
				className={cn(linkClass, active && "text-[var(--renoz-green)]")}
				activeProps={{ className: "text-[var(--renoz-green)]" }}
			>
				{item.label}
			</Link>
		);
	}

	return (
		<div
			className="relative"
			onMouseEnter={() => {
				if (window.matchMedia("(hover: hover)").matches) {
					onOpenChange(true);
				}
			}}
			onMouseLeave={() => {
				if (window.matchMedia("(hover: hover)").matches) {
					onOpenChange(false);
				}
			}}
		>
			<button
				type="button"
				className={cn(
					linkClass,
					"inline-flex items-center gap-1",
					(open || active) && "text-[var(--renoz-green)]",
				)}
				aria-expanded={open}
				aria-haspopup="menu"
				onClick={() => onOpenChange(!open)}
			>
				{item.label}
				<ChevronDown
					size={14}
					aria-hidden
					className={cn(
						"transition-transform duration-200 motion-reduce:transition-none",
						open && "rotate-180",
					)}
				/>
			</button>
			{open ? (
				<div role="menu" className="absolute top-full left-0 z-50 pt-4">
					<div className="w-72 rounded-xl border border-white/10 bg-[var(--black)] p-2 shadow-xl">
						{item.children.map((child) => (
							<Link
								key={child.to}
								role="menuitem"
								to={child.to}
								className="block rounded-lg px-3 py-2.5 text-left transition-colors hover:bg-white/10 focus-visible:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--renoz-green)]"
								activeProps={{
									className: "bg-[var(--renoz-green)]/10",
								}}
								onClick={() => onOpenChange(false)}
							>
								<span className="block text-sm font-medium text-white">
									{child.label}
								</span>
								{child.hint ? (
									<span className="mt-0.5 block text-xs text-white/55">
										{child.hint}
									</span>
								) : null}
							</Link>
						))}
					</div>
				</div>
			) : null}
		</div>
	);
}

function MobileItem({
	item,
	pathname,
	expanded,
	onToggle,
}: {
	item: PrimaryNavItem;
	pathname: string;
	expanded: boolean;
	onToggle: () => void;
}) {
	const itemClass =
		"flex min-h-14 w-full items-center justify-between py-3 text-left text-3xl font-semibold tracking-[-0.03em] text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--renoz-green)]";

	if (!item.children) {
		return (
			<Link
				to={item.to ?? "/"}
				className={itemClass}
				activeProps={{ className: "text-[var(--renoz-green)]" }}
			>
				{item.label}
			</Link>
		);
	}

	return (
		<div>
			<button
				type="button"
				className={itemClass}
				aria-expanded={expanded}
				onClick={onToggle}
			>
				<span
					className={
						navItemIsActive(item, pathname)
							? "text-[var(--renoz-green)]"
							: undefined
					}
				>
					{item.label}
				</span>
				<ChevronDown
					size={22}
					aria-hidden
					className={cn(
						"text-white/50 transition-transform duration-200 motion-reduce:transition-none",
						expanded && "rotate-180",
					)}
				/>
			</button>
			{expanded ? (
				<ul className="space-y-1 pb-5">
					{item.children.map((child) => (
						<li key={child.to}>
							<Link
								to={child.to}
								className="block min-h-11 rounded-md py-2 text-lg text-white/70 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--renoz-green)]"
								activeProps={{ className: "text-[var(--renoz-green)]" }}
							>
								{child.label}
							</Link>
						</li>
					))}
				</ul>
			) : null}
		</div>
	);
}
