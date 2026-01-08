import { useCallback, useState } from "react";
import {
	generateCsrfToken,
	rateLimiter,
	sanitizeText,
	validateFormInput,
} from "./security";

/**
 * Hook to add security features to TanStack Forms
 */
export function useSecureForm(options: {
	rateLimitKey?: string;
	csrfProtection?: boolean;
	onSubmit?: (data: Record<string, unknown>) => void | Promise<void>;
}) {
	const { rateLimitKey = "form-submit", csrfProtection = true } = options;
	const [csrfToken] = useState(() => generateCsrfToken());
	const [submitStatus, setSubmitStatus] = useState<
		"idle" | "submitting" | "success" | "error"
	>("idle");

	const secureSubmit = useCallback(
		async (values: Record<string, unknown>) => {
			// Rate limiting check
			if (rateLimiter.isRateLimited(rateLimitKey)) {
				throw new Error(
					"Too many submissions. Please wait before trying again.",
				);
			}

			setSubmitStatus("submitting");

			try {
				// Sanitize all text inputs
				const sanitizedValues = Object.keys(values).reduce(
					(acc, key) => {
						const value = values[key];
						if (typeof value === "string") {
							acc[key] = sanitizeText(value);
						} else {
							acc[key] = value;
						}
						return acc;
					},
					{} as Record<string, unknown>,
				);

				// Add CSRF token if enabled
				const submitData = csrfProtection
					? { ...sanitizedValues, _csrf: csrfToken }
					: sanitizedValues;

				// Call the original onSubmit
				if (options.onSubmit) {
					await options.onSubmit(submitData);
				}

				setSubmitStatus("success");
				// Note: Form reset should be handled by the caller
			} catch (error) {
				setSubmitStatus("error");
				throw error;
			} finally {
				setSubmitStatus("idle");
			}
		},
		[rateLimitKey, csrfProtection, csrfToken, options.onSubmit],
	);

	return {
		secureSubmit,
		submitStatus,
		csrfToken: csrfProtection ? csrfToken : undefined,
	};
}

/**
 * Security validation utilities for TanStack Form validators
 */
export const secureValidators = {
	email: (value: string) => {
		const { isValid } = validateFormInput(value, {
			required: true,
			pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
		});
		return isValid || "Please enter a valid email address";
	},

	required:
		(fieldName: string = "This field") =>
		(value: string) => {
			const { isValid } = validateFormInput(value, { required: true });
			return isValid || `${fieldName} is required`;
		},

	maxLength:
		(max: number, fieldName: string = "This field") =>
		(value: string) => {
			const { isValid } = validateFormInput(value, { maxLength: max });
			return isValid || `${fieldName} must be less than ${max} characters`;
		},

	sanitize: (value: string) => sanitizeText(value),
};

/**
 * Secure form field component that automatically sanitizes input
 */
export function useSecureField() {
	const [value, setValue] = useState("");

	const handleChange = useCallback((newValue: string) => {
		// Sanitize input on change
		const sanitized = sanitizeText(newValue);
		setValue(sanitized);
	}, []);

	return {
		value,
		onChange: handleChange,
		sanitizedValue: value,
	};
}
