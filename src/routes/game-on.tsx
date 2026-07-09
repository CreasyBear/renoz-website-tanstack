import { useForm } from "@tanstack/react-form";
import { createFileRoute } from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Battery, CheckCircle2, Clock } from "lucide-react";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { z } from "zod";
import { Button } from "../components/ui/Button";
import Card from "../components/ui/Card";
import { Checkbox } from "../components/ui/checkbox";
import Image from "../components/ui/Image";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "../components/ui/select";
import Turnstile, { type TurnstileRef } from "../components/ui/Turnstile";
import { secureValidators, useSecureForm } from "../lib/form-security";
import { canonicalLink, pageMeta } from "../lib/seo";
import { submitInquiry } from "../lib/submitInquiry";

/** Round 1 close: 28 Jul 2026 21:00 AEST (UTC+10). */
const CLOSE_AT = new Date("2026-07-28T21:00:00+10:00");

export const Route = createFileRoute("/game-on")({
	head: () => ({
		meta: [
			...pageMeta({
				title: "Game On energy upgrades for WA sports clubs: RENOZ × Oasis",
				description:
					"Community sports clubs can apply for $25,000–$100,000 under Game On for solar, battery backup and related upgrades. Enquire with RENOZ. Oasis Electrical handles site work and quoting; RENOZ supplies the battery line.",
				path: "/game-on",
			}),
		],
		links: [canonicalLink("/game-on")],
	}),
	component: GameOnPage,
});

const funnelSteps = [
	{
		step: "1",
		title: "Short scoping call",
		who: "Oasis Electrical",
		detail:
			"A quick call covers what your club wants to fund: battery backup, solar, LEDs, switchboard, EV charging and similar, plus basic site details and a rough budget within $25,000 to $100,000.",
	},
	{
		step: "2",
		title: "Itemised quote for your application",
		who: "Oasis + RENOZ",
		detail:
			"Oasis prepares an itemised budgetary quote for your GrantConnect file. RENOZ supplies the battery + inverter line and backup figures into that quote. Final details are confirmed on site before anything ships.",
	},
	{
		step: "3",
		title: "Your club submits",
		who: "Your club",
		detail:
			"Your club or lead organisation attaches the quote and required paperwork, then applies via GrantConnect. You remain the applicant. Not Oasis, not RENOZ.",
	},
	{
		step: "4+",
		title: "If funded, install after agreement",
		who: "After DCCEEW decision",
		detail:
			"If your application is approved, installation can only start after your grant agreement is signed (expected around December 2026 at the earliest). Oasis installs; RENOZ delivers the battery hardware.",
	},
];

const fitItems = [
	"Not-for-profit sports clubs affiliated with a state or national sporting body",
	"Councils or regional associations leading a small consortium (even for one eligible club)",
	"Facilities used for grassroots sport; limited commercial use (for example a licensed bar) is usually fine",
	"Clubs that own their facility, or can get facility-owner consent",
	"Projects in scope: solar, battery backup, LED lighting, switchboard works, EV charging, HVAC/pool controls, shading, drainage",
];

const checkFirstItems = [
	"Commercial businesses (private gyms, some academies) unless they are genuinely not-for-profit and affiliated",
	"A council applying alone for its own recreation centre with no eligible club named",
	"Sites owned by a private individual or a trust/trustee (unless the trust itself is an eligible applicant)",
	"Metro school or university sites (only outer-regional, remote or very-remote sites with genuine community access may qualify)",
];

/** Eligible activities from programme scope (enquiry multi-select, not an application). */
const interestOptions = [
	"Battery backup / backup power",
	"Solar PV",
	"LED lighting",
	"Switchboard upgrade",
	"EV charging",
	"HVAC / pool-plant controls",
	"Shading / drainage / other resilience",
	"Not sure yet, need advice",
] as const;

const nfpOptions = [
	{ value: "yes", label: "Yes, not-for-profit and affiliated" },
	{ value: "nfp_only", label: "Not-for-profit, affiliation unsure" },
	{ value: "unsure", label: "Not sure" },
	{ value: "no", label: "No / commercial business" },
] as const;

const facilityOptions = [
	{ value: "own", label: "Club owns the facility" },
	{ value: "rent_consent", label: "Rent / lease, can get owner consent" },
	{ value: "rent_unsure", label: "Rent / lease, unsure about consent" },
	{ value: "council", label: "Council / shared facility" },
	{ value: "unsure", label: "Not sure yet" },
] as const;

function formatFieldValue(value: unknown): string {
	if (value == null) return "";
	if (typeof value === "string") return value;
	return "";
}

function formatErrors(errors: unknown[] | string | undefined): string {
	if (errors == null) return "";
	if (typeof errors === "string") return errors;
	if (!Array.isArray(errors) || errors.length === 0) return "";
	return errors
		.map((e) => {
			if (typeof e === "string") return e;
			if (e && typeof e === "object" && "message" in e) {
				const message = e.message;
				return typeof message === "string" ? message : "";
			}
			return "";
		})
		.filter(Boolean)
		.join(", ");
}

type CountdownParts = {
	days: number;
	hours: number;
	minutes: number;
	seconds: number;
	expired: boolean;
};

function getCountdown(now: Date): CountdownParts {
	const ms = CLOSE_AT.getTime() - now.getTime();
	if (ms <= 0) {
		return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true };
	}
	const totalSeconds = Math.floor(ms / 1000);
	const days = Math.floor(totalSeconds / 86400);
	const hours = Math.floor((totalSeconds % 86400) / 3600);
	const minutes = Math.floor((totalSeconds % 3600) / 60);
	const seconds = totalSeconds % 60;
	return { days, hours, minutes, seconds, expired: false };
}

function useCountdown(): CountdownParts {
	const [parts, setParts] = useState(() => getCountdown(new Date()));

	useEffect(() => {
		const tick = () => setParts(getCountdown(new Date()));
		tick();
		const id = window.setInterval(tick, 1000);
		return () => window.clearInterval(id);
	}, []);

	return parts;
}

const gameOnFormSchema = z.object({
	name: z
		.string()
		.trim()
		.min(1, "Please enter your name")
		.max(100, "Name too long"),
	email: z
		.string()
		.trim()
		.min(5, "Email too short")
		.max(254, "Email too long")
		.email("Invalid email format")
		.refine((email) => !/[\r\n]/.test(email), "Invalid email format"),
	phone: z.string().trim().max(40, "Phone too long"),
	club_name: z
		.string()
		.trim()
		.min(1, "Please enter the club or organisation name")
		.max(120, "Name too long"),
	role: z.string().trim().max(80, "Role too long"),
	sport: z.string().trim().max(80, "Sport too long"),
	suburb: z.string().trim().max(80, "Suburb too long"),
	nfp_status: z.string().trim().max(40),
	facility: z.string().trim().max(40),
	interests: z.array(z.string()),
	message: z
		.string()
		.trim()
		.min(
			10,
			"Please add a short note about what you need (minimum 10 characters)",
		)
		.max(2000, "Message too long"),
	turnstileToken: z.string().min(1, "Please complete the spam check"),
	website: z.string().max(0, "Spam detected"),
});

function labelFor(
	options: ReadonlyArray<{ value: string; label: string }>,
	value: string,
): string {
	const match = options.find((option) => option.value === value);
	return match?.label ?? value;
}

function GameOnPage() {
	const countdown = useCountdown();
	const turnstileRef = useRef<TurnstileRef>(null);
	const reduceMotion = useReducedMotion();
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [notificationStatus, setNotificationStatus] = useState<
		"unknown" | "sent" | "failed" | "skipped"
	>("unknown");

	const nameId = useId();
	const emailId = useId();
	const phoneId = useId();
	const clubId = useId();
	const roleId = useId();
	const sportId = useId();
	const suburbId = useId();
	const messageId = useId();
	const interestsLegendId = useId();

	const handleInquirySubmit = useCallback(
		async (data: Record<string, unknown>) => {
			setNotificationStatus("unknown");

			const name = typeof data.name === "string" ? data.name : "";
			const email = typeof data.email === "string" ? data.email : "";
			const clubName = typeof data.club_name === "string" ? data.club_name : "";
			const phone = typeof data.phone === "string" ? data.phone : "";
			const role = typeof data.role === "string" ? data.role : "";
			const sport = typeof data.sport === "string" ? data.sport : "";
			const suburb = typeof data.suburb === "string" ? data.suburb : "";
			const nfpStatusRaw =
				typeof data.nfp_status === "string" ? data.nfp_status : "";
			const facilityRaw =
				typeof data.facility === "string" ? data.facility : "";
			const nfpStatusLabel = nfpStatusRaw
				? labelFor(nfpOptions, nfpStatusRaw)
				: "";
			const facilityLabel = facilityRaw
				? labelFor(facilityOptions, facilityRaw)
				: "";
			const interests = Array.isArray(data.interests)
				? data.interests.filter(
						(item): item is string => typeof item === "string",
					)
				: [];
			const messageBody = typeof data.message === "string" ? data.message : "";
			const turnstileToken =
				typeof data.turnstileToken === "string" ? data.turnstileToken : "";

			const result = await submitInquiry({
				data: {
					name,
					email,
					company: clubName,
					inquiry_type: "game-on",
					message: messageBody,
					turnstileToken,
					phone,
					role,
					sport,
					suburb,
					nfp_status: nfpStatusLabel,
					facility: facilityLabel,
					interests,
				},
			});

			if (!result.success) {
				throw new Error(result.error ?? "Failed to send enquiry");
			}
			setNotificationStatus(result.notificationStatus ?? "unknown");
		},
		[],
	);

	const { secureSubmit, submitStatus, submitError } = useSecureForm({
		rateLimitKey: "game-on-form",
		csrfProtection: true,
		onSubmit: handleInquirySubmit,
	});

	const form = useForm({
		defaultValues: {
			name: "",
			email: "",
			phone: "",
			club_name: "",
			role: "",
			sport: "",
			suburb: "",
			nfp_status: "",
			facility: "",
			interests: [] as string[],
			message: "",
			turnstileToken: "",
			website: "",
		},
		validators: {
			onSubmit: gameOnFormSchema,
		},
		onSubmit: async ({ value }) => {
			if (isSubmitting) return;
			setIsSubmitting(true);
			try {
				await secureSubmit(value);
			} catch (error) {
				if (error instanceof Error) {
					if (
						error.message.includes("fetch") ||
						error.message.includes("network")
					) {
						throw new Error(
							"Network connection failed. Please check your internet connection and try again.",
						);
					}
					if (error.message.includes("rate limit")) {
						throw new Error(
							"Too many submissions. Please wait a few minutes before trying again.",
						);
					}
				}
				throw error;
			} finally {
				setIsSubmitting(false);
			}
		},
	});

	useEffect(() => {
		if (submitStatus === "success") {
			form.reset();
			turnstileRef.current?.reset();
		}
	}, [submitStatus, form]);

	const fieldClassName =
		"w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--renoz-green)] focus:border-transparent outline-none transition-all placeholder:text-gray-400";
	const labelClassName =
		"block text-xs font-bold uppercase tracking-wider mb-2 text-gray-500";
	const selectTriggerClassName =
		"w-full h-auto min-h-12 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-base shadow-none focus-visible:ring-[var(--renoz-green)]";

	return (
		<div className="min-h-screen bg-[var(--cream)] font-sans">
			{/* Hero */}
			<section className="relative min-h-[70vh] flex items-center overflow-hidden bg-[var(--black)] text-white">
				<div className="absolute inset-0 bg-gradient-to-br from-black via-black to-[var(--renoz-green)]/20" />
				<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full py-24">
					<motion.div
						initial={reduceMotion ? false : { opacity: 0, y: 24 }}
						animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
						transition={reduceMotion ? undefined : { duration: 0.7 }}
						className="max-w-3xl"
					>
						<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--renoz-green)]/30 bg-[var(--renoz-green)]/10 shadow-glow mb-8">
							<Battery className="w-4 h-4 text-[var(--renoz-green)]" />
							<span className="text-[var(--renoz-green)] text-xs font-bold uppercase tracking-widest">
								Game On · Round 1
							</span>
						</div>

						<h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight leading-[1.05] text-white">
							Game On funding for
							<br />
							<span className="text-[var(--renoz-green)]">
								club energy upgrades.
							</span>
						</h1>

						<p className="text-lg md:text-xl text-zinc-300 mb-8 leading-relaxed font-light max-w-xl">
							Community sports clubs can apply for{" "}
							<span className="text-white font-medium">$25,000–$100,000</span>{" "}
							(GST excl., up to 100% of eligible costs) toward solar, battery
							backup, LEDs, switchboards, EV charging and related upgrades.
							Round 1 closes{" "}
							<span className="text-white font-medium">
								28 July 2026, 9pm AEST
							</span>
							, or earlier if funding is exhausted.
						</p>

						<div className="mb-10 rounded-2xl border border-white/10 bg-[var(--black)]/60 p-5 max-w-xl">
							<div className="flex items-center gap-2 mb-4 text-xs font-bold uppercase tracking-widest text-[var(--renoz-green)]">
								<Clock className="w-4 h-4" />
								{countdown.expired
									? "Applications closed"
									: "Time left to apply"}
							</div>
							{countdown.expired ? (
								<p className="text-zinc-300 text-sm leading-relaxed">
									Round 1 has closed, or funding may already be exhausted.
									Contact us if you want help preparing for a later round.
								</p>
							) : (
								<div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
									{(
										[
											["Days", countdown.days],
											["Hours", countdown.hours],
											["Mins", countdown.minutes],
											["Secs", countdown.seconds],
										] as const
									).map(([label, value]) => (
										<div
											key={label}
											className="rounded-xl bg-[var(--black)]/50 border border-white/10 px-3 py-4"
										>
											<div className="text-3xl font-bold tabular-nums text-white">
												{String(value).padStart(2, "0")}
											</div>
											<div className="text-xs uppercase tracking-wider text-white/60 mt-1.5">
												{label}
											</div>
										</div>
									))}
								</div>
							)}
							<p className="mt-4 text-xs text-zinc-500 leading-relaxed">
								Closes 28 July 2026, 9:00 pm AEST, or earlier if funds are
								exhausted. Open, non-competitive assessment; limited funding.
							</p>
						</div>

						<div className="flex flex-col sm:flex-row gap-4">
							<a href="#enquiry-form" className="inline-flex">
								<Button
									variant="primary"
									size="lg"
									className="rounded-full px-8 py-6 text-lg shadow-xl"
								>
									Enquire about Game On
									<ArrowRight className="ml-2 w-5 h-5" />
								</Button>
							</a>
							<a href="#how-it-works" className="inline-flex">
								<Button
									variant="outline"
									size="lg"
									className="rounded-full px-8 py-6 text-lg bg-transparent text-white border-white/20 hover:bg-white hover:text-[var(--black)]"
								>
									How it works
								</Button>
							</a>
						</div>

						<p className="mt-6 text-sm text-zinc-400 max-w-xl">
							Oasis Electrical is your point of contact for scoping, quoting and
							install. RENOZ, Perth supplies the battery + inverter line. Your
							club remains the grant applicant.
						</p>
					</motion.div>
				</div>
			</section>

			{/* Partnership */}
			<section className="section-spacing bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-12 max-w-2xl mx-auto">
						<p className="text-[var(--renoz-green)] text-xs font-bold uppercase tracking-widest mb-3">
							Who you work with
						</p>
						<h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--black)]">
							Oasis Electrical + RENOZ Energy
						</h2>
						<p className="text-[var(--text-muted)] text-lg leading-relaxed">
							For Game On, clubs get a coordinated solar and battery package:
							Oasis Electrical handles the site relationship, quote and install;
							RENOZ supplies the battery + inverter line into that quote. One
							coordinated package with clear roles and one club-facing
							contractor.
						</p>
					</div>

					<div className="grid md:grid-cols-2 gap-8 mb-10">
						<Card variant="neutral" className="flex flex-col">
							<div className="h-20 mb-6 flex items-center justify-center rounded-2xl bg-white border border-gray-100 px-6">
								<Image
									src="/images/partners/oasis-electrical-logo.webp"
									alt="Oasis Electrical"
									className="max-h-16 w-auto object-contain"
									width={204}
									height={200}
								/>
							</div>
							<h3 className="text-xl font-bold mb-3 text-[var(--black)]">
								Oasis Electrical
							</h3>
							<p className="text-[var(--text-muted)] text-sm leading-relaxed mb-4">
								WA electrical contractor (licence EC9647), Perth-based. For Game
								On, Oasis is the club-facing partner: scoping call, multi-trade
								quote for your application, submission support, install and
								after-care.
							</p>
							<p className="text-xs text-zinc-500 leading-relaxed mt-auto">
								Commercial and facility projects include Goodlife gyms, Big Ass
								Fans, Yagan Square, and school and gym programmes across WA.
								Project references and credentials are Oasis&apos;s to confirm
								with you directly.
							</p>
						</Card>
						<Card variant="neutral" className="flex flex-col">
							<div className="h-20 mb-6 flex items-center justify-center rounded-2xl bg-white border border-gray-100 px-6">
								<Image
									src="/images/optimized/logo-renoz.webp"
									alt="RENOZ Energy"
									className="max-h-12 w-auto object-contain"
									width={180}
									height={48}
								/>
							</div>
							<h3 className="text-xl font-bold mb-3 text-[var(--black)]">
								RENOZ Energy
							</h3>
							<p className="text-[var(--text-muted)] text-sm leading-relaxed mb-4">
								RENOZ, Perth. Perth battery company. Supplies a named battery +
								hybrid inverter line into Oasis&apos;s quote, including backup
								figures your committee can use in the application pack.
							</p>
							<p className="text-xs text-zinc-500 leading-relaxed mt-auto">
								Systems designed in Perth, distributed and supported in WA.
								RENOZ supplies the battery line only. Solar PV and broader
								electrical scope sit with Oasis.
							</p>
						</Card>
					</div>

					<div className="max-w-2xl mx-auto mb-10">
						<h3 className="text-xl md:text-2xl font-bold mb-4 text-[var(--black)]">
							Why partner with Oasis
						</h3>
						<p className="text-[var(--text-muted)] text-base leading-relaxed mb-8">
							For Game On, RENOZ has partnered with Oasis Electrical, a
							Perth-based licensed electrical contractor with a proven track
							record on recreation, health and community facilities across WA.
						</p>
						<blockquote className="border-l-2 border-[var(--renoz-green)] pl-6 mb-4">
							<p className="text-[var(--black)] text-base leading-relaxed italic mb-3">
								&ldquo;We&apos;ve spent 15 years keeping WA&apos;s clubs, gyms
								and community facilities powered and efficient. Game On is a
								genuine chance for your club to cut running costs for good, and
								we&apos;d be proud to help you make the most of it. Give me a
								call and I&apos;ll walk your site personally.&rdquo;
							</p>
							<footer>
								<p className="text-sm font-bold text-[var(--black)]">
									Gareth Edwards
								</p>
								<p className="text-xs text-[var(--text-muted)]">
									Director, Oasis Electrical
								</p>
							</footer>
						</blockquote>
					</div>

					<Card variant="dark" className="md:p-10">
						<h3 className="text-xl md:text-2xl font-bold mb-4">
							How delivery is split
						</h3>
						<ul className="space-y-3 text-sm md:text-base text-zinc-300 leading-relaxed">
							<li className="flex gap-3">
								<span className="text-[var(--renoz-green)] font-bold shrink-0">
									1.
								</span>
								<span>
									<strong className="text-white">
										Oasis is your point of contact
									</strong>{" "}
									for scoping, quoting, application support, install and
									commissioning.
								</span>
							</li>
							<li className="flex gap-3">
								<span className="text-[var(--renoz-green)] font-bold shrink-0">
									2.
								</span>
								<span>
									<strong className="text-white">
										RENOZ supplies the battery line
									</strong>{" "}
									with product, inverter recommendation and backup figures into
									Oasis&apos;s package, typically within a few days of receiving
									site basics.
								</span>
							</li>
							<li className="flex gap-3">
								<span className="text-[var(--renoz-green)] font-bold shrink-0">
									3.
								</span>
								<span>
									<strong className="text-white">
										Your club remains the applicant
									</strong>{" "}
									and grant funds go to the club or lead organisation.
									Installation starts only after the grant agreement is signed.
								</span>
							</li>
						</ul>
					</Card>
				</div>
			</section>

			{/* How it works */}
			{/* biome-ignore lint/correctness/useUniqueElementIds: anchor required for in-page navigation */}
			<section id="how-it-works" className="section-spacing bg-[var(--cream)]">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-12">
						<h2 className="text-3xl md:text-5xl font-bold mb-4 text-[var(--black)]">
							How it works
						</h2>
						<p className="text-[var(--text-muted)] text-lg max-w-2xl mx-auto">
							Start with a short scoping call, not a site visit on day one.
							Quotes support your application now; installation waits until a
							grant agreement is signed.
						</p>
					</div>

					<div className="max-w-2xl mx-auto">
						<ol className="relative space-y-8 before:absolute before:left-[19px] before:top-2 before:bottom-2 before:w-px before:bg-gray-200">
							{funnelSteps.map((item, i) => (
								<motion.li
									key={item.step}
									initial={reduceMotion ? false : { opacity: 0, x: -8 }}
									whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
									viewport={reduceMotion ? undefined : { once: true }}
									transition={reduceMotion ? undefined : { delay: i * 0.06 }}
									className="relative flex gap-5 pl-0"
								>
									<span className="relative z-10 shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-full bg-[var(--renoz-green)] text-white font-bold text-sm ring-4 ring-[var(--cream)]">
										{item.step}
									</span>
									<div className="pt-1">
										<p className="text-xs font-semibold uppercase tracking-wider text-[var(--renoz-green)] mb-1">
											{item.who}
										</p>
										<h3 className="text-lg font-bold text-[var(--black)] mb-1.5">
											{item.title}
										</h3>
										<p className="text-[var(--text-muted)] text-sm leading-relaxed max-w-prose">
											{item.detail}
										</p>
									</div>
								</motion.li>
							))}
						</ol>
					</div>
				</div>
			</section>

			{/* Timeline */}
			<section className="section-spacing bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<Card variant="dark" className="md:p-12">
						<div className="flex items-start gap-4 mb-6">
							<div className="p-3 rounded-2xl bg-white/10">
								<Clock className="w-6 h-6 text-[var(--renoz-green)]" />
							</div>
							<div>
								<h2 className="text-2xl md:text-3xl font-bold mb-2">
									Key dates to keep in mind
								</h2>
								<p className="text-zinc-300 text-sm md:text-base leading-relaxed max-w-2xl">
									Applications close{" "}
									<strong className="text-white">28 July 2026, 9pm AEST</strong>{" "}
									, or earlier if funding is exhausted. Quotes are typically
									turned around in a few days. Installation cannot start until
									the grant agreement is signed (expected around
									November–December 2026 at the earliest).
								</p>
							</div>
						</div>
						<div className="grid sm:grid-cols-3 gap-4 text-sm">
							<div className="rounded-2xl bg-white/5 border border-white/10 p-4">
								<div className="text-[var(--renoz-green)] font-bold mb-1">
									Now – 28 July
								</div>
								<div className="text-zinc-400">
									Scope, quote, submit (hands-on)
								</div>
							</div>
							<div className="rounded-2xl bg-white/5 border border-white/10 p-4">
								<div className="text-[var(--renoz-green)] font-bold mb-1">
									Aug – Oct
								</div>
								<div className="text-zinc-400">
									Assessment, outcomes, notification
								</div>
							</div>
							<div className="rounded-2xl bg-white/5 border border-white/10 p-4">
								<div className="text-[var(--renoz-green)] font-bold mb-1">
									From ~Dec 2026
								</div>
								<div className="text-zinc-400">
									Agreement signed → install allowed
								</div>
							</div>
						</div>
					</Card>
				</div>
			</section>

			{/* Eligibility */}
			<section className="section-spacing bg-[var(--cream)]">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid lg:grid-cols-2 gap-10">
						<div>
							<h2 className="text-3xl md:text-4xl font-bold mb-6 text-[var(--black)]">
								Where this is a clear fit
							</h2>
							<ul className="space-y-3">
								{fitItems.map((item) => (
									<li key={item} className="flex items-start gap-3">
										<CheckCircle2 className="w-5 h-5 text-[var(--renoz-green)] mt-0.5 shrink-0" />
										<span className="text-gray-700 text-sm leading-relaxed">
											{item}
										</span>
									</li>
								))}
							</ul>
						</div>
						<div>
							<h2 className="text-3xl md:text-4xl font-bold mb-6 text-[var(--black)]">
								Worth checking first
							</h2>
							<ul className="space-y-3">
								{checkFirstItems.map((item) => (
									<li key={item} className="flex items-start gap-3">
										<span className="w-5 h-5 rounded-full border-2 border-amber-500 mt-0.5 shrink-0" />
										<span className="text-gray-700 text-sm leading-relaxed">
											{item}
										</span>
									</li>
								))}
							</ul>
							<p className="mt-6 text-sm text-[var(--text-muted)] italic">
								One question resolves most cases: &ldquo;Is this run as a
								not-for-profit club, or is it someone&apos;s business?&rdquo;
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Programme-informed enquiry form */}
			{/* biome-ignore lint/correctness/useUniqueElementIds: anchor required for in-page navigation */}
			<section id="enquiry-form" className="section-spacing bg-white">
				<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-10">
						<h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--black)]">
							Enquire about Game On
						</h2>
						<p className="text-[var(--text-muted)] text-lg leading-relaxed">
							Tell us about your club and what you&apos;re considering. Optional
							fields reflect what the programme looks at (eligibility, facility,
							upgrade types) so we can help faster. This is an enquiry form, not
							your GrantConnect application.
						</p>
					</div>

					<Card className="shadow-2xl border-none rounded-[32px] overflow-hidden bg-white p-8 md:p-10">
						<form
							onSubmit={(e) => {
								e.preventDefault();
								e.stopPropagation();
								form.handleSubmit();
							}}
						>
							<div className="space-y-5">
								<div className="grid md:grid-cols-2 gap-5">
									<form.Field name="name">
										{(field) => (
											<div>
												<label htmlFor={nameId} className={labelClassName}>
													Your name *
												</label>
												<input
													id={nameId}
													value={formatFieldValue(field.state.value)}
													onBlur={field.handleBlur}
													onChange={(e) =>
														field.handleChange(
															secureValidators.sanitize(e.target.value),
														)
													}
													className={fieldClassName}
													placeholder="Jane Smith"
													required
													maxLength={100}
													autoComplete="name"
												/>
												{field.state.meta.errors?.length ? (
													<p className="text-red-500 text-sm mt-1" role="alert">
														{formatErrors(field.state.meta.errors)}
													</p>
												) : null}
											</div>
										)}
									</form.Field>

									<form.Field name="email">
										{(field) => (
											<div>
												<label htmlFor={emailId} className={labelClassName}>
													Email *
												</label>
												<input
													id={emailId}
													type="email"
													value={formatFieldValue(field.state.value)}
													onBlur={field.handleBlur}
													onChange={(e) => field.handleChange(e.target.value)}
													className={fieldClassName}
													placeholder="you@club.org.au"
													required
													maxLength={254}
													autoComplete="email"
												/>
												{field.state.meta.errors?.length ? (
													<p className="text-red-500 text-sm mt-1">
														{formatErrors(field.state.meta.errors)}
													</p>
												) : null}
											</div>
										)}
									</form.Field>
								</div>

								<div className="grid md:grid-cols-2 gap-5">
									<form.Field name="club_name">
										{(field) => (
											<div>
												<label htmlFor={clubId} className={labelClassName}>
													Club / organisation *
												</label>
												<input
													id={clubId}
													value={formatFieldValue(field.state.value)}
													onBlur={field.handleBlur}
													onChange={(e) =>
														field.handleChange(
															secureValidators.sanitize(e.target.value),
														)
													}
													className={fieldClassName}
													placeholder="Club or lead organisation name"
													required
													maxLength={120}
												/>
												{field.state.meta.errors?.length ? (
													<p className="text-red-500 text-sm mt-1">
														{formatErrors(field.state.meta.errors)}
													</p>
												) : null}
											</div>
										)}
									</form.Field>

									<form.Field name="phone">
										{(field) => (
											<div>
												<label htmlFor={phoneId} className={labelClassName}>
													Phone
												</label>
												<input
													id={phoneId}
													type="tel"
													value={formatFieldValue(field.state.value)}
													onBlur={field.handleBlur}
													onChange={(e) =>
														field.handleChange(
															secureValidators.sanitize(e.target.value),
														)
													}
													className={fieldClassName}
													placeholder="04xx xxx xxx"
													maxLength={40}
													autoComplete="tel"
												/>
											</div>
										)}
									</form.Field>
								</div>

								<div className="grid md:grid-cols-2 gap-5">
									<form.Field name="role">
										{(field) => (
											<div>
												<label htmlFor={roleId} className={labelClassName}>
													Your role
												</label>
												<input
													id={roleId}
													value={formatFieldValue(field.state.value)}
													onBlur={field.handleBlur}
													onChange={(e) =>
														field.handleChange(
															secureValidators.sanitize(e.target.value),
														)
													}
													className={fieldClassName}
													placeholder="President, facilities, treasurer…"
													maxLength={80}
												/>
											</div>
										)}
									</form.Field>

									<form.Field name="sport">
										{(field) => (
											<div>
												<label htmlFor={sportId} className={labelClassName}>
													Sport / code
												</label>
												<input
													id={sportId}
													value={formatFieldValue(field.state.value)}
													onBlur={field.handleBlur}
													onChange={(e) =>
														field.handleChange(
															secureValidators.sanitize(e.target.value),
														)
													}
													className={fieldClassName}
													placeholder="Sailing, tennis, cricket…"
													maxLength={80}
												/>
											</div>
										)}
									</form.Field>
								</div>

								<form.Field name="suburb">
									{(field) => (
										<div>
											<label htmlFor={suburbId} className={labelClassName}>
												Facility suburb / area
											</label>
											<input
												id={suburbId}
												value={formatFieldValue(field.state.value)}
												onBlur={field.handleBlur}
												onChange={(e) =>
													field.handleChange(
														secureValidators.sanitize(e.target.value),
													)
												}
												className={fieldClassName}
												placeholder="Where is the facility?"
												maxLength={80}
											/>
										</div>
									)}
								</form.Field>

								<div className="grid md:grid-cols-2 gap-5">
									<form.Field name="nfp_status">
										{(field) => (
											<div>
												<span className={labelClassName}>
													Not-for-profit + sporting affiliation
												</span>
												<Select
													value={field.state.value || undefined}
													onValueChange={(value) => field.handleChange(value)}
												>
													<SelectTrigger className={selectTriggerClassName}>
														<SelectValue placeholder="Select one (optional)" />
													</SelectTrigger>
													<SelectContent>
														{nfpOptions.map((option) => (
															<SelectItem
																key={option.value}
																value={option.value}
															>
																{option.label}
															</SelectItem>
														))}
													</SelectContent>
												</Select>
												<p className="text-xs text-zinc-500 mt-1">
													Programme requires NFP + state/national sporting-body
													affiliation for most individual applicants.
												</p>
											</div>
										)}
									</form.Field>

									<form.Field name="facility">
										{(field) => (
											<div>
												<span className={labelClassName}>
													Facility ownership
												</span>
												<Select
													value={field.state.value || undefined}
													onValueChange={(value) => field.handleChange(value)}
												>
													<SelectTrigger className={selectTriggerClassName}>
														<SelectValue placeholder="Select one (optional)" />
													</SelectTrigger>
													<SelectContent>
														{facilityOptions.map((option) => (
															<SelectItem
																key={option.value}
																value={option.value}
															>
																{option.label}
															</SelectItem>
														))}
													</SelectContent>
												</Select>
												<p className="text-xs text-zinc-500 mt-1">
													Renting is often fine if the facility owner can sign
													consent.
												</p>
											</div>
										)}
									</form.Field>
								</div>

								{/* Multi-select interests via Checkbox (repo UI) */}
								<form.Field name="interests" mode="array">
									{(field) => {
										const selected = Array.isArray(field.state.value)
											? field.state.value
											: [];
										return (
											<fieldset>
												<legend
													id={interestsLegendId}
													className={labelClassName}
												>
													What are you looking at? (select all that apply)
												</legend>
												<div className="rounded-xl border border-gray-200 bg-gray-50 p-4 space-y-3">
													{interestOptions.map((option) => {
														const checked = selected.includes(option);
														const optionId = `${interestsLegendId}-${option}`;
														return (
															<div
																key={option}
																className="flex items-start gap-3"
															>
																<Checkbox
																	id={optionId}
																	checked={checked}
																	onCheckedChange={(state) => {
																		const nextChecked = state === true;
																		if (nextChecked) {
																			if (!selected.includes(option)) {
																				field.pushValue(option);
																			}
																		} else {
																			const index = selected.indexOf(option);
																			if (index >= 0) {
																				field.removeValue(index);
																			}
																		}
																	}}
																	className="mt-0.5 h-5 w-5 border-gray-300 data-[state=checked]:bg-[var(--renoz-green)] data-[state=checked]:border-[var(--renoz-green)]"
																/>
																<label
																	htmlFor={optionId}
																	className="text-sm text-gray-700 cursor-pointer leading-snug"
																>
																	{option}
																</label>
															</div>
														);
													})}
												</div>
												<p className="text-xs text-zinc-500 mt-2">
													Diesel generators are not eligible under the programme
													guidelines (s.5.3). Battery backup is the funded
													alternative for outage resilience.
												</p>
											</fieldset>
										);
									}}
								</form.Field>

								<form.Field name="message">
									{(field) => (
										<div>
											<label htmlFor={messageId} className={labelClassName}>
												How can we help? *
											</label>
											<textarea
												id={messageId}
												rows={5}
												value={formatFieldValue(field.state.value)}
												onBlur={field.handleBlur}
												onChange={(e) =>
													field.handleChange(
														secureValidators.sanitize(e.target.value),
													)
												}
												className={`${fieldClassName} resize-none`}
												placeholder="e.g. We want a battery backup package to attach to a Game On application, or a chat about eligibility and next steps."
												required
												maxLength={2000}
											/>
											{field.state.meta.errors?.length ? (
												<p className="text-red-500 text-sm mt-1">
													{formatErrors(field.state.meta.errors)}
												</p>
											) : null}
										</div>
									)}
								</form.Field>

								{submitStatus === "success" ? (
									<motion.div
										initial={reduceMotion ? false : { opacity: 0 }}
										animate={reduceMotion ? undefined : { opacity: 1 }}
										transition={
											reduceMotion
												? undefined
												: { duration: 0.3, ease: "easeOut" }
										}
										className="p-4 bg-green-50 border border-green-200 rounded-xl text-green-800 flex items-center gap-3"
										role="alert"
										aria-live="polite"
										aria-atomic="true"
									>
										<div
											className="w-6 h-6 bg-green-200 rounded-full flex items-center justify-center shrink-0"
											aria-hidden="true"
										>
											✓
										</div>
										<div>
											{notificationStatus === "failed" ||
											notificationStatus === "skipped"
												? "Thanks for reaching out. Your enquiry was saved, but the automatic email alert did not complete. Please call 1800 736 693 if this is urgent."
												: "Thanks for reaching out! Our team will respond within 24 hours."}
										</div>
									</motion.div>
								) : null}

								{submitStatus === "error" ? (
									<motion.div
										initial={reduceMotion ? false : { opacity: 0 }}
										animate={reduceMotion ? undefined : { opacity: 1 }}
										transition={
											reduceMotion
												? undefined
												: { duration: 0.3, ease: "easeOut" }
										}
										className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-800"
										role="alert"
										aria-live="assertive"
										aria-atomic="true"
									>
										<p>
											{submitError ||
												"We encountered an issue sending your enquiry."}
										</p>
										<p className="mt-1">
											Please try again, or email{" "}
											<a
												className="underline font-medium"
												href="mailto:sales@renoz.energy?subject=Game%20On%20enquiry"
											>
												sales@renoz.energy
											</a>{" "}
											/ call 1800 736 693.
										</p>
									</motion.div>
								) : null}

								<form.Field name="website">
									{(field) => (
										<input
											type="text"
											name="website"
											value={formatFieldValue(field.state.value)}
											onChange={(e) => field.handleChange(e.target.value)}
											style={{ display: "none" }}
											tabIndex={-1}
											autoComplete="off"
											aria-hidden="true"
										/>
									)}
								</form.Field>

								<div className="pt-2">
									{import.meta.env.VITE_TURNSTILE_SITE_KEY ? (
										<form.Field name="turnstileToken">
											{(field) => (
												<>
													<Turnstile
														ref={turnstileRef}
														siteKey={import.meta.env.VITE_TURNSTILE_SITE_KEY}
														onVerify={(token) => field.handleChange(token)}
														onError={() => field.handleChange("")}
														onExpire={() => field.handleChange("")}
														onReset={() => field.handleChange("")}
														theme="auto"
														size="normal"
														className="flex justify-center"
													/>
													{field.state.meta.errors?.length ? (
														<p className="text-red-500 text-sm mt-2 text-center">
															{formatErrors(field.state.meta.errors)}
														</p>
													) : null}
												</>
											)}
										</form.Field>
									) : (
										<div className="p-4 bg-yellow-50 border border-yellow-200 rounded-xl">
											<p className="text-yellow-800 text-sm text-center">
												<strong>Warning:</strong> Turnstile site key is not
												configured. Form submission is disabled.
											</p>
										</div>
									)}
								</div>

								<div className="pt-4">
									<form.Subscribe selector={(state) => [state.canSubmit]}>
										{([canSubmit]) => (
											<Button
												type="submit"
												variant="primary"
												size="lg"
												className="w-full rounded-xl py-4 text-lg shadow-lg shadow-[var(--renoz-green)]/20"
												disabled={
													!canSubmit ||
													!import.meta.env.VITE_TURNSTILE_SITE_KEY ||
													submitStatus === "submitting" ||
													isSubmitting
												}
											>
												{submitStatus === "submitting"
													? "Sending..."
													: "Send enquiry"}
												{submitStatus !== "submitting" && (
													<ArrowRight className="ml-2 w-5 h-5" />
												)}
											</Button>
										)}
									</form.Subscribe>
								</div>

								<p className="text-xs text-zinc-500 text-center leading-relaxed pt-2">
									This is an enquiry form, not a grant application. There is no
									guarantee of approval. Installation cannot start until a grant
									agreement is signed. Prefer email?{" "}
									<a
										className="underline font-medium text-zinc-600"
										href="mailto:sales@renoz.energy?subject=Game%20On%20enquiry"
									>
										sales@renoz.energy
									</a>
								</p>
							</div>
						</form>
					</Card>
				</div>
			</section>
		</div>
	);
}
