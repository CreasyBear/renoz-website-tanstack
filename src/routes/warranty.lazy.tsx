import { zodResolver } from "@hookform/resolvers/zod";
import { createLazyFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import {
	ArrowRight,
	Check,
	CheckCircle,
	Copy,
	FileCheck,
	RefreshCw,
	Shield,
	XCircle,
} from "lucide-react";
import { useEffect, useId, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { AddressAutocomplete } from "@/components/ui/AddressAutocomplete";
import { Button } from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { Checkbox } from "@/components/ui/checkbox";
import { DatePicker } from "@/components/ui/date-picker";
import FileUpload from "@/components/ui/FileUpload";
// Shadcn UI Components
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import Turnstile from "@/components/ui/Turnstile";
import { Textarea } from "@/components/ui/textarea";
import { submitWarranty } from "@/lib/submitWarranty";
import { generateWarrantyId } from "@/lib/warrantyId";

// TanStack Router lazy route export
export const Route = createLazyFileRoute("/warranty")({
	component: WarrantyPage,
});

// Helper for optional string that can be empty
const optionalString = z.string().optional().or(z.literal(""));

// Constants for file upload limits
const MAX_FILE_SIZE = 25 * 1024 * 1024; // 25MB per file

// Comprehensive warranty registration schema
const warrantySchema = z
	.object({
		// On behalf of homeowner
		onBehalfOfHomeowner: z.boolean().default(false),

		// Contact Information (Installer)
		installerName: z
			.string()
			.min(2, "Installer name is required")
			.max(100, "Name is too long"),
		installerEmail: z
			.string()
			.min(5, "Email too short")
			.max(254, "Email too long")
			.email("Valid installer email required")
			.refine(
				(email) => !email.includes("<") && !email.includes(">"),
				"Invalid characters",
			),
		installerPhone: z
			.string()
			.min(8, "Valid installer phone required")
			.max(20, "Phone number is too long")
			.regex(/^[0-9\s()+-]+$/, "Invalid characters in phone number"),

		// Company Information
		companyName: optionalString,
		electricalLicence: optionalString,

		// Installation Address
		installStreet: z
			.string()
			.min(3, "Street address is required")
			.max(200, "Street address is too long")
			.regex(/^[a-zA-Z0-9\s.,'#-]+$/, "Invalid characters in street address"),
		installSuburb: z
			.string()
			.min(2, "Suburb is required")
			.max(100, "Suburb is too long")
			.regex(/^[a-zA-Z\s.'-]+$/, "Invalid characters in suburb"),
		installPostcode: z.string().regex(/^\d{4}$/, "Valid WA postcode required"),

		// Homeowner Contact (if registering on behalf)
		homeownerName: optionalString,
		homeownerEmail: optionalString, // Custom validation in superRefine
		homeownerPhone: optionalString,
		homeownerAddress: optionalString,

		// System Information
		batteryModel: z.string().min(2, "Battery model is required"),
		phases: z.enum(["Single", "Three"]),
		gridStatus: z.enum(["on-grid", "off-grid"]).default("on-grid"),
		pvSystem: z.boolean().default(false),
		backupGenset: z.boolean().default(false),
		inverterBrand: optionalString,
		inverterModel: optionalString,
		inverterSerial: optionalString,

		// Serial Numbers (multiple batteries)
		serialNumbers: z
			.array(z.string().min(3, "Valid serial number required"))
			.min(1, "At least one serial number required"),

		// Dates
		installDate: z.string().min(1, "Installation date is required"),
		commissioningDate: z.string().min(1, "Commissioning date is required"),

		// Purchase Info
		retailer: optionalString,
		purchaseDate: optionalString,

		// Installation Notes
		installationNotes: optionalString,

		// Declarations
		installationDeclaration: z.boolean().refine((val) => val === true, {
			message:
				"You must confirm proper installation according to manufacturer requirements",
		}),
		marketingPermission: z.boolean().default(false),
	})
	.superRefine((data, ctx) => {
		// Homeowner contact validation when registering on behalf
		if (data.onBehalfOfHomeowner) {
			if (!data.homeownerName || data.homeownerName.trim().length === 0) {
				ctx.addIssue({
					path: ["homeownerName"],
					code: z.ZodIssueCode.custom,
					message: "Homeowner name is required when registering for homeowner",
				});
			}

			if (!data.homeownerEmail || data.homeownerEmail.trim().length === 0) {
				ctx.addIssue({
					path: ["homeownerEmail"],
					code: z.ZodIssueCode.custom,
					message: "Homeowner email is required when registering for homeowner",
				});
			} else {
				const emailResult = z.string().email().safeParse(data.homeownerEmail);
				if (!emailResult.success) {
					ctx.addIssue({
						path: ["homeownerEmail"],
						code: z.ZodIssueCode.custom,
						message: "Valid homeowner email is required",
					});
				}
			}

			if (!data.homeownerPhone || data.homeownerPhone.trim().length === 0) {
				ctx.addIssue({
					path: ["homeownerPhone"],
					code: z.ZodIssueCode.custom,
					message: "Homeowner phone is required when registering for homeowner",
				});
			}
		}
	});

const INVERTER_DATA = {
	Deye: [
		"SUN-5K-SG04LP1-AU",
		"SUN-6K-SG04LP1-AU",
		"SUN-8K-SG05LP1-AU",
		"SUN-10K-SG02LP1-AU-AM3",
		"SUN-16K-SG01LP1-AU",
		"SUN-5K-SG04LP3-AU",
		"SUN-10K-SG04LP3-AU",
		"SUN-12K-SG04LP3-AU",
	],
	Selectronic: [
		"SP PRO SPMC481-AU (48V 5kW)",
		"SP PRO SPMC482-AU (48V 7.5kW)",
		"SP PRO SPRO482-AU (48V 15kW/20kW)",
	],
	Victron: [
		"MultiPlus-II 48/3000/35-32",
		"MultiPlus-II 48/5000/70-50",
		"MultiPlus-II 48/8000/110-100",
		"MultiPlus-II 48/10000/140-100",
		"Quattro 48/5000/70-100/100",
		"Quattro 48/10000/140-100/100",
		"Quattro 48/15000/200-100/100",
	],
	SMA: [
		"Sunny Island 4.4M (SI4.4M-13)",
		"Sunny Island 6.0H (SI6.0H-13)",
		"Sunny Island 8.0H (SI8.0H-13)",
	],
	GoodWe: [
		"GW3648D-ES",
		"GW5048D-ES",
		"GW3600-BP",
		"GW5000-BP",
		"GW3600-SBP-20",
		"GW5000-SBP-20",
	],
	Sungrow: ["SH5.0RS (Single Phase LV)", "SH10RS (Single Phase LV)"],
	Growatt: ["SPH 3000TL BL-UP", "SPH 5000TL BL-UP", "SPH 6000TL BL-UP"],
	Noark: [
		"Sion Ex9N-DH-5KS-AU (5kW Single Phase)",
		"Sion Ex9N-DH-6KS-AU (6kW Single Phase)",
		"Sion Ex9N-DH-8KS-AU (8kW Single Phase)",
		"Sion Ex9N-DH-10KT-AU (10kW Three Phase)",
	],
} as const;

type InverterBrand = keyof typeof INVERTER_DATA;

type WarrantyFormData = z.infer<typeof warrantySchema>;

interface UploadedFile {
	name: string;
	type: string;
	size: number;
	url?: string;
	path?: string;
	preview?: string;
	uploading?: boolean;
	error?: string;
}

export function WarrantyPage() {
	const [warrantyId] = useState<string>(() => generateWarrantyId());
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState<
		"idle" | "success" | "error"
	>("idle");
	const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
	const [turnstileError, setTurnstileError] = useState(false);
	const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
	const [submissionId, setSubmissionId] = useState<string | null>(null);
	const [retryCount, setRetryCount] = useState(0);
	const [lastError, setLastError] = useState<string | null>(null);
	const [isOnline, setIsOnline] = useState(navigator.onLine);

	// Local state for manual inverter entries when 'Other' is selected
	const [manualInverterBrand, setManualInverterBrand] = useState("");
	const [manualInverterModel, setManualInverterModel] = useState("");

	// Generate unique IDs for checkboxes
	const pvCheckboxId = useId();
	const gensetCheckboxId = useId();
	const marketingCheckboxId = useId();

	const form = useForm<WarrantyFormData>({
		mode: "onBlur",
		// biome-ignore lint/suspicious/noExplicitAny: version mismatch types
		resolver: zodResolver(warrantySchema) as any,
		defaultValues: {
			onBehalfOfHomeowner: false,
			installerName: "",
			installerEmail: "",
			installerPhone: "",
			companyName: "",
			electricalLicence: "",
			installStreet: "",
			installSuburb: "",
			installPostcode: "",
			homeownerName: "",
			homeownerEmail: "",
			homeownerPhone: "",
			homeownerAddress: "",
			batteryModel: "LV-5KWH100AH", // Default to the only available model
			phases: "Single",
			gridStatus: "on-grid",
			pvSystem: false,
			backupGenset: false,
			inverterBrand: "",
			inverterModel: "",
			inverterSerial: "",
			serialNumbers: [""],
			installDate: "",
			commissioningDate: "",
			retailer: "",
			purchaseDate: "",
			installationNotes: "",
			installationDeclaration: true,
			marketingPermission: false,
		},
	});

	const { watch, setValue, control, handleSubmit, reset, getValues } = form;
	const onBehalfOfHomeowner = watch("onBehalfOfHomeowner");
	const serialNumbers = watch("serialNumbers");

	// Calculate form completion percentage
	const completionPercentage = useMemo(() => {
		const fields = [
			"onBehalfOfHomeowner",
			"installerName",
			"installerEmail",
			"installerPhone",
			"installStreet",
			"installSuburb",
			"installPostcode",
			"batteryModel",
			"phases",
			"gridStatus",
			"serialNumbers",
			"installDate",
			"commissioningDate",
			"installationDeclaration",
		];

		if (watch("onBehalfOfHomeowner")) {
			fields.push("homeownerName", "homeownerEmail");
		}

		const completedFields = fields.filter((fieldName) => {
			// biome-ignore lint/suspicious/noExplicitAny: dynamic field access required
			const value = watch(fieldName as any);
			if (Array.isArray(value)) return value.length > 0;
			if (typeof value === "boolean") return value === true;
			return value && String(value).trim().length > 0;
		});

		return Math.round((completedFields.length / fields.length) * 100);
	}, [watch]);

	// PERSISTENCE: Load form data from localStorage on mount
	useEffect(() => {
		try {
			const savedWarrantyData = localStorage.getItem("renoz_warranty_draft");
			if (savedWarrantyData) {
				const parsed = JSON.parse(savedWarrantyData);
				// Only fill if the form is empty (don't overwrite user input)
				const currentName = getValues("installerName");
				if (!currentName && parsed.installerName) {
					Object.keys(parsed).forEach((key) => {
						if (parsed[key] !== undefined && parsed[key] !== null) {
							// biome-ignore lint/suspicious/noExplicitAny: dynamic field access required
							setValue(key as any, parsed[key]);
						}
					});
				}
			}
		} catch (e) {
			console.error("Failed to load warranty draft", e);
		}
	}, [setValue, getValues]);

	// ONLINE/OFFLINE DETECTION
	useEffect(() => {
		const handleOnline = () => setIsOnline(true);
		const handleOffline = () => setIsOnline(false);

		window.addEventListener("online", handleOnline);
		window.addEventListener("offline", handleOffline);

		return () => {
			window.removeEventListener("online", handleOnline);
			window.removeEventListener("offline", handleOffline);
		};
	}, []);

	// PERSISTENCE: Save form data on changes
	useEffect(() => {
		const subscription = form.watch((data) => {
			try {
				// Don't save if form is being reset or submitted
				if (isSubmitting || submitStatus === "success") return;

				const dataToSave = {
					...data,
					// Don't save sensitive data like turnstile tokens
					turnstileToken: undefined,
				};
				localStorage.setItem(
					"renoz_warranty_draft",
					JSON.stringify(dataToSave),
				);
			} catch (e) {
				console.error("Failed to save warranty draft", e);
			}
		});

		return () => subscription.unsubscribe();
	}, [form, isSubmitting, submitStatus]);

	// PERSISTENCE: Load installer details from localStorage on mount
	useEffect(() => {
		try {
			const savedInstaller = localStorage.getItem("renoz_installer_details");
			if (savedInstaller) {
				const parsed = JSON.parse(savedInstaller);
				// Only fill if the form is empty (don't overwrite user input if they navigated back)
				const currentName = getValues("installerName");
				if (!currentName) {
					if (parsed.installerName)
						setValue("installerName", parsed.installerName);
					if (parsed.installerEmail)
						setValue("installerEmail", parsed.installerEmail);
					if (parsed.installerPhone)
						setValue("installerPhone", parsed.installerPhone);
					if (parsed.companyName) setValue("companyName", parsed.companyName);
					if (parsed.electricalLicence)
						setValue("electricalLicence", parsed.electricalLicence);
				}
			}
		} catch (_e) {
			// Failed to load installer details
		}
	}, [setValue, getValues]);

	// PERSISTENCE: Save installer details on successful submit
	const saveInstallerDetails = (data: WarrantyFormData) => {
		try {
			const details = {
				installerName: data.installerName,
				installerEmail: data.installerEmail,
				installerPhone: data.installerPhone,
				companyName: data.companyName,
				electricalLicence: data.electricalLicence,
			};
			localStorage.setItem("renoz_installer_details", JSON.stringify(details));
		} catch (_e) {
			// Failed to save installer details
		}
	};

	const onSubmit = async (data: WarrantyFormData) => {
		if (!turnstileToken) {
			setTurnstileError(true);
			return;
		}

		// Prevent double submissions
		if (isSubmitting || submissionId) return;

		// Generate unique submission ID for deduplication
		const id = `warranty-${warrantyId}-${Date.now()}`;
		setSubmissionId(id);

		setIsSubmitting(true);
		setSubmitStatus("idle");
		setTurnstileError(false);

		try {
			// Prepare evidence files
			const evidenceFiles = uploadedFiles
				.filter((file) => file.url && !file.uploading && !file.error)
				.map((file) => ({
					url: file.url || "",
					name: file.name,
					type: file.type,
				}));

			// Handle 'Other' inverter brand/model
			const finalInverterBrand =
				data.inverterBrand === "Other"
					? manualInverterBrand
					: data.inverterBrand;
			const finalInverterModel =
				data.inverterModel === "Other"
					? manualInverterModel
					: data.inverterModel;

			// biome-ignore lint/suspicious/noExplicitAny: server fn type inference failure
			const result = await (submitWarranty as any)({
				data: {
					warrantyId,
					submissionId: id,
					turnstileToken,
					installerName: data.installerName,
					installerEmail: data.installerEmail,
					installerPhone: data.installerPhone,
					companyName: data.companyName || undefined,
					electricalLicence: data.electricalLicence || undefined,
					installStreet: data.installStreet,
					installSuburb: data.installSuburb,
					installPostcode: data.installPostcode,
					onBehalfOfHomeowner: data.onBehalfOfHomeowner,
					homeownerName: data.homeownerName || undefined,
					homeownerEmail: data.homeownerEmail || undefined,
					homeownerPhone: data.homeownerPhone || undefined,
					homeownerAddress: data.homeownerAddress || undefined,
					batteryModel: data.batteryModel,
					serialNumbers: data.serialNumbers.filter((s) => s.trim()),
					phases: data.phases,
					gridStatus: data.gridStatus,
					pvSystem: data.pvSystem,
					backupGenset: data.backupGenset,
					inverterBrand: finalInverterBrand || undefined,
					inverterModel: finalInverterModel || undefined,
					inverterSerial: data.inverterSerial || undefined,
					installDate: data.installDate,
					commissioningDate: data.commissioningDate,
					retailer: data.retailer || undefined,
					purchaseDate: data.purchaseDate || undefined,
					installationNotes: data.installationNotes || undefined,
					evidenceFiles,
					installationDeclaration: data.installationDeclaration,
					marketingPermission: data.marketingPermission,
				},
			});

			if (!result.success) {
				throw new Error(
					result.error || "Failed to submit warranty registration",
				);
			}

			// Save installer details for next time
			saveInstallerDetails(data);

			setSubmitStatus("success");

			// Clear draft and reset form
			localStorage.removeItem("renoz_warranty_draft");
			reset();
			setManualInverterBrand("");
			setManualInverterModel("");
			setUploadedFiles([]);
			setTurnstileToken(null);
			setSubmissionId(null);

			// Scroll to top to show success message
			window.scrollTo({ top: 0, behavior: "smooth" });
		} catch (error) {
			// Enhanced error handling with retry logic
			console.error("Warranty submission error:", error);

			const errorMessage =
				error instanceof Error ? error.message : "Unknown error occurred";
			setLastError(errorMessage);

			if (error instanceof Error) {
				if (
					error.message.includes("fetch") ||
					error.message.includes("network") ||
					error.message.includes("Failed to fetch")
				) {
					// Network error - retry up to 2 times with exponential backoff
					if (retryCount < 2) {
						setRetryCount((prev) => prev + 1);
						const delay = 2 ** retryCount * 1000; // 1s, 2s, 4s
						setTimeout(() => {
							setIsSubmitting(false);
							setSubmissionId(null);
							// Auto-retry by calling onSubmit again
							onSubmit(data);
						}, delay);
						return; // Don't set error status yet
					} else {
						setSubmitStatus("error");
						setLastError(
							"Network connection failed after 3 attempts. Please check your internet and try again.",
						);
					}
				} else if (error.message.includes("rate limit")) {
					setSubmitStatus("error");
					setLastError(
						"Too many submissions. Please wait 15 minutes before trying again.",
					);
				} else if (error.message.includes("duplicate")) {
					setSubmitStatus("error");
					setLastError(
						"This warranty appears to have been submitted already. Please contact support if you believe this is an error.",
					);
				} else if (error.message.includes("validation")) {
					setSubmitStatus("error");
					setLastError(
						"Some information needs correction. Please review the form and try again.",
					);
				} else {
					setSubmitStatus("error");
					setLastError(
						"An unexpected error occurred. Please try again or contact support.",
					);
				}
			} else {
				setSubmitStatus("error");
				setLastError(
					"An unexpected error occurred. Please try again or contact support.",
				);
			}
		} finally {
			// Always reset submission state - error state is already set correctly in catch block
			setIsSubmitting(false);
			setSubmissionId(null);
		}
	};

	const batteryCount = serialNumbers.filter((s) => s.trim()).length;
	const nominalCapacity = batteryCount * 5.12;
	const usableCapacity = nominalCapacity * 0.9;

	// Success State Animation
	if (submitStatus === "success") {
		return (
			<div className="min-h-screen bg-[#F5F5F7] flex items-center justify-center p-4">
				<div className="w-full max-w-2xl">
					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.5, type: "spring" }}
						className="bg-white rounded-3xl shadow-xl p-8 md:p-12 text-center border border-gray-100"
					>
						<motion.div
							initial={{ scale: 0 }}
							animate={{ scale: 1 }}
							transition={{
								delay: 0.2,
								type: "spring",
								stiffness: 200,
								damping: 15,
							}}
							className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6"
						>
							<Check className="w-12 h-12 text-[var(--renoz-green)]" />
						</motion.div>

						<motion.h2
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.3 }}
							className="text-3xl font-bold text-gray-900 mb-4"
						>
							Warranty Activated!
						</motion.h2>

						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.4 }}
							className="bg-gray-50 rounded-xl p-4 mb-8 inline-block"
						>
							<p className="text-sm text-gray-500 uppercase font-semibold tracking-wider mb-1">
								Warranty Reference
							</p>
							<p className="text-2xl font-mono font-bold text-[var(--renoz-green)] tracking-widest">
								{warrantyId}
							</p>
						</motion.div>

						<motion.p
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.5 }}
							className="text-gray-600 mb-8 max-w-md mx-auto leading-relaxed"
						>
							Thank you for registering your installation. We've sent
							confirmation emails to you and the homeowner with the official
							warranty certificate.
						</motion.p>

						<motion.div
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.6 }}
							className="flex justify-center gap-4"
						>
							<Button
								onClick={() => window.location.reload()}
								variant="outline"
								className="border-2"
							>
								Register Another System
							</Button>
							<Button
								asChild
								className="bg-[var(--renoz-green)] hover:bg-[var(--renoz-green)]/90"
							>
								<a href="/">Return Home</a>
							</Button>
						</motion.div>
					</motion.div>
				</div>
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-[#F5F5F7]">
			{/* Compact Hero Section */}
			<section className="relative h-[40vh] min-h-[300px] flex items-center overflow-hidden bg-[var(--black)] text-white">
				<motion.div
					className="absolute inset-0 z-0"
					initial={{ scale: 1.1 }}
					animate={{ scale: 1 }}
					transition={{ duration: 10, ease: "easeOut" }}
				>
					<div
						className="absolute inset-0 bg-cover bg-center opacity-40"
						style={{
							backgroundImage: "url('/images/case-studies/Harvey-35kWh.webp')",
						}}
					/>
					<div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
				</motion.div>

				<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full pt-10">
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
						className="max-w-2xl"
					>
						<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--renoz-green)] text-white text-xs font-bold tracking-widest uppercase mb-4">
							<Shield className="w-3 h-3" />
							Official Registration
						</div>
						<h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight leading-none">
							Activate Your Warranty
						</h1>
						<p className="text-lg text-gray-300 max-w-lg leading-relaxed">
							Secure your investment. Register your RENOZ system to activate
							your 10-year performance guarantee.
						</p>
					</motion.div>
				</div>
			</section>

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 -mt-16 relative z-20">
				<Form {...form}>
					{/* Offline Warning */}
					{!isOnline && (
						<motion.div
							initial={{ opacity: 0, height: 0 }}
							animate={{ opacity: 1, height: "auto" }}
							exit={{ opacity: 0, height: 0 }}
							className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-xl"
						>
							<div className="flex items-center gap-3">
								<div className="w-5 h-5 text-yellow-600">⚠️</div>
								<div>
									<p className="font-bold text-yellow-800">You're Offline</p>
									<p className="text-yellow-700 text-sm">
										Your progress is being saved locally. Please reconnect to
										submit the warranty.
									</p>
								</div>
							</div>
						</motion.div>
					)}

					<form
						onSubmit={handleSubmit(onSubmit)}
						className="grid grid-cols-1 lg:grid-cols-12 gap-8"
					>
						{/* Left Sidebar - Sticky */}
						<div className="lg:col-span-4 space-y-6">
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.2 }}
								className="sticky top-24 space-y-6"
							>
								{/* Status Card */}
								<Card className="border-none shadow-xl bg-white p-6 rounded-2xl overflow-hidden relative">
									<div className="absolute top-0 left-0 w-full h-1 bg-[var(--renoz-green)]" />
									<div className="flex items-center justify-between mb-4">
										<span className="text-xs font-bold uppercase text-gray-400 tracking-wider">
											Reference ID
										</span>
										<div className="w-2 h-2 bg-[var(--renoz-green)] rounded-full animate-pulse" />
									</div>
									<div className="font-mono text-2xl font-bold text-[var(--black)] tracking-wider mb-1">
										{warrantyId}
									</div>
									<p className="text-xs text-gray-500">
										Auto-generated session ID
									</p>
								</Card>

								{/* Benefits Card */}
								<div className="bg-[var(--black)] text-white p-6 rounded-2xl shadow-xl">
									<h3 className="font-bold text-lg mb-4 flex items-center gap-2">
										<Shield className="w-5 h-5 text-[var(--renoz-green)]" />
										Why Register?
									</h3>
									<ul className="space-y-4">
										<li className="flex gap-3 text-sm text-gray-300">
											<CheckCircle className="w-5 h-5 text-[var(--renoz-green)] shrink-0" />
											<span>
												<strong>Official Certification</strong>
												<br />
												Receive a digital warranty certificate for your property
												records.
											</span>
										</li>
										<li className="flex gap-3 text-sm text-gray-300">
											<CheckCircle className="w-5 h-5 text-[var(--renoz-green)] shrink-0" />
											<span>
												<strong>Priority Support</strong>
												<br />
												Direct access to our Perth engineering team for any
												technical queries.
											</span>
										</li>
										<li className="flex gap-3 text-sm text-gray-300">
											<CheckCircle className="w-5 h-5 text-[var(--renoz-green)] shrink-0" />
											<span>
												<strong>Performance Guarantee</strong>
												<br />
												Activate your 10-year capacity retention warranty.
											</span>
										</li>
									</ul>
								</div>

								{/* Progress Indicators (Desktop) */}
								<div className="hidden lg:block bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
									<div className="mb-4">
										<div className="flex justify-between items-center mb-2">
											<h4 className="text-xs font-bold uppercase text-gray-400 tracking-wider">
												Form Progress
											</h4>
											<span className="text-sm font-medium text-[var(--renoz-green)]">
												{completionPercentage}% Complete
											</span>
										</div>
										<div className="w-full bg-gray-200 rounded-full h-2">
											<div
												className="bg-[var(--renoz-green)] h-2 rounded-full transition-all duration-300 ease-out"
												style={{ width: `${completionPercentage}%` }}
											></div>
										</div>
									</div>
									<h4 className="text-xs font-bold uppercase text-gray-400 tracking-wider mb-4">
										Form Sections
									</h4>
									<div className="space-y-3">
										{[
											{ id: 1, label: "Contact Details", active: true },
											{ id: 2, label: "System Information", active: false },
											{ id: 3, label: "Installation Photos", active: false },
											{ id: 4, label: "Declaration", active: false },
										].map((step) => (
											<div
												key={step.id}
												className="flex items-center gap-3 text-sm"
											>
												<div
													className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${step.active ? "bg-[var(--renoz-green)] text-white" : "bg-gray-100 text-gray-400"}`}
												>
													{step.id}
												</div>
												<span
													className={
														step.active
															? "font-bold text-[var(--black)]"
															: "text-gray-500"
													}
												>
													{step.label}
												</span>
											</div>
										))}
									</div>
								</div>
							</motion.div>
						</div>
						{/* Right Content - Form Steps */}
						<div className="lg:col-span-8 space-y-6">
							{/* SECTION 1: Role & Contact */}
							<Card className="p-6 md:p-8 rounded-2xl shadow-sm border-none bg-white">
								<div className="flex items-center gap-4 mb-6">
									<div className="w-10 h-10 rounded-full bg-[var(--renoz-green)]/10 flex items-center justify-center text-[var(--renoz-green)]">
										<Shield className="w-5 h-5" />
									</div>
									<div>
										<h2 className="text-xl font-bold text-[var(--black)]">
											Installer Information
										</h2>
										<p className="text-sm text-gray-500">
											Who is registering this warranty?
										</p>
									</div>
								</div>

								<div className="space-y-6">
									{/* On Behalf of Homeowner */}
									<FormField
										control={control}
										name="onBehalfOfHomeowner"
										render={({ field }) => (
											<FormItem className="flex flex-row items-center justify-between rounded-xl border p-4 shadow-sm bg-gray-50/50">
												<div className="space-y-0.5">
													<FormLabel className="text-base">
														Registering for a client?
													</FormLabel>
													<FormDescription>
														Enable this if you are an installer registering on
														behalf of the homeowner.
													</FormDescription>
												</div>
												<FormControl>
													<Checkbox
														checked={field.value}
														onCheckedChange={field.onChange}
														className="h-6 w-6"
													/>
												</FormControl>
											</FormItem>
										)}
									/>

									<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
										<FormField
											control={control}
											name="installerName"
											render={({ field }) => (
												<FormItem className="w-full">
													<FormLabel>Installer Name *</FormLabel>
													<FormControl>
														<Input
															placeholder="John Smith"
															{...field}
															className="w-full bg-gray-50"
														/>
													</FormControl>
													<FormMessage />
												</FormItem>
											)}
										/>
										<FormField
											control={control}
											name="installerEmail"
											render={({ field }) => (
												<FormItem className="w-full">
													<FormLabel>Email Address *</FormLabel>
													<FormControl>
														<Input
															type="email"
															placeholder="john@example.com"
															{...field}
															className="w-full bg-gray-50"
														/>
													</FormControl>
													<FormMessage />
												</FormItem>
											)}
										/>
									</div>

									<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
										<FormField
											control={control}
											name="installerPhone"
											render={({ field }) => (
												<FormItem className="w-full">
													<FormLabel>Phone Number *</FormLabel>
													<FormControl>
														<Input
															type="tel"
															placeholder="0400 000 000"
															{...field}
															className="w-full bg-gray-50"
														/>
													</FormControl>
													<FormMessage />
												</FormItem>
											)}
										/>
										<FormField
											control={control}
											name="companyName"
											render={({ field }) => (
												<FormItem className="w-full">
													<FormLabel>Company Name</FormLabel>
													<FormControl>
														<Input
															placeholder="Acme Solar"
															{...field}
															className="w-full bg-gray-50"
														/>
													</FormControl>
													<FormMessage />
												</FormItem>
											)}
										/>
									</div>

									<FormField
										control={control}
										name="electricalLicence"
										render={({ field }) => (
											<FormItem className="w-full">
												<FormLabel>Electrical Licence Number</FormLabel>
												<FormControl>
													<Input
														placeholder="EC000000"
														{...field}
														className="w-full bg-gray-50"
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
								</div>
							</Card>

							{/* SECTION 2: Site Details */}
							<Card className="p-6 md:p-8 rounded-2xl shadow-sm border-none bg-white">
								<div className="flex items-center gap-4 mb-6">
									<div className="w-10 h-10 rounded-full bg-[var(--renoz-green)]/10 flex items-center justify-center text-[var(--renoz-green)]">
										<FileCheck className="w-5 h-5" />
									</div>
									<div>
										<h2 className="text-xl font-bold text-[var(--black)]">
											Site Information
										</h2>
										<p className="text-sm text-gray-500">
											Where is the system installed?
										</p>
									</div>
								</div>

								<div className="space-y-6">
									<FormField
										control={control}
										name="installStreet"
										render={({ field }) => (
											<FormItem className="w-full">
												<FormLabel>Street Address *</FormLabel>
												<FormControl>
													<AddressAutocomplete
														apiKey={
															import.meta.env.VITE_GOOGLE_MAPS_API_KEY || ""
														}
														value={field.value}
														onChange={field.onChange}
														onAddressSelect={(address) => {
															// Auto-fill suburb and postcode when address is selected
															// (street is already set via onChange)
															if (address.suburb)
																setValue("installSuburb", address.suburb);
															if (address.postcode)
																setValue("installPostcode", address.postcode);
														}}
														placeholder="Start typing your address..."
														className="w-full bg-gray-50"
													/>
												</FormControl>
												<FormDescription className="text-xs">
													Select from suggestions to auto-fill suburb and
													postcode
												</FormDescription>
												<FormMessage />
											</FormItem>
										)}
									/>
									<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
										<FormField
											control={control}
											name="installSuburb"
											render={({ field }) => (
												<FormItem className="w-full">
													<FormLabel>Suburb *</FormLabel>
													<FormControl>
														<Input
															placeholder="Perth"
															{...field}
															className="w-full bg-gray-50"
															autoComplete="address-level2"
														/>
													</FormControl>
													<FormMessage />
												</FormItem>
											)}
										/>
										<FormField
											control={control}
											name="installPostcode"
											render={({ field }) => (
												<FormItem className="w-full">
													<FormLabel>Postcode *</FormLabel>
													<FormControl>
														<Input
															placeholder="6000"
															{...field}
															className="w-full bg-gray-50"
															autoComplete="postal-code"
														/>
													</FormControl>
													<FormMessage />
												</FormItem>
											)}
										/>
									</div>

									{/* Homeowner Contact (Conditional) */}
									<AnimatePresence>
										{onBehalfOfHomeowner && (
											<motion.div
												initial={{ opacity: 0, height: 0 }}
												animate={{ opacity: 1, height: "auto" }}
												exit={{ opacity: 0, height: 0 }}
												className="space-y-6 pt-6 border-t border-gray-100"
											>
												<div className="flex items-center gap-2 mb-2">
													<h3 className="text-sm font-bold uppercase tracking-wider text-gray-500">
														Homeowner Details
													</h3>
												</div>
												<FormField
													control={control}
													name="homeownerName"
													render={({ field }) => (
														<FormItem className="w-full">
															<FormLabel>Homeowner Name *</FormLabel>
															<FormControl>
																<Input
																	placeholder="Jane Doe"
																	{...field}
																	className="w-full bg-gray-50"
																/>
															</FormControl>
															<FormMessage />
														</FormItem>
													)}
												/>
												<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
													<FormField
														control={control}
														name="homeownerEmail"
														render={({ field }) => (
															<FormItem className="w-full">
																<FormLabel>Homeowner Email *</FormLabel>
																<FormControl>
																	<Input
																		type="email"
																		placeholder="jane@example.com"
																		{...field}
																		className="w-full bg-gray-50"
																	/>
																</FormControl>
																<FormMessage />
															</FormItem>
														)}
													/>
													<FormField
														control={control}
														name="homeownerPhone"
														render={({ field }) => (
															<FormItem className="w-full">
																<FormLabel>Homeowner Phone *</FormLabel>
																<FormControl>
																	<Input
																		type="tel"
																		placeholder="0400 000 000"
																		{...field}
																		className="w-full bg-gray-50"
																	/>
																</FormControl>
																<FormMessage />
															</FormItem>
														)}
													/>
												</div>
												<FormField
													control={control}
													name="homeownerAddress"
													render={({ field }) => (
														<FormItem className="w-full">
															<FormLabel>
																Homeowner Address (if different)
															</FormLabel>
															<FormControl>
																<Input
																	placeholder="Leave blank if same as installation address"
																	{...field}
																	className="w-full bg-gray-50"
																/>
															</FormControl>
															<FormMessage />
														</FormItem>
													)}
												/>
											</motion.div>
										)}
									</AnimatePresence>
								</div>
							</Card>

							{/* SECTION 3: System Configuration */}
							<Card className="p-6 md:p-8 rounded-2xl shadow-sm border-none bg-white">
								<div className="flex items-center gap-4 mb-6">
									<div className="w-10 h-10 rounded-full bg-[var(--renoz-green)]/10 flex items-center justify-center text-[var(--renoz-green)]">
										<div className="text-lg">⚡</div>
									</div>
									<div>
										<h2 className="text-xl font-bold text-[var(--black)]">
											System Configuration
										</h2>
										<p className="text-sm text-gray-500">
											{nominalCapacity.toFixed(2)} kWh Nominal /{" "}
											{usableCapacity.toFixed(2)} kWh Usable
										</p>
									</div>
								</div>

								<div className="space-y-8">
									{/* Battery Serials */}
									<div className="space-y-4">
										<div className="flex items-center justify-between">
											<h3 className="text-sm font-bold uppercase tracking-wider text-gray-500">
												Battery Units
											</h3>
											<span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full font-medium">
												{serialNumbers.filter((s) => s.trim()).length} Units
												Total
											</span>
										</div>
										{serialNumbers.map((_, index) => (
											<FormField
												key={index}
												control={control}
												name={`serialNumbers.${index}` as const}
												render={({ field }) => (
													<FormItem className="w-full">
														<FormLabel className="text-xs uppercase text-gray-500">
															Battery {index + 1} Serial
														</FormLabel>
														<div className="flex gap-2 w-full">
															<FormControl className="flex-1">
																<Input
																	placeholder="e.g., LV51-2515000001"
																	{...field}
																	value={field.value || ""}
																	className="w-full font-mono bg-gray-50"
																/>
															</FormControl>
															{serialNumbers.length > 1 && (
																<Button
																	type="button"
																	variant="outline"
																	className="shrink-0 text-red-600 hover:text-red-700 hover:bg-red-50 border-red-200"
																	onClick={() => {
																		const newSerials = serialNumbers.filter(
																			(_, i) => i !== index,
																		);
																		setValue("serialNumbers", newSerials);
																	}}
																>
																	Remove
																</Button>
															)}
														</div>
														<FormMessage />
													</FormItem>
												)}
											/>
										))}
										<Button
											type="button"
											variant="outline"
											onClick={() => {
												setValue("serialNumbers", [...serialNumbers, ""]);
											}}
											className="w-full border-dashed border-2 hover:border-[var(--renoz-green)] hover:text-[var(--renoz-green)] h-12"
										>
											+ Add Another Battery Unit
										</Button>
									</div>

									<div className="h-px bg-gray-100" />

									{/* System Specs */}
									<div className="space-y-4">
										<h3 className="text-sm font-bold uppercase tracking-wider text-gray-500">
											System Specs
										</h3>
										<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
											<FormField
												control={control}
												name="batteryModel"
												render={({ field }) => (
													<FormItem className="w-full">
														<FormLabel>Battery Model *</FormLabel>
														<Select
															onValueChange={field.onChange}
															defaultValue={field.value || "LV-5KWH100AH"}
														>
															<FormControl>
																<SelectTrigger className="w-full bg-gray-50">
																	<SelectValue placeholder="Select model" />
																</SelectTrigger>
															</FormControl>
															<SelectContent>
																<SelectItem value="LV-5KWH100AH">
																	LV-5KWH100AH (5.12 kWh)
																</SelectItem>
															</SelectContent>
														</Select>
														<FormMessage />
													</FormItem>
												)}
											/>
											<FormField
												control={control}
												name="phases"
												render={({ field }) => (
													<FormItem className="w-full">
														<FormLabel>Power Type *</FormLabel>
														<Select
															onValueChange={field.onChange}
															defaultValue={field.value}
														>
															<FormControl>
																<SelectTrigger className="w-full bg-gray-50">
																	<SelectValue placeholder="Select phases" />
																</SelectTrigger>
															</FormControl>
															<SelectContent>
																<SelectItem value="Single">
																	Single Phase
																</SelectItem>
																<SelectItem value="Three">
																	Three Phase
																</SelectItem>
															</SelectContent>
														</Select>
														<FormMessage />
													</FormItem>
												)}
											/>
											<FormField
												control={control}
												name="gridStatus"
												render={({ field }) => (
													<FormItem className="w-full">
														<FormLabel>Grid Connection *</FormLabel>
														<Select
															onValueChange={field.onChange}
															defaultValue={field.value}
														>
															<FormControl>
																<SelectTrigger className="w-full bg-gray-50">
																	<SelectValue placeholder="Select grid status" />
																</SelectTrigger>
															</FormControl>
															<SelectContent>
																<SelectItem value="on-grid">
																	On-grid (Standard)
																</SelectItem>
																<SelectItem value="off-grid">
																	Off-grid (Standalone)
																</SelectItem>
															</SelectContent>
														</Select>
														<FormMessage />
													</FormItem>
												)}
											/>
										</div>

										<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
											<FormField
												control={control}
												name="inverterBrand"
												render={({ field }) => (
													<FormItem className="w-full">
														<FormLabel>Inverter Brand</FormLabel>
														<Select
															onValueChange={(val) => {
																field.onChange(val);
																// Reset model if brand changes, unless we're going from 'Other' to something else
																if (val !== "Other") {
																	setValue("inverterModel", "");
																} else {
																	setValue("inverterModel", "Other");
																}
															}}
															value={field.value || ""}
														>
															<FormControl>
																<SelectTrigger className="w-full bg-gray-50">
																	<SelectValue placeholder="Select Brand" />
																</SelectTrigger>
															</FormControl>
															<SelectContent>
																{Object.keys(INVERTER_DATA).map((brand) => (
																	<SelectItem key={brand} value={brand}>
																		{brand}
																	</SelectItem>
																))}
																<SelectItem value="Other">
																	Other / Not Listed
																</SelectItem>
															</SelectContent>
														</Select>
														{field.value === "Other" && (
															<Input
																placeholder="Enter Brand Name"
																value={manualInverterBrand}
																onChange={(e) =>
																	setManualInverterBrand(e.target.value)
																}
																className="mt-2 w-full bg-gray-50"
															/>
														)}
														<FormMessage />
													</FormItem>
												)}
											/>
											<FormField
												control={control}
												name="inverterModel"
												render={({ field }) => {
													const selectedBrand = watch("inverterBrand") as
														| InverterBrand
														| "Other"
														| "";
													const models =
														selectedBrand && selectedBrand !== "Other"
															? INVERTER_DATA[selectedBrand]
															: [];

													return (
														<FormItem className="w-full">
															<FormLabel>Inverter Model</FormLabel>
															<Select
																onValueChange={field.onChange}
																value={field.value || ""}
																disabled={!selectedBrand}
															>
																<FormControl>
																	<SelectTrigger className="w-full bg-gray-50">
																		<SelectValue
																			placeholder={
																				!selectedBrand
																					? "Select Brand first"
																					: "Select Model"
																			}
																		/>
																	</SelectTrigger>
																</FormControl>
																<SelectContent>
																	{models.map((model) => (
																		<SelectItem key={model} value={model}>
																			{model}
																		</SelectItem>
																	))}
																	<SelectItem value="Other">
																		Other / Not Listed
																	</SelectItem>
																</SelectContent>
															</Select>
															{field.value === "Other" && (
																<Input
																	placeholder="Enter Model Number"
																	value={manualInverterModel}
																	onChange={(e) =>
																		setManualInverterModel(e.target.value)
																	}
																	className="mt-2 w-full bg-gray-50"
																/>
															)}
															<FormMessage />
														</FormItem>
													);
												}}
											/>
											<FormField
												control={control}
												name="inverterSerial"
												render={({ field }) => (
													<FormItem className="w-full">
														<FormLabel>Inverter Serial</FormLabel>
														<FormControl>
															<Input
																placeholder="Serial #"
																{...field}
																className="w-full bg-gray-50"
															/>
														</FormControl>
														<FormMessage />
													</FormItem>
												)}
											/>
										</div>

										<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
											<FormField
												control={control}
												name="pvSystem"
												render={({ field }) => (
													<FormItem className="w-full flex flex-row items-center gap-3 rounded-xl border p-3 bg-gray-50/50 hover:bg-gray-50 transition-colors cursor-pointer">
														<FormControl>
															<Checkbox
																id={pvCheckboxId}
																checked={field.value}
																onCheckedChange={field.onChange}
															/>
														</FormControl>
														<FormLabel
															htmlFor={pvCheckboxId}
															className="text-sm font-medium cursor-pointer flex-1 mb-0"
														>
															PV Solar Connected
														</FormLabel>
													</FormItem>
												)}
											/>
											<FormField
												control={control}
												name="backupGenset"
												render={({ field }) => (
													<FormItem className="w-full flex flex-row items-center gap-3 rounded-xl border p-3 bg-gray-50/50 hover:bg-gray-50 transition-colors cursor-pointer">
														<FormControl>
															<Checkbox
																id={gensetCheckboxId}
																checked={field.value}
																onCheckedChange={field.onChange}
															/>
														</FormControl>
														<FormLabel
															htmlFor={gensetCheckboxId}
															className="text-sm font-medium cursor-pointer flex-1 mb-0"
														>
															Backup Generator
														</FormLabel>
													</FormItem>
												)}
											/>
										</div>
									</div>

									<div className="h-px bg-gray-100" />

									{/* Dates & Purchase */}
									<div className="space-y-6">
										<h3 className="text-sm font-bold uppercase tracking-wider text-gray-500">
											Timeline
										</h3>
										<div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
											<FormField
												control={control}
												name="installDate"
												render={({ field }) => (
													<FormItem className="w-full">
														<FormLabel>Installation Date *</FormLabel>
														<FormControl>
															<DatePicker
																value={field.value}
																onChange={field.onChange}
																placeholder="Select date"
																maxDate={new Date()}
															/>
														</FormControl>
														<FormMessage />
													</FormItem>
												)}
											/>
											<FormField
												control={control}
												name="commissioningDate"
												render={({ field }) => (
													<FormItem className="w-full">
														<FormLabel>Commissioning Date *</FormLabel>
														<FormControl>
															<DatePicker
																value={field.value}
																onChange={field.onChange}
																placeholder="Select date"
																maxDate={new Date()}
															/>
														</FormControl>
														<FormMessage />
													</FormItem>
												)}
											/>
											<FormField
												control={control}
												name="retailer"
												render={({ field }) => (
													<FormItem className="w-full">
														<div className="flex items-center justify-between mb-1">
															<FormLabel className="mb-0">
																Purchased From (Optional)
															</FormLabel>
															<button
																type="button"
																onClick={() => {
																	const company = getValues("companyName");
																	const installer = getValues("installerName");
																	if (company) setValue("retailer", company);
																	else if (installer)
																		setValue("retailer", installer);
																}}
																className="text-[10px] font-bold uppercase tracking-tight text-[var(--renoz-green)] hover:text-[var(--renoz-green)]/80 flex items-center gap-1 bg-[var(--renoz-green)]/5 px-2 py-0.5 rounded-md transition-colors"
															>
																<Copy className="w-2.5 h-2.5" /> Same as
																Installer
															</button>
														</div>
														<FormControl>
															<Input
																placeholder="Retailer Name"
																{...field}
																className="w-full bg-gray-50"
															/>
														</FormControl>
														<FormMessage />
													</FormItem>
												)}
											/>
											<FormField
												control={control}
												name="purchaseDate"
												render={({ field }) => (
													<FormItem className="w-full">
														<FormLabel>Purchase Date (Optional)</FormLabel>
														<FormControl>
															<DatePicker
																value={field.value}
																onChange={field.onChange}
																placeholder="Select date"
																maxDate={new Date()}
															/>
														</FormControl>
														<FormMessage />
													</FormItem>
												)}
											/>
										</div>
									</div>
								</div>
							</Card>

							{/* SECTION 4: Additional Details */}
							<Card className="p-6 md:p-8 rounded-2xl shadow-sm border-none bg-white">
								<div className="flex items-center gap-4 mb-6">
									<div className="w-10 h-10 rounded-full bg-[var(--renoz-green)]/10 flex items-center justify-center text-[var(--renoz-green)]">
										<div className="text-lg">📸</div>
									</div>
									<div>
										<h2 className="text-xl font-bold text-[var(--black)]">
											Evidence & Notes
										</h2>
										<p className="text-sm text-gray-500">
											Installation context and photos
										</p>
									</div>
								</div>

								{/* Helpful Guidance */}
								<div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
									<div className="flex items-start gap-3">
										<CheckCircle className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
										<div>
											<p className="text-green-800 font-medium mb-1">
												📋 What to include:
											</p>
											<ul className="text-green-700 text-sm space-y-1">
												<li>
													• <strong>Photos:</strong> Serial numbers,
													installation location, wiring connections
												</li>
												<li>
													• <strong>Notes:</strong> Any special installation
													details or system configurations
												</li>
												<li>
													• <strong>Files:</strong> Commissioning reports,
													manuals, or certificates
												</li>
											</ul>
											<p className="text-green-700 text-sm mt-2">
												<strong>💡 Tip:</strong> Better evidence = faster
												warranty processing!
											</p>
										</div>
									</div>
								</div>

								<div className="space-y-8">
									<FormField
										control={control}
										name="installationNotes"
										render={({ field }) => (
											<FormItem className="w-full">
												<FormLabel>Installation Notes (Optional)</FormLabel>
												<FormControl>
													<Textarea
														placeholder="Add any specific installation details, system configuration details, or important notes about this installation..."
														className="w-full resize-none min-h-[100px] bg-gray-50"
														{...field}
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>

									<div className="space-y-4">
										<h3 className="text-sm font-bold uppercase tracking-wider text-gray-500">
											Photo Evidence
										</h3>
										<div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
											<p className="text-sm font-medium text-blue-900 mb-2">
												Recommended Photos:
											</p>
											<ul className="text-sm text-blue-800 list-disc pl-5 space-y-1">
												<li>Wide shot of installation environment</li>
												<li>Close-up of battery serial number labels</li>
												<li>Inverter connection points</li>
												<li>Commissioning screen showing successful setup</li>
											</ul>
										</div>
										<FileUpload
											warrantyId={warrantyId}
											files={uploadedFiles}
											onFilesChange={setUploadedFiles}
											maxFileSize={MAX_FILE_SIZE}
											allowedTypes={[
												"image/jpeg",
												"image/png",
												"image/webp",
												"image/heic",
												"application/pdf",
											]}
										/>
									</div>
								</div>
							</Card>

							{/* SECTION 5: Declaration */}
							<Card className="p-6 md:p-8 rounded-2xl shadow-sm border-none bg-white">
								<div className="flex items-center gap-4 mb-6">
									<div className="w-10 h-10 rounded-full bg-[var(--renoz-green)]/10 flex items-center justify-center text-[var(--renoz-green)]">
										<div className="text-lg">✍️</div>
									</div>
									<div>
										<h2 className="text-xl font-bold text-[var(--black)]">
											Final Declaration
										</h2>
										<p className="text-sm text-gray-500">Review and submit</p>
									</div>
								</div>

								<div className="space-y-6">
									<FormField
										control={control}
										name="installationDeclaration"
										render={({ field }) => (
											<FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-xl border p-4 bg-gray-50">
												<FormControl>
													<Checkbox
														checked={field.value}
														onCheckedChange={field.onChange}
													/>
												</FormControl>
												<div className="space-y-1 leading-none">
													<FormLabel className="text-base font-medium">
														I confirm the batteries have been installed
														according to RENOZ Energy's installation
														requirements and user manual *
													</FormLabel>
													<FormMessage />
												</div>
											</FormItem>
										)}
									/>
									<FormField
										control={control}
										name="marketingPermission"
										render={({ field }) => (
											<FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-xl border p-4 bg-gray-50">
												<FormControl>
													<Checkbox
														id={marketingCheckboxId}
														checked={field.value}
														onCheckedChange={field.onChange}
													/>
												</FormControl>
												<div className="space-y-1 leading-none">
													<FormLabel
														htmlFor={marketingCheckboxId}
														className="text-sm font-medium leading-relaxed cursor-pointer"
													>
														I agree to receive marketing communications from
														RENOZ Energy about my battery system
													</FormLabel>
												</div>
											</FormItem>
										)}
									/>

									{/* Turnstile */}
									<div className="pt-4">
										{import.meta.env.VITE_TURNSTILE_SITE_KEY ? (
											<Turnstile
												siteKey={import.meta.env.VITE_TURNSTILE_SITE_KEY}
												onVerify={setTurnstileToken}
												onExpire={() => setTurnstileToken(null)}
												onError={() => {
													setTurnstileToken(null);
													setTurnstileError(true);
												}}
											/>
										) : (
											<div className="p-4 bg-yellow-50 border border-yellow-200 rounded-xl">
												<p className="text-yellow-800 text-sm">
													<strong>Warning:</strong> Turnstile site key is not
													configured.
												</p>
											</div>
										)}
										{turnstileError && (
											<p className="text-red-500 text-sm mt-2 font-medium">
												Please complete the spam verification.
											</p>
										)}
									</div>

									{submitStatus === "error" && (
										<motion.div
											initial={{ opacity: 0, height: 0 }}
											animate={{ opacity: 1, height: "auto" }}
											className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-800"
										>
											<div className="flex items-start gap-3">
												<XCircle className="w-6 h-6 shrink-0 mt-0.5" />
												<div className="flex-1">
													<p className="font-bold">
														{retryCount > 0
															? "Submission Failed After Retries"
															: "Submission Error"}
													</p>
													<p className="text-sm mt-1">
														{lastError ||
															"There was an error submitting your warranty registration."}
													</p>
													{retryCount === 0 &&
														!lastError?.includes("rate limit") &&
														!lastError?.includes("duplicate") && (
															<div className="mt-3 flex gap-2">
																<Button
																	type="button"
																	variant="outline"
																	size="sm"
																	onClick={() => {
																		setSubmitStatus("idle");
																		setLastError(null);
																		setRetryCount(0);
																	}}
																	className="text-red-700 border-red-300 hover:bg-red-100"
																>
																	<RefreshCw className="w-4 h-4 mr-2" />
																	Try Again
																</Button>
																<Button
																	type="button"
																	variant="link"
																	size="sm"
																	onClick={() =>
																		window.open(
																			"mailto:support@renoz.energy?subject=Warranty Submission Error&body=" +
																				encodeURIComponent(
																					`Error: ${lastError}\nWarranty ID: ${warrantyId}\n\nPlease help me submit my warranty registration.`,
																				),
																			"_blank",
																		)
																	}
																	className="text-red-700 hover:text-red-800 p-0 h-auto"
																>
																	Contact Support
																</Button>
															</div>
														)}
												</div>
											</div>
										</motion.div>
									)}
								</div>
							</Card>

							{/* Action Buttons */}
							<div className="pt-4 space-y-3">
								<Button
									type="submit"
									variant="default"
									size="lg"
									className="w-full rounded-xl py-4 text-lg shadow-lg shadow-[var(--renoz-green)]/20"
									disabled={
										isSubmitting ||
										!!submissionId ||
										(!turnstileToken &&
											!!import.meta.env.VITE_TURNSTILE_SITE_KEY)
									}
								>
									{isSubmitting
										? "Submitting Warranty..."
										: "Register Warranty"}
									{!isSubmitting && <ArrowRight className="ml-2 w-5 h-5" />}
								</Button>

								{/* Save Draft Button */}
								{completionPercentage > 0 &&
									completionPercentage < 100 &&
									!isSubmitting && (
										<Button
											type="button"
											variant="outline"
											size="sm"
											className="w-full rounded-xl py-2 text-sm"
											onClick={() => {
												// Force save draft
												const dataToSave = {
													...getValues(),
													turnstileToken: undefined,
												};
												localStorage.setItem(
													"renoz_warranty_draft",
													JSON.stringify(dataToSave),
												);
												// Show brief success message
												setSubmitStatus("idle");
												setTimeout(() => {
													alert(
														"Draft saved! You can return to complete this form later.",
													);
												}, 100);
											}}
										>
											💾 Save Draft & Continue Later
										</Button>
									)}
							</div>
						</div>{" "}
						{/* End Right Column */}
					</form>
				</Form>
			</div>
		</div>
	);
}
