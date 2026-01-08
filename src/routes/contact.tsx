import { useForm } from "@tanstack/react-form";
import { createFileRoute, Link } from "@tanstack/react-router";
import { zodValidator } from "@tanstack/zod-form-adapter";
import {
	AnimatePresence,
	motion,
	useScroll,
	useTransform,
} from "framer-motion";
import {
	ArrowRight,
	Building as BuildingIcon,
	ChevronDown,
	ChevronUp,
	Clock,
	HardHat,
	HelpCircle,
	Mail,
	MapPin,
	Phone,
	Shield,
	User,
} from "lucide-react";
import { useId, useRef, useState } from "react";
import { z } from "zod";
import { Button } from "../components/ui/Button";
import Card from "../components/ui/Card";
import Turnstile from "../components/ui/Turnstile";
import VerticalTimeline from "../components/ui/VerticalTimeline";
import { secureValidators, useSecureForm } from "../lib/form-security";
import { cn } from "../lib/utils";

const baseUrl = "https://renoz.energy";

export const Route = createFileRoute("/contact")({
	head: () => ({
		meta: [
			{ title: "Contact RENOZ Energy - Perth Battery OEM" },
			{
				name: "description",
				content:
					"Get in touch with our Perth team. Call 1800 736 693 or email sales@renoz.energy. Located at Unit 4, 8 Murphy Street, O'Connor WA 6163.",
			},
			{
				property: "og:title",
				content: "Contact RENOZ Energy - Perth Battery OEM",
			},
			{
				property: "og:description",
				content:
					"Get in touch with our Perth team. Call 1800 736 693 or email sales@renoz.energy. Located at Unit 4, 8 Murphy Street, O'Connor WA 6163.",
			},
			{ property: "og:url", content: `${baseUrl}/contact` },
			{
				name: "twitter:title",
				content: "Contact RENOZ Energy - Perth Battery OEM",
			},
			{
				name: "twitter:description",
				content:
					"Get in touch with our Perth team. Call 1800 736 693 or email sales@renoz.energy.",
			},
		],
	}),
	component: ContactPage,
	validateSearch: (search: Record<string, unknown>): { type?: string } => {
		return {
			type: search.type as string,
		};
	},
});

// Validation Schema
const inquirySchema = z.object({
	name: z
		.string()
		.min(1, "Please enter your full name so we can address you properly"),
	email: z.string().email("Invalid email address"),
	company: z.string(),
	inquiry_type: z.string(),
	message: z
		.string()
		.min(
			10,
			"Please provide more details about your energy needs (minimum 10 characters)",
		),
	turnstileToken: z.string().min(1, "Please complete the spam check"),
});

function ContactPage() {
	const search = Route.useSearch();

	// Touch optimization for iOS (will be applied to main container)
	const [openFaq, setOpenFaq] = useState<number | null>(null);

	// Ref for scrolling animations
	const containerRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start start", "end end"],
	});
	const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

	// Secure form with TanStack Form integration
	const { secureSubmit, submitStatus } = useSecureForm({
		rateLimitKey: "contact-form",
		csrfProtection: true,
	});

	const form = useForm({
		defaultValues: {
			name: "",
			email: "",
			company: "",
			inquiry_type: search.type || "residential",
			message: "",
			turnstileToken: "",
		},
		// @ts-expect-error Types mismatch in tanstack form adapter
		validatorAdapter: zodValidator(),
		validators: {
			onSubmit: inquirySchema,
		},
		onSubmit: async ({ value }) => {
			await secureSubmit(value);
		},
	});

	const nameId = useId();
	const emailId = useId();
	const companyId = useId();
	const messageId = useId();

	// FAQ Data
	const faqs = [
		{
			q: "Where are RENOZ batteries manufactured?",
			a: "RENOZ battery systems are engineered and designed in Perth, Western Australia. We partner with world-class manufacturers to produce our systems to the highest standards. We are proud to be Perth's own battery OEM.",
		},
		{
			q: "What is the warranty period?",
			a: "We offer a standard 10-year performance warranty on all our battery modules, guaranteeing at least 80% capacity retention after 6,000 cycles.",
		},
		{
			q: "Do you sell directly to homeowners?",
			a: "We primarily work through a network of certified installers to ensure safe and compliant installation. However, you can contact us directly for a system sizing consultation, and we can recommend a local partner.",
		},
		{
			q: "Are your systems compatible with existing solar setups?",
			a: "Yes, RENOZ systems are designed to be inverter-agnostic and can be retrofitted to most existing solar PV installations, including AC-coupled and DC-coupled configurations.",
		},
	];

	return (
		<div className="min-h-screen bg-[var(--cream)]" ref={containerRef}>
			{/* Immersive Hero Section */}
			<section className="relative h-screen min-h-[600px] flex items-center overflow-hidden bg-[var(--black)] text-white">
				<motion.div className="absolute inset-0 z-0" style={{ y }}>
					<div
						className="absolute inset-0 bg-cover bg-center opacity-60"
						style={{
							backgroundImage: "url('/images/about/hero-wa-energy.webp')",
						}}
					/>
					<div className="absolute inset-0 bg-black/40" />
					<div className="absolute inset-0 bg-gradient-to-t from-[var(--cream)] via-transparent to-transparent" />
				</motion.div>

				<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full pt-10">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
					>
						<h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 tracking-tight text-white drop-shadow-lg">
							Let's start a <br /> conversation.
						</h1>
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8, delay: 0.2 }}
							className="glass-dark p-6 md:p-8 rounded-2xl max-w-2xl border-l-4 border-[var(--renoz-green)] shadow-2xl mt-8"
						>
							<p className="text-xl md:text-2xl text-zinc-100 font-normal leading-relaxed">
								Whether you're a homeowner, installer, or developer, our
								Perth-based engineering team is ready to help.
							</p>
						</motion.div>
					</motion.div>
				</div>
			</section>

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 -mt-24 relative z-20">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
					{/* Left Column: Contact Form */}
					<motion.div
						className="lg:col-span-7"
						initial={{ opacity: 0, y: 40 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
					>
						<Card className="shadow-2xl border-none rounded-[32px] overflow-hidden bg-white p-8 md:p-10">
							<form
								onSubmit={(e) => {
									e.preventDefault();
									e.stopPropagation();
									form.handleSubmit();
								}}
							>
								{/* Inquiry Type Selection */}
								<form.Field name="inquiry_type">
									{(field) => {
										const inquiryType = field.state.value;
										const getTitle = () => {
											if (inquiryType === "partnership")
												return "Apply for Trade Account";
											if (inquiryType === "commercial")
												return "Discuss Commercial Project";
											return "Get Expert Advice";
										};
										const getDesc = () => {
											if (inquiryType === "partnership")
												return "Join our partner network for wholesale pricing and direct engineering support.";
											if (inquiryType === "commercial")
												return "Tell us about your project requirements (capacity, voltage, application).";
											return "Let us know your energy needs and we will connect you with a certified installer.";
										};

										return (
											<>
												{/* Segmented Control */}
												<div className="flex bg-gray-100 p-1 rounded-xl mb-8">
													<button
														type="button"
														onClick={() => field.handleChange("residential")}
														className={cn(
															"flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-bold transition-all",
															inquiryType === "residential"
																? "bg-white text-[var(--black)] shadow-sm"
																: "text-gray-500 hover:text-gray-700",
														)}
													>
														<User className="w-4 h-4" />
														<span className="hidden sm:inline">Homeowner</span>
													</button>
													<button
														type="button"
														onClick={() => field.handleChange("partnership")}
														className={cn(
															"flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-bold transition-all",
															inquiryType === "partnership"
																? "bg-white text-[var(--black)] shadow-sm"
																: "text-gray-500 hover:text-gray-700",
														)}
													>
														<HardHat className="w-4 h-4" />
														<span className="hidden sm:inline">Installer</span>
													</button>
													<button
														type="button"
														onClick={() => field.handleChange("commercial")}
														className={cn(
															"flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-bold transition-all",
															inquiryType === "commercial"
																? "bg-white text-[var(--black)] shadow-sm"
																: "text-gray-500 hover:text-gray-700",
														)}
													>
														<BuildingIcon className="w-4 h-4" />
														<span className="hidden sm:inline">Commercial</span>
													</button>
												</div>

												<div className="mb-8">
													<h2 className="text-3xl font-bold text-[var(--black)] mb-2">
														{getTitle()}
													</h2>
													<p className="text-gray-500">{getDesc()}</p>
												</div>
											</>
										);
									}}
								</form.Field>

								<div className="space-y-6">
									<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
										<form.Field name="name">
											{(field) => (
												<div>
													<label
														htmlFor={nameId}
														className="block text-xs font-bold uppercase tracking-wider mb-2 text-gray-500"
													>
														Name *
													</label>
													<input
														id={nameId}
														value={field.state.value}
														onBlur={field.handleBlur}
														onChange={(e) =>
															field.handleChange(
																secureValidators.sanitize(e.target.value),
															)
														}
														className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--renoz-green)] focus:border-transparent outline-none transition-all placeholder:text-gray-400"
														placeholder="John Doe"
														required
														aria-invalid={field.state.meta.errors.length > 0}
														aria-describedby={
															field.state.meta.errors.length > 0
																? `${nameId}-error`
																: undefined
														}
														minLength={2}
														maxLength={100}
													/>
													{field.state.meta.errors ? (
														<p
															id={`${nameId}-error`}
															className="text-red-500 text-sm mt-1"
															role="alert"
															aria-live="polite"
														>
															{field.state.meta.errors.join(", ")}
														</p>
													) : null}
												</div>
											)}
										</form.Field>

										<form.Field name="email">
											{(field) => (
												<div>
													<label
														htmlFor={emailId}
														className="block text-xs font-bold uppercase tracking-wider mb-2 text-gray-500"
													>
														Email *
													</label>
													<input
														id={emailId}
														type="email"
														value={field.state.value}
														onBlur={field.handleBlur}
														onChange={(e) => field.handleChange(e.target.value)}
														className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--renoz-green)] focus:border-transparent outline-none transition-all placeholder:text-gray-400"
														placeholder="john@example.com"
													/>
													{field.state.meta.errors ? (
														<p className="text-red-500 text-sm mt-1">
															{field.state.meta.errors.join(", ")}
														</p>
													) : null}
												</div>
											)}
										</form.Field>
									</div>

									<form.Field name="company">
										{(field) => (
											<div>
												<form.Subscribe
													selector={(state) => [state.values.inquiry_type]}
												>
													{([inquiryType]) => (
														<>
															<label
																htmlFor={companyId}
																className="block text-xs font-bold uppercase tracking-wider mb-2 text-gray-500"
															>
																{inquiryType === "residential"
																	? "Address (Optional)"
																	: "Company Name"}
															</label>
															<input
																id={companyId}
																value={field.state.value}
																onBlur={field.handleBlur}
																onChange={(e) =>
																	field.handleChange(e.target.value)
																}
																className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--renoz-green)] focus:border-transparent outline-none transition-all placeholder:text-gray-400"
																placeholder={
																	inquiryType === "residential"
																		? "Your suburb or address"
																		: "Your business name"
																}
															/>
														</>
													)}
												</form.Subscribe>
											</div>
										)}
									</form.Field>

									<form.Field name="message">
										{(field) => (
											<div>
												<label
													htmlFor={messageId}
													className="block text-xs font-bold uppercase tracking-wider mb-2 text-gray-500"
												>
													Message *
												</label>
												<textarea
													id={messageId}
													rows={5}
													value={field.state.value}
													onBlur={field.handleBlur}
													onChange={(e) => field.handleChange(e.target.value)}
													className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--renoz-green)] focus:border-transparent outline-none transition-all resize-none placeholder:text-gray-400"
													placeholder="Tell us about your project requirements..."
												/>
												{field.state.meta.errors ? (
													<p className="text-red-500 text-sm mt-1">
														{field.state.meta.errors.join(", ")}
													</p>
												) : null}
											</div>
										)}
									</form.Field>

									{submitStatus === "success" && (
										<motion.div
											initial={{ opacity: 0, height: 0 }}
											animate={{ opacity: 1, height: "auto" }}
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
												Thanks for reaching out! Our energy experts will respond
												within 24 hours with your custom solution.
											</div>
										</motion.div>
									)}

									{submitStatus === "error" && (
										<motion.div
											initial={{ opacity: 0, height: 0 }}
											animate={{ opacity: 1, height: "auto" }}
											className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-800"
											role="alert"
											aria-live="assertive"
											aria-atomic="true"
										>
											We encountered an issue sending your message. Please try
											again or contact us directly or call us directly.
										</motion.div>
									)}

									{/* Cloudflare Turnstile */}
									<div className="pt-2">
										{import.meta.env.VITE_TURNSTILE_SITE_KEY ? (
											<form.Field name="turnstileToken">
												{(field) => (
													<>
														<Turnstile
															siteKey={import.meta.env.VITE_TURNSTILE_SITE_KEY}
															onVerify={(token) => field.handleChange(token)}
															onError={() => field.handleChange("")}
															theme="auto"
															size="normal"
															className="flex justify-center"
														/>
														{field.state.meta.errors ? (
															<p className="text-red-500 text-sm mt-2 text-center">
																{field.state.meta.errors.join(", ")}
															</p>
														) : null}
													</>
												)}
											</form.Field>
										) : (
											<div className="p-4 bg-yellow-50 border border-yellow-200 rounded-xl">
												<p className="text-yellow-800 text-sm text-center">
													<strong>Warning:</strong> Turnstile site key is not
													configured. Please add{" "}
													<code className="bg-yellow-100 px-1 rounded">
														VITE_TURNSTILE_SITE_KEY
													</code>{" "}
													to your environment variables.
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
														submitStatus === "submitting"
													}
													aria-describedby="submit-status"
												>
													{submitStatus === "submitting"
														? "Sending..."
														: "Get Expert Advice"}
													{submitStatus !== "submitting" && (
														<ArrowRight className="ml-2 w-5 h-5" />
													)}
												</Button>
											)}
										</form.Subscribe>

										{/* Submit status for screen readers */}
										<div
											className="sr-only"
											aria-live="polite"
											aria-atomic="true"
										>
											{submitStatus === "submitting" &&
												"Sending your message..."}
											{submitStatus === "success" &&
												"Message sent successfully"}
											{submitStatus === "error" && "Failed to send message"}
										</div>
									</div>
								</div>
							</form>
						</Card>
					</motion.div>

					{/* Right Column: Info Bento Grid */}
					<div className="lg:col-span-5 space-y-6">
						{/* Phone Card - Dark */}
						<motion.a
							href="tel:1800736693"
							className="block bg-[var(--black)] text-white rounded-[32px] p-8 shadow-xl hover:scale-[1.02] transition-transform duration-300 group relative overflow-hidden"
							initial={{ opacity: 0, x: 20 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: 0.3 }}
						>
							<div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -mr-10 -mt-10" />
							<div className="relative z-10">
								<div className="flex justify-between items-start mb-6">
									<div className="p-3 bg-white/10 rounded-[20px]">
										<Phone className="w-6 h-6 text-[var(--renoz-green)]" />
									</div>
									<ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" />
								</div>
								<p className="text-sm text-gray-400 font-bold uppercase tracking-wider mb-1">
									Call Us
								</p>
								<p className="text-3xl font-bold mb-4">1800 736 693</p>
								<div className="flex items-center gap-2 text-sm text-gray-400">
									<Clock className="w-4 h-4" />
									<span>Mon-Fri, 8am - 5pm AWST</span>
								</div>
							</div>
						</motion.a>

						{/* Email Card - Light */}
						<motion.a
							href="mailto:sales@renoz.energy"
							className="block bg-white text-[var(--black)] rounded-[32px] p-8 shadow-soft hover:shadow-lg transition-all duration-300 group"
							initial={{ opacity: 0, x: 20 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: 0.4 }}
						>
							<div className="flex justify-between items-start mb-6">
								<div className="p-3 bg-gray-100 rounded-[20px] group-hover:bg-[var(--renoz-green)]/10 transition-colors">
									<Mail className="w-6 h-6 text-[var(--black)] group-hover:text-[var(--renoz-green)] transition-colors" />
								</div>
								<ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-[var(--black)] transition-colors" />
							</div>
							<p className="text-sm text-gray-400 font-bold uppercase tracking-wider mb-1">
								Email Us
							</p>
							<p className="text-2xl font-bold break-all">sales@renoz.energy</p>
						</motion.a>

						{/* Location Card */}
						<motion.div
							className="bg-[var(--renoz-green)] text-white rounded-[32px] p-8 shadow-xl relative overflow-hidden"
							initial={{ opacity: 0, x: 20 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: 0.5 }}
						>
							<div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-10 mix-blend-overlay pointer-events-none" />
							<div className="relative z-10">
								<MapPin className="w-8 h-8 text-white mb-6" />
								<p className="text-sm text-white/60 font-bold uppercase tracking-wider mb-1">
									Head Office & Factory
								</p>
								<p className="text-xl font-bold leading-tight">
									Unit 4, 8 Murphy Street
									<br />
									O'Connor WA 6163
								</p>
								<div className="mt-6 pt-6 border-t border-white/20">
									<a
										href="https://maps.google.com/?q=8+Murphy+Street+O'Connor+WA"
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex items-center text-sm font-bold hover:text-white/80 transition-colors"
									>
										Get Directions <ArrowRight className="w-4 h-4 ml-2" />
									</a>
								</div>
							</div>
						</motion.div>
					</div>
				</div>

				{/* What to Expect Section */}
				<div className="mt-12 md:mt-20 lg:mt-32">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
					>
						{/* Mobile: Horizontal Steps */}
						<div className="md:hidden flex overflow-x-auto snap-x snap-mandatory gap-4 px-4 -mx-4 hide-scrollbar pb-8">
							{[
								{
									title: "Initial Review",
									description:
										"Our admin team reviews your inquiry within 24 hours (Mon-Fri) and routes it to the correct department.",
									step: "01",
								},
								{
									title: "Technical Sizing",
									description:
										"For complex projects, our engineers may request additional info (switchboard photos, load profiles) to provide an accurate quote.",
									step: "02",
								},
								{
									title: "Connection",
									description:
										"We'll either provide a direct quote or introduce you to a certified local partner who can handle the installation.",
									step: "03",
								},
							].map((item, i) => (
								<div key={i} className="snap-center shrink-0 w-[85%] max-w-sm">
									<div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm h-full flex flex-col">
										<div className="text-4xl font-bold text-[var(--renoz-green)]/20 mb-4">
											{item.step}
										</div>
										<h3 className="text-xl font-bold mb-2">{item.title}</h3>
										<p className="text-gray-500 leading-relaxed text-sm">
											{item.description}
										</p>
									</div>
								</div>
							))}
						</div>

						{/* Desktop: Vertical Timeline */}
						<div className="hidden md:block">
							<VerticalTimeline
								title="What happens next?"
								steps={[
									{
										title: "Initial Review",
										description:
											"Our admin team reviews your inquiry within 24 hours (Mon-Fri) and routes it to the correct department.",
									},
									{
										title: "Technical Sizing (Optional)",
										description:
											"For complex projects, our engineers may request additional info (switchboard photos, load profiles) to provide an accurate quote.",
									},
									{
										title: "Connection",
										description:
											"We'll either provide a direct quote or introduce you to a certified local partner who can handle the installation.",
									},
								]}
							/>
						</div>
					</motion.div>
				</div>

				{/* FAQ Section */}
				<section className="mt-12 md:mt-20 lg:mt-32 max-w-4xl mx-auto">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className="text-center mb-16"
					>
						<div className="inline-flex items-center justify-center p-3 bg-white rounded-full shadow-sm mb-4">
							<HelpCircle className="w-6 h-6 text-[var(--renoz-green)]" />
						</div>
						<h2 className="text-3xl font-bold text-[var(--black)]">
							Frequently Asked Questions
						</h2>
					</motion.div>

					<div className="space-y-4">
						{faqs.map((faq, i) => (
							<motion.div
								key={i}
								initial={{ opacity: 0, y: 10 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: i * 0.1 }}
								className="bg-white rounded-[24px] overflow-hidden shadow-sm hover:shadow-md transition-shadow"
							>
								<button
									onClick={() => setOpenFaq(openFaq === i ? null : i)}
									className="w-full flex justify-between items-center text-left font-bold text-[var(--black)] p-6 md:p-8"
								>
									<span className="text-lg">{faq.q}</span>
									{openFaq === i ? (
										<ChevronUp className="w-5 h-5 text-[var(--renoz-green)] shrink-0 ml-4" />
									) : (
										<ChevronDown className="w-5 h-5 text-gray-400 shrink-0 ml-4" />
									)}
								</button>
								<AnimatePresence>
									{openFaq === i && (
										<motion.div
											initial={{ height: 0, opacity: 0 }}
											animate={{ height: "auto", opacity: 1 }}
											exit={{ height: 0, opacity: 0 }}
											className="overflow-hidden"
										>
											<div className="px-6 pb-6 md:px-8 md:pb-8 text-zinc-600 font-normal leading-relaxed border-t border-gray-50 pt-4">
												{faq.a}
											</div>
										</motion.div>
									)}
								</AnimatePresence>
							</motion.div>
						))}
					</div>
				</section>

				{/* Warranty Registration CTA */}
				<section className="mt-12 md:mt-20 lg:mt-32">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
					>
						<Card className="bg-gradient-to-br from-[var(--black)] to-gray-800 text-white p-12 md:p-16 rounded-[32px] border-none shadow-2xl relative overflow-hidden">
							{/* Background Pattern */}
							<div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-5 mix-blend-overlay pointer-events-none" />

							<div className="relative z-10 max-w-3xl mx-auto text-center">
								<div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--renoz-green)]/20 border border-[var(--renoz-green)]/30 mb-6">
									<Shield className="w-8 h-8 text-[var(--renoz-green)]" />
								</div>

								<h2 className="text-3xl md:text-4xl font-bold mb-4">
									Already a RENOZ Customer?
								</h2>
								<p className="text-xl text-gray-300 mb-8 leading-relaxed">
									Activate your 10-year replacement warranty in minutes. Simple
									online registration for peace of mind.
								</p>

								<div className="flex flex-col sm:flex-row gap-4 justify-center">
									<Button
										variant="primary"
										size="lg"
										to="/warranty"
										className="rounded-full px-8 shadow-glow"
									>
										Register Your Warranty
										<ArrowRight className="ml-2 w-5 h-5" />
									</Button>
									<Link
										to="/resources"
										className="inline-flex items-center justify-center px-8 py-4 text-white border-2 border-white/20 hover:border-white/40 rounded-full font-bold transition-all hover:bg-white/5"
									>
										View Resources
									</Link>
								</div>

								<p className="text-sm text-gray-500 mt-6">
									Need help? Email{" "}
									<a
										href="mailto:support@renoz.energy"
										className="text-[var(--renoz-green)] hover:underline"
									>
										support@renoz.energy
									</a>
								</p>
							</div>
						</Card>
					</motion.div>
				</section>
			</div>
		</div>
	);
}
