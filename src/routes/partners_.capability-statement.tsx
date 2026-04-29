import { createFileRoute, Link } from "@tanstack/react-router";
import type { LucideIcon } from "lucide-react";
import {
	ArrowRight,
	Building2,
	CheckCircle2,
	Factory,
	Mail,
	MapPin,
	Phone,
	Printer,
} from "lucide-react";
import { InverterMarquee } from "../components/InverterMarquee";
import { Button } from "../components/ui/Button";
import Image from "../components/ui/Image";
import { caseStudies } from "../data/case-studies";
import { canonicalLink, pageMeta } from "../lib/seo";

export const Route = createFileRoute("/partners_/capability-statement")({
	head: () => ({
		meta: [
			...pageMeta({
				title: "Capability Statement - RENOZ Energy",
				description:
					"RENOZ Energy capability statement for battery storage supply, partner pathways, product configuration, local support, and market-specific battery product development.",
				path: "/partners/capability-statement",
			}),
		],
		links: [canonicalLink("/partners/capability-statement")],
	}),
	component: CapabilityStatementPage,
});

const snapshot = [
	["Legal entity", "RENOZ ENERGY PTY LTD"],
	["ABN", "56 674 982 408"],
	["ACN", "674 982 408"],
	["Head office", "O'Connor, Western Australia"],
	["Core technology", "Lithium battery energy storage systems"],
	["Partner pathways", "Installer, distributor, project, OEM, private-label"],
];

const offerLines = ["Supply", "Configure", "Support", "Develop"];

const capabilityRows = [
	{
		capability: "Supply battery storage systems",
		statement:
			"Residential, rural, and commercial lithium battery systems with product guidance and support pathways.",
		value:
			"A saleable battery range for installers, distributors, and project channels.",
	},
	{
		capability: "Configure product and project fit",
		statement:
			"Capacity, voltage, inverter compatibility, runtime, installation environment, and support requirements.",
		value:
			"Clearer product selection before a partner commits to a customer or market route.",
	},
	{
		capability: "Enable installers and channels",
		statement:
			"Product familiarisation, documentation, commissioning support, troubleshooting, and escalation.",
		value:
			"Partners can sell and install with a support model behind the product.",
	},
	{
		capability: "Coordinate evidence and certification pathways",
		statement:
			"Datasheets, manuals, declarations, compatibility evidence, and standards questions for defined products.",
		value:
			"Cleaner diligence for partners assessing an application, tender, or product launch.",
	},
	{
		capability: "Develop partner-specific battery products",
		statement:
			"Adapted products, private-label pathways, OEM opportunities, and market-specific battery requirements.",
		value:
			"A route for opportunities where a standard catalogue product is not enough.",
	},
	{
		capability: "Support installed systems",
		statement:
			"Warranty intake, technical escalation, RMA coordination, and field feedback loops.",
		value:
			"Local accountability after deployment, not just supply at the point of sale.",
	},
];

const engagementRoutes = [
	{
		title: "Use an existing RENOZ product",
		bestFor:
			"Installer, distribution, and project opportunities that fit the current range.",
		output:
			"Product selection, pricing pathway, documentation, support boundaries.",
	},
	{
		title: "Configure a product pathway",
		bestFor:
			"Applications that need defined capacity, inverter, enclosure, runtime, or installation constraints.",
		output:
			"Fit assessment, integration requirements, evidence questions, route to supply.",
	},
	{
		title: "Develop a partner-specific product",
		bestFor:
			"OEM, private-label, channel, or market-specific opportunities where existing products do not fit.",
		output:
			"Requirements definition, manufacturing pathway, evidence plan, commercial next step.",
	},
];

const reasons = [
	{
		title: "Local technical accountability",
		body: "RENOZ is based in O'Connor, WA, with local contact, support, and escalation for partners.",
	},
	{
		title: "Product pathway capability",
		body: "RENOZ can support supply, configuration, documentation, warranty handling, and adapted product routes.",
	},
	{
		title: "Battery product experience",
		body: "The team brings battery engineering, commercialisation, operations, and channel experience.",
	},
	{
		title: "Field references",
		body: "Published case studies show RENOZ systems operating across residential, rural, and high-demand applications.",
	},
];

const applications = [
	"Residential energy storage",
	"Commercial battery systems",
	"Rural and remote energy",
	"Critical backup power",
	"Installer and distributor channels",
	"OEM and private-label pathways",
];

const featuredCaseStudies = ["harvey-farm", "bally-bally", "simon-oeij"]
	.map((slug) => caseStudies.find((study) => study.slug === slug))
	.filter((study): study is (typeof caseStudies)[number] => Boolean(study));

function CapabilityStatementPage() {
	return (
		<div className="capability-print min-h-screen overflow-x-hidden bg-[var(--cream)] font-sans text-[var(--black)]">
			<div className="hidden capability-print-masthead">
				<div>
					<p className="text-xs font-bold uppercase tracking-[0.18em]">
						Capability Statement
					</p>
					<h1>RENOZ Energy</h1>
				</div>
				<div className="text-right text-xs leading-5">
					<p>RENOZ ENERGY PTY LTD</p>
					<p>ABN 56 674 982 408 | ACN 674 982 408</p>
					<p>sales@renoz.energy | 1800 736 693</p>
				</div>
			</div>

			<section className="capability-print-hero relative flex min-h-[680px] items-center justify-center overflow-hidden bg-[var(--black)] text-white md:min-h-screen">
				<div className="capability-no-print absolute inset-0">
					<Image
						src="/images/about/team-warehouse.webp"
						alt="RENOZ team and battery stock in the O'Connor warehouse"
						width={1920}
						height={1080}
						className="h-full w-full object-cover opacity-18"
						fetchPriority="high"
					/>
					<div className="absolute inset-0 bg-gradient-to-b from-black/90 via-[var(--black)]/72 to-[var(--black)]" />
				</div>

				<div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-28 text-center sm:px-6 lg:px-8">
					<div className="mx-auto flex max-w-4xl flex-col items-center">
						<p className="capability-no-print mb-6 inline-flex rounded-full border border-[var(--renoz-green)]/30 bg-[var(--renoz-green)]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[var(--renoz-green)] backdrop-blur-md">
							Capability statement
						</p>
						<h1 className="max-w-4xl text-5xl font-bold leading-[0.9] tracking-tight sm:text-6xl md:text-8xl">
							Battery pathways for real projects.
						</h1>
						<p className="mt-7 max-w-3xl text-lg font-light leading-8 text-gray-300 sm:text-xl md:text-2xl">
							RENOZ Energy supplies lithium battery storage systems and the
							product pathway around them: configuration, installer enablement,
							documentation, warranty intake, and partner-specific development.
						</p>
						<div className="mt-8 flex flex-wrap justify-center gap-2">
							{offerLines.map((line) => (
								<span
									key={line}
									className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white/86 backdrop-blur-sm"
								>
									{line}
								</span>
							))}
						</div>
						<div className="capability-no-print mt-10 flex w-full max-w-4xl flex-col flex-wrap justify-center gap-4 md:flex-row">
							<Button
								variant="primary"
								size="lg"
								to="/contact?type=partner"
								className="rounded-full px-10 py-6 text-lg shadow-xl transition-all hover:-translate-y-1 hover:shadow-[var(--renoz-green)]/20"
							>
								Discuss partner requirements
								<ArrowRight className="h-5 w-5" />
							</Button>
							<Button
								variant="outline"
								size="lg"
								to="/products"
								className="rounded-full border-white/20 bg-white/10 px-10 py-6 text-lg text-white backdrop-blur-sm hover:bg-white hover:text-[var(--black)]"
							>
								View product range
							</Button>
							<Button
								type="button"
								variant="outline"
								size="lg"
								onClick={() => window.print()}
								className="rounded-full border-white/20 bg-transparent px-10 py-6 text-lg text-white backdrop-blur-sm hover:bg-white hover:text-[var(--black)]"
							>
								<Printer className="h-5 w-5" />
								Print
							</Button>
						</div>
					</div>
				</div>
			</section>

			<main>
				<section className="bg-white py-12">
					<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
						<div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
							{snapshot.map(([label, value]) => (
								<div
									key={label}
									className="capability-avoid-break rounded-3xl border border-gray-100 bg-gray-50 p-6 shadow-sm"
								>
									<div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[var(--renoz-green)] shadow-sm">
										<Building2 className="h-5 w-5" strokeWidth={1.5} />
									</div>
									<p className="text-xs font-bold uppercase tracking-[0.16em] text-gray-400">
										{label}
									</p>
									<p className="mt-2 break-words text-lg font-bold text-[var(--black)]">
										{value}
									</p>
								</div>
							))}
						</div>
					</div>
				</section>

				<section className="border-b border-[#ded8cb] bg-white py-9">
					<div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:px-8 min-[980px]:grid-cols-[0.45fr_1fr] min-[980px]:items-center">
						<div>
							<p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--renoz-green)]">
								Inverter ecosystem
							</p>
							<h2 className="mt-2 text-2xl font-semibold tracking-normal">
								Compatibility is part of the offer.
							</h2>
						</div>
						<InverterMarquee className="capability-no-print rounded-2xl border border-gray-100 bg-gray-50 py-2" />
						<div className="hidden capability-print-logos grid-cols-3 gap-2 text-sm font-semibold text-gray-700 md:grid-cols-5">
							{[
								"Selectronic",
								"Victron",
								"Sungrow",
								"SMA",
								"Deye",
								"GoodWe",
								"Growatt",
								"Sinexcel",
								"CE+T",
							].map((brand) => (
								<div
									key={brand}
									className="rounded border border-gray-200 px-3 py-2"
								>
									{brand}
								</div>
							))}
						</div>
					</div>
				</section>

				<section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
					<div className="mb-10 max-w-3xl">
						<p className="text-label text-[var(--renoz-green)]">
							What RENOZ can do
						</p>
						<h2 className="mt-3 max-w-3xl text-3xl font-bold tracking-tight sm:text-5xl">
							Supply, configure, support, and develop battery products.
						</h2>
					</div>

					<div className="overflow-hidden rounded-[2rem] border border-gray-100 bg-white shadow-sm">
						{capabilityRows.map((row, index) => (
							<article
								key={row.capability}
								className="grid gap-4 border-b border-gray-100 p-6 last:border-b-0 min-[900px]:grid-cols-[4rem_0.85fr_1.15fr_1fr] min-[900px]:items-start"
							>
								<div className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--renoz-green)]/10 text-sm font-bold text-[var(--renoz-green)]">
									{String(index + 1).padStart(2, "0")}
								</div>
								<h3 className="text-xl font-semibold tracking-normal">
									{row.capability}
								</h3>
								<p className="text-base leading-7 text-[var(--text-muted)]">
									{row.statement}
								</p>
								<p className="text-base font-medium leading-7 text-[var(--black)]">
									{row.value}
								</p>
							</article>
						))}
					</div>
				</section>

				<section className="bg-white py-16 sm:py-20">
					<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
						<div className="relative grid gap-12 overflow-hidden rounded-[3rem] bg-[var(--black)] p-8 text-white shadow-2xl sm:p-10 lg:p-12 min-[1100px]:grid-cols-[0.9fr_1.1fr]">
							<div className="absolute right-0 top-0 h-80 w-80 -translate-y-1/2 translate-x-1/3 rounded-full bg-[var(--renoz-green)]/10 blur-[80px]" />
							<div>
								<p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--renoz-green)]">
									What we offer partners
								</p>
								<h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
									A route for standard products, configured systems, and new
									market opportunities.
								</h2>
								<p className="mt-6 max-w-xl text-base leading-7 text-gray-300">
									The first conversation is not a checklist. It is a decision
									about which pathway fits the opportunity.
								</p>
							</div>
							<div className="relative space-y-4">
								{engagementRoutes.map((route) => (
									<article
										key={route.title}
										className="capability-avoid-break rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
									>
										<h3 className="text-xl font-semibold tracking-normal text-white">
											{route.title}
										</h3>
										<div className="mt-4 grid gap-4 text-sm leading-6 sm:grid-cols-2">
											<p className="text-gray-400">
												<span className="block text-xs font-bold uppercase tracking-[0.14em] text-[var(--renoz-green)]">
													Best for
												</span>
												{route.bestFor}
											</p>
											<p className="text-gray-200">
												<span className="block text-xs font-bold uppercase tracking-[0.14em] text-[var(--renoz-green)]">
													RENOZ output
												</span>
												{route.output}
											</p>
										</div>
									</article>
								))}
							</div>
						</div>
					</div>
				</section>

				<section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
					<div className="grid gap-10 min-[1100px]:grid-cols-[0.78fr_1.22fr] min-[1100px]:items-start">
						<div>
							<p className="text-label text-[var(--renoz-green)]">
								Why work with RENOZ
							</p>
							<h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">
								Because the product is only one part of the partner risk.
							</h2>
							<div className="capability-no-print mt-8">
								<Button
									variant="outline"
									to="/products"
									className="rounded-full border-[var(--black)] bg-transparent hover:bg-[var(--black)] hover:text-white"
								>
									View current products
									<ArrowRight className="h-4 w-4" />
								</Button>
							</div>
						</div>
						<div className="grid gap-5 sm:grid-cols-2">
							{reasons.map((reason) => (
								<article
									key={reason.title}
									className="capability-avoid-break rounded-3xl border border-gray-100 bg-white p-6 shadow-sm"
								>
									<CheckCircle2 className="mb-5 h-5 w-5 text-[var(--renoz-green)]" />
									<h3 className="text-xl font-semibold tracking-normal">
										{reason.title}
									</h3>
									<p className="mt-3 text-sm leading-6 text-[var(--text-muted)]">
										{reason.body}
									</p>
								</article>
							))}
						</div>
					</div>
				</section>

				<section className="bg-white py-16 sm:py-20">
					<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
						<div className="grid gap-10 min-[1100px]:grid-cols-[0.9fr_1.1fr]">
							<div>
								<p className="text-label text-[var(--renoz-green)]">
									Relevant applications
								</p>
								<h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">
									Where the capability applies.
								</h2>
							</div>
							<div className="grid gap-3 sm:grid-cols-2">
								{applications.map((application) => (
									<div
										key={application}
										className="rounded-2xl border border-gray-100 bg-gray-50 px-4 py-3 text-base font-semibold"
									>
										{application}
									</div>
								))}
							</div>
						</div>

						<div className="mt-14">
							<div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
								<div>
									<p className="text-label text-[var(--renoz-green)]">
										Published field references
									</p>
									<h2 className="mt-3 text-3xl font-bold">
										Installed systems in Western Australian conditions.
									</h2>
								</div>
								<Link
									to="/case-studies"
									className="capability-no-print inline-flex items-center gap-2 text-sm font-bold text-[var(--renoz-green)] hover:underline"
								>
									View case studies
									<ArrowRight className="h-4 w-4" />
								</Link>
							</div>
							<div className="grid gap-5 md:grid-cols-3">
								{featuredCaseStudies.map((study) => (
									<article
										key={study.slug}
										className="capability-avoid-break overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm"
									>
										<Image
											src={study.image}
											alt={study.title}
											width={700}
											height={460}
											className="h-44 w-full object-cover"
										/>
										<div className="p-5">
											<div className="mb-3 flex items-center justify-between gap-3 text-xs font-bold uppercase tracking-[0.12em] text-gray-400">
												<span>{study.location}</span>
												<span>{study.systemSize}</span>
											</div>
											<h3 className="text-lg font-semibold tracking-normal">
												{study.title}
											</h3>
										</div>
									</article>
								))}
							</div>
						</div>
					</div>
				</section>

				<section className="capability-avoid-break flex justify-center bg-[var(--cream)] px-4 py-16 sm:px-6 sm:py-20">
					<div className="grid w-full max-w-7xl overflow-hidden rounded-[3rem] bg-[var(--black)] text-white shadow-2xl sm:grid-cols-1 min-[1100px]:grid-cols-[0.85fr_1.15fr]">
						<div className="p-8 sm:p-10">
							<Factory className="mb-6 h-8 w-8 text-[var(--renoz-green)]" />
							<p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--renoz-green)]">
								Partner enquiries
							</p>
							<h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">
								Bring the opportunity. RENOZ will help define the route.
							</h2>
							<p className="mt-5 max-w-xl text-sm leading-7 text-gray-300">
								For installer, distributor, project, OEM, private-label, or
								strategic battery product enquiries.
							</p>
						</div>
						<div className="grid gap-px bg-white/10 min-[720px]:grid-cols-3">
							<ContactCard
								icon={Mail}
								label="Email"
								value="sales@renoz.energy"
								href="mailto:sales@renoz.energy"
							/>
							<ContactCard
								icon={Phone}
								label="Phone"
								value="1800 736 693"
								href="tel:1800736693"
							/>
							<ContactCard
								icon={MapPin}
								label="Location"
								value="O'Connor WA"
								href="/contact?type=partner"
							/>
							<div className="capability-no-print bg-[var(--black)] p-6 min-[720px]:col-span-3">
								<Button
									variant="primary"
									size="lg"
									to="/contact?type=partner"
									className="w-full rounded-full"
								>
									Discuss partner requirements
									<ArrowRight className="h-5 w-5" />
								</Button>
							</div>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}

function ContactCard({
	icon: Icon,
	label,
	value,
	href,
}: {
	icon: LucideIcon;
	label: string;
	value: string;
	href: string;
}) {
	return (
		<a
			href={href}
			className="bg-[var(--black)] p-6 text-white transition hover:bg-[var(--black-soft)]"
		>
			<Icon className="mb-5 h-5 w-5 text-[var(--renoz-green)]" />
			<p className="text-xs font-bold uppercase tracking-[0.14em] text-white/44">
				{label}
			</p>
			<p className="mt-2 break-words text-base font-semibold">{value}</p>
		</a>
	);
}
