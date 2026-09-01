import { useForm } from "@tanstack/react-form";
import { createFileRoute, Link } from "@tanstack/react-router";
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
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { z } from "zod";
import { Button } from "../components/ui/Button";
import Card from "../components/ui/Card";
import { GoogleMapEmbed } from "../components/ui/GoogleMapEmbed";
import Turnstile, { type TurnstileRef } from "../components/ui/Turnstile";
import VerticalTimeline from "../components/ui/VerticalTimeline";
import { contactFaqs } from "../data/faqs";
import { secureValidators, useSecureForm } from "../lib/form-security";
import { GOOGLE_BUSINESS } from "../lib/google-business";
import { captureAttribution } from "../lib/attribution";
import { INQUIRY_TYPES, normalizeInquiryType } from "../lib/inquiry";
import { canonicalLink, faqPageSchema, jsonLd, pageMeta } from "../lib/seo";
import { submitInquiry } from "../lib/submitInquiry";
import { cn } from "../lib/utils";

/** Safely format field value for display (handles objects from validation/state quirks) */
function formatFieldValue(value: unknown): string {
	if (value == null) return "";
	if (typeof value === "string") return value;
	return "";
}

/** Safely format validation errors for display */
function formatErrors(errors: unknown[] | string | undefined): string {
	if (errors == null) return "";
	if (typeof errors === "string") return errors;
	if (!Array.isArray(errors) || errors.length === 0) return "";
	return errors
		.map((e) =>
			typeof e === "string"
				? e
				: e && typeof e === "object" && "message" in e
					? String((e as { message: unknown }).message)
					: "",
		)
		.filter(Boolean)
		.join(", ");
}

export const Route = createFileRoute("/contact")({
	head: () => ({
		meta: [
			...pageMeta({
				title: "Contact RENOZ Energy - Perth Battery OEM",
				description:
					"Get in touch with our Perth team. Call 1800 736 693 or email sales@renoz.energy. Located at Unit 4, 8 Murphy Street, O'Connor WA 6163.",
				path: "/contact",
			}),
		],
		links: [canonicalLink("/contact")],
		scripts: [jsonLd(faqPageSchema(contactFaqs, "/contact"))],
	}),
	component: ContactPage,
	validateSearch: (search: Record<string, unknown>): { type?: string } => {
		return {
			type: typeof search.type === "string" ? search.type : undefined,
		};
	},
});

// Validation Schema with enhanced security
const inquirySchema = z.object({
	name: z
		.string()
		.trim()
		.min(1, "Please enter your full name so we can address you properly")
		.max(100, "Name too long"),
	email: z
		.string()
		.trim()
		.min(5, "Email too short")
		.max(254, "Email too long")
		.email("Invalid email format")
		.refine((email) => !/[\r\n]/.test(email), "Invalid email format"),
	company: z.string().max(100, "Company name too long"),
	inquiry_type: z.enum(INQUIRY_TYPES, {
		errorMap: () => ({ message: "Please select an inquiry type" }),
	}),
	message: z
		.string()
		.trim()
		.min(
			10,
			"Please provide more details about your energy needs (minimum 10 characters)",
		)
		.max(2000, "Message too long"),
	turnstileToken: z.string().min(1, "Please complete the spam check"),
	// Honeypot field - should be empty for legitimate users
	website: z.string().max(0, "Spam detected"),
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
	const [notificationStatus, setNotificationStatus] = useState<
		"unknown" | "sent" | "failed" | "skipped"
	>("unknown");

	// Secure form with TanStack Form integration
	const handleInquirySubmit = useCallback(
		async (data: Record<string, unknown>) => {
			const REQUEST_TIMEOUT_MS = 30_000;
			setNotificationStatus("unknown");

			const submitPromise = submitInquiry({
				data: {
					name: data.name as string,
					email: data.email as string,
					company: (data.company as string) || undefined,
					inquiry_type: data.inquiry_type as string,
					message: data.message as string,
					turnstileToken: data.turnstileToken as string,
					...captureAttribution(),
				},
			});

			const timeoutPromise = new Promise<never>((_, reject) =>
				setTimeout(
					() =>
						reject(
							new Error(
								"Request timed out. Please check your connection and try again.",
							),
						),
					REQUEST_TIMEOUT_MS,
				),
			);

			const result = await Promise.race([submitPromise, timeoutPromise]);

			if (!result.success) {
				throw new Error(result.error ?? "Failed to send message");
			}

			if (typeof window !== "undefined" && window.gtag) {
				window.gtag("event", "generate_lead", {
					inquiry_type: data.inquiry_type as string,
					...captureAttribution(),
				});
			}
			setNotificationStatus(result.notificationStatus ?? "unknown");
		},
		[],
	);
	const { secureSubmit, submitStatus, submitError } = useSecureForm({
		rateLimitKey: "contact-form",
		csrfProtection: true,
		onSubmit: handleInquirySubmit,
	});

	const turnstileRef = useRef<TurnstileRef>(null);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const inquiryType = normalizeInquiryType(search.type, "residential");

	const form = useForm({
		defaultValues: {
			name: "",
			email: "",
			company: "",
			inquiry_type: inquiryType,
			message: "",
			turnstileToken: "",
			// Honeypot field for spam detection
			website: "",
		},
		validators: {
			onSubmit: inquirySchema,
		},
		onSubmit: async ({ value }) => {
			if (isSubmitting) return; // Prevent double submissions

			setIsSubmitting(true);
			try {
				await secureSubmit(value);
			} catch (error) {
				// Enhanced error handling for network issues
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

	// Reset form and Turnstile after successful submission
	useEffect(() => {
		if (submitStatus === "success") {
			form.reset();
			turnstileRef.current?.reset();
		}
	}, [submitStatus, form]);

	const nameId = useId();
	const emailId = useId();
	const companyId = useId();
	const messageId = useId();

	// Reset Turnstile on successful submission
	useEffect(() => {
		if (submitStatus === "success") {
			turnstileRef.current?.reset();
		}
	}, [submitStatus]);

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
											if (inquiryType === "general")
												return "Ask the RENOZ Team";
											if (inquiryType === "partnership")
												return "Apply for Trade Account";
											if (inquiryType === "commercial")
												return "Discuss Commercial Project";
											return "Get Expert Advice";
										};
										const getDesc = () => {
											if (inquiryType === "general")
												return "Send us your question and we will route it to the right person.";
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
														onClick={() => field.handleChange("general")}
														className={cn(
															"flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-bold transition-all",
															inquiryType === "general"
																? "bg-white text-[var(--black)] shadow-sm"
																: "text-gray-500 hover:text-gray-700",
														)}
													>
														<HelpCircle className="w-4 h-4" />
														<span className="hidden sm:inline">General</span>
													</button>
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
														value={formatFieldValue(field.state.value)}
														onBlur={field.handleBlur}
														onChange={(e) =>
															field.handleChange(
																secureValidators.sanitize(e.target.value),
															)
														}
														className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--renoz-green)] focus:border-transparent outline-none transition-all placeholder:text-gray-400"
														placeholder="John Doe"
														required
														maxLength={100}
														autoComplete="name"
														aria-invalid={field.state.meta.errors.length > 0}
														aria-describedby={
															field.state.meta.errors.length > 0
																? `${nameId}-error`
																: undefined
														}
													/>
													{field.state.meta.errors ? (
														<p
															id={`${nameId}-error`}
															className="text-red-500 text-sm mt-1"
															role="alert"
															aria-live="polite"
														>
															{formatErrors(field.state.meta.errors)}
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
														value={formatFieldValue(field.state.value)}
														onBlur={field.handleBlur}
														onChange={(e) => field.handleChange(e.target.value)}
														className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--renoz-green)] focus:border-transparent outline-none transition-all placeholder:text-gray-400"
														placeholder="john@example.com"
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
																value={formatFieldValue(field.state.value)}
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
																maxLength={100}
																autoComplete={
																	inquiryType === "residential"
																		? "address-line1"
																		: "organization"
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
													value={formatFieldValue(field.state.value)}
													onBlur={field.handleBlur}
													onChange={(e) => field.handleChange(e.target.value)}
													className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--renoz-green)] focus:border-transparent outline-none transition-all resize-none placeholder:text-gray-400"
													placeholder="Tell us about your project requirements..."
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
												{notificationStatus === "failed" ||
												notificationStatus === "skipped"
													? "Thanks for reaching out. Your request was saved, but the automatic email alert did not complete. Please call 1800 736 693 if this is urgent."
													: "Thanks for reaching out! Our energy experts will respond within 24 hours with your custom solution."}
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
											<p>
												{submitError ||
													"We encountered an issue sending your message."}
											</p>
											<p className="mt-1">
												Please try again or call 1800 736 693.
											</p>
										</motion.div>
									)}

									{/* Honeypot field for spam detection */}
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

									{/* Cloudflare Turnstile */}
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
														submitStatus === "submitting" ||
														isSubmitting
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
							className="relative overflow-hidden rounded-[32px] bg-[var(--renoz-green)] text-white shadow-xl"
							initial={{ opacity: 0, x: 20 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: 0.5 }}
						>
							<GoogleMapEmbed />
							<div className="relative z-10 p-8">
								<MapPin className="mb-6 size-8 text-white" aria-hidden="true" />
								<p className="mb-1 text-sm font-bold uppercase tracking-wider text-white/70">
									Head Office & Factory
								</p>
								<p className="text-lg font-bold">{GOOGLE_BUSINESS.name}</p>
								<address className="mt-1 text-xl font-bold not-italic leading-tight">
									{GOOGLE_BUSINESS.address}
								</address>
								<div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/20 pt-6">
									<a
										href={GOOGLE_BUSINESS.directionsUrl}
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex min-h-11 items-center text-sm font-bold transition-colors hover:text-white/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
									>
										Get directions
										<ArrowRight className="ml-2 size-4" aria-hidden="true" />
									</a>
									<a
										href={GOOGLE_BUSINESS.reviewsUrl}
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex min-h-11 items-center text-sm font-bold transition-colors hover:text-white/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
									>
										View Google reviews
										<ArrowRight className="ml-2 size-4" aria-hidden="true" />
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
						{contactFaqs.map((faq, i) => (
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
									<span className="text-lg">{faq.question}</span>
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
												{faq.answer}
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

							<div className="relative z-10 max-w-3xl mx-auto text-center">
								<div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--renoz-green)]/20 border border-[var(--renoz-green)]/30 mb-6">
									<Shield className="w-8 h-8 text-[var(--renoz-green)]" />
								</div>

								<h2 className="text-3xl md:text-4xl font-bold mb-4">
									Already a RENOZ Customer?
								</h2>
								<p className="text-xl text-gray-300 mb-8 leading-relaxed">
									Register your system for its 10-year product warranty and keep
									the installation details required for future support.
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
