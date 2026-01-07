import { type FormEvent, useState } from "react";
import {
	generateCsrfToken,
	rateLimiter,
	sanitizeText,
	validateFormInput,
} from "@/lib/security";
import { Button } from "./Button";

interface FormField {
	name: string;
	label: string;
	type: "text" | "email" | "tel" | "textarea";
	required?: boolean;
	maxLength?: number;
	pattern?: RegExp;
	placeholder?: string;
}

interface SecureFormProps {
	fields: FormField[];
	onSubmit: (data: Record<string, string>) => Promise<void> | void;
	submitLabel?: string;
	className?: string;
	rateLimitKey?: string;
	csrfProtection?: boolean;
}

interface FormErrors {
	[key: string]: string[];
}

export function SecureForm({
	fields,
	onSubmit,
	submitLabel = "Submit",
	className = "",
	rateLimitKey = "form-submit",
	csrfProtection = true,
}: SecureFormProps) {
	const [formData, setFormData] = useState<Record<string, string>>({});
	const [errors, setErrors] = useState<FormErrors>({});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [csrfToken] = useState(() => generateCsrfToken());

	const handleInputChange = (name: string, value: string) => {
		// Sanitize input on change
		const sanitizedValue = sanitizeText(value);

		setFormData((prev) => ({
			...prev,
			[name]: sanitizedValue,
		}));

		// Clear field-specific errors on change
		if (errors[name]) {
			setErrors((prev) => {
				const newErrors = { ...prev };
				delete newErrors[name];
				return newErrors;
			});
		}
	};

	const validateForm = (): boolean => {
		const newErrors: FormErrors = {};
		let isValid = true;

		fields.forEach((field) => {
			const value = formData[field.name] || "";
			const validation = validateFormInput(value, {
				required: field.required,
				maxLength: field.maxLength,
				pattern: field.pattern,
				sanitize: true,
			});

			if (!validation.isValid) {
				newErrors[field.name] = validation.errors;
				isValid = false;
			}
		});

		setErrors(newErrors);
		return isValid;
	};

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();

		// Rate limiting check
		if (rateLimiter.isRateLimited(rateLimitKey)) {
			setErrors({
				general: ["Too many submissions. Please wait before trying again."],
			});
			return;
		}

		// Validate form
		if (!validateForm()) {
			return;
		}

		setIsSubmitting(true);
		setErrors({});

		try {
			// Include CSRF token if protection is enabled
			const submitData = csrfProtection
				? { ...formData, _csrf: csrfToken }
				: formData;

			await onSubmit(submitData);

			// Clear form on success
			setFormData({});
		} catch (error) {
			console.error("Form submission error:", error);
			setErrors({
				general: [
					"An error occurred while submitting the form. Please try again.",
				],
			});
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<form
			onSubmit={handleSubmit}
			className={className}
			noValidate // We handle validation ourselves
			aria-labelledby="form-title"
		>
			{csrfProtection && (
				<input
					type="hidden"
					name="_csrf"
					value={csrfToken}
					aria-hidden="true"
				/>
			)}

			{/* General error display */}
			{errors.general && (
				<div
					className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md"
					role="alert"
					aria-live="polite"
				>
					<div className="flex">
						<div className="flex-shrink-0">
							<svg
								className="h-5 w-5 text-red-400"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									fillRule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
									clipRule="evenodd"
								/>
							</svg>
						</div>
						<div className="ml-3">
							<ul className="text-sm text-red-700">
								{errors.general.map((error, index) => (
									<li key={index}>{error}</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			)}

			<div className="space-y-6">
				{fields.map((field) => (
					<div key={field.name}>
						<label
							htmlFor={field.name}
							className="block text-sm font-medium text-gray-700 mb-2"
						>
							{field.label}
							{field.required && <span className="text-red-500 ml-1">*</span>}
						</label>

						{field.type === "textarea" ? (
							<textarea
								id={field.name}
								name={field.name}
								value={formData[field.name] || ""}
								onChange={(e) => handleInputChange(field.name, e.target.value)}
								required={field.required}
								maxLength={field.maxLength}
								placeholder={field.placeholder}
								className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
									errors[field.name] ? "border-red-300" : "border-gray-300"
								}`}
								aria-invalid={!!errors[field.name]}
								aria-describedby={
									errors[field.name] ? `${field.name}-error` : undefined
								}
							/>
						) : (
							<input
								type={field.type}
								id={field.name}
								name={field.name}
								value={formData[field.name] || ""}
								onChange={(e) => handleInputChange(field.name, e.target.value)}
								required={field.required}
								maxLength={field.maxLength}
								pattern={field.pattern?.source}
								placeholder={field.placeholder}
								className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
									errors[field.name] ? "border-red-300" : "border-gray-300"
								}`}
								aria-invalid={!!errors[field.name]}
								aria-describedby={
									errors[field.name] ? `${field.name}-error` : undefined
								}
							/>
						)}

						{/* Field-specific error display */}
						{errors[field.name] && (
							<div
								id={`${field.name}-error`}
								className="mt-1 text-sm text-red-600"
								role="alert"
								aria-live="polite"
							>
								<ul>
									{errors[field.name].map((error, index) => (
										<li key={index}>{error}</li>
									))}
								</ul>
							</div>
						)}
					</div>
				))}
			</div>

			<div className="mt-8">
				<Button
					type="submit"
					disabled={isSubmitting}
					className="w-full sm:w-auto"
					aria-describedby="submit-status"
				>
					{isSubmitting ? "Submitting..." : submitLabel}
				</Button>

				{isSubmitting && (
					<div className="mt-2 text-sm text-gray-600" aria-live="polite">
						Please wait while we process your submission...
					</div>
				)}
			</div>
		</form>
	);
}
