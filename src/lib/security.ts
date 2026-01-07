/**
 * Security utilities for XSS prevention and input sanitization
 */

/**
 * Sanitize HTML input to prevent XSS attacks
 * Removes dangerous tags and attributes
 */
export function sanitizeHtml(input: string): string {
	if (!input || typeof input !== 'string') return '';

	// Create a temporary DOM element to leverage browser's built-in sanitization
	const tempDiv = document.createElement('div');
	tempDiv.textContent = input;

	return tempDiv.innerHTML;
}

/**
 * Sanitize user input for display (non-HTML contexts)
 * Removes potentially dangerous characters
 */
export function sanitizeText(input: string): string {
	if (!input || typeof input !== 'string') return '';

	return input
		.replace(/[<>]/g, '') // Remove angle brackets
		.replace(/javascript:/gi, '') // Remove javascript: protocol
		.replace(/on\w+=/gi, '') // Remove event handlers
		.trim();
}

/**
 * Validate email format and prevent email injection
 */
export function validateAndSanitizeEmail(email: string): { isValid: boolean; sanitized: string } {
	if (!email || typeof email !== 'string') {
		return { isValid: false, sanitized: '' };
	}

	// Basic email regex (not perfect but covers most cases)
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	// Remove potentially dangerous characters
	const sanitized = email
		.replace(/[<>]/g, '')
		.replace(/\r?\n|\r/g, '') // Remove newlines (email header injection)
		.trim();

	const isValid = emailRegex.test(sanitized) && sanitized.length <= 254; // RFC 5321 limit

	return { isValid, sanitized };
}

/**
 * Sanitize URL input
 */
export function sanitizeUrl(url: string): string {
	if (!url || typeof url !== 'string') return '';

	try {
		const parsedUrl = new URL(url);

		// Only allow http and https protocols
		if (!['http:', 'https:'].includes(parsedUrl.protocol)) {
			return '';
		}

		// Remove potentially dangerous characters
		return url.replace(/[<>]/g, '').trim();
	} catch {
		// Invalid URL
		return '';
	}
}

/**
 * Generate a nonce for Content Security Policy
 */
export function generateNonce(): string {
	const array = new Uint8Array(16);
	crypto.getRandomValues(array);
	return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
}

/**
 * Rate limiting utility (client-side)
 */
class RateLimiter {
	private attempts: Map<string, number[]> = new Map();

	isRateLimited(key: string, maxAttempts: number = 5, windowMs: number = 60000): boolean {
		const now = Date.now();
		const attempts = this.attempts.get(key) || [];

		// Remove old attempts outside the window
		const recentAttempts = attempts.filter(time => now - time < windowMs);

		if (recentAttempts.length >= maxAttempts) {
			return true; // Rate limited
		}

		// Add current attempt
		recentAttempts.push(now);
		this.attempts.set(key, recentAttempts);

		return false; // Not rate limited
	}

	reset(key: string): void {
		this.attempts.delete(key);
	}
}

export const rateLimiter = new RateLimiter();

/**
 * CSRF token generation (for forms that need it)
 */
export function generateCsrfToken(): string {
	const array = new Uint8Array(32);
	crypto.getRandomValues(array);
	return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
}

/**
 * Secure random string generation
 */
export function generateSecureId(length: number = 32): string {
	const array = new Uint8Array(length);
	crypto.getRandomValues(array);
	return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
}

/**
 * Validate and sanitize form input
 */
export function validateFormInput(input: any, rules: {
	required?: boolean;
	maxLength?: number;
	pattern?: RegExp;
	sanitize?: boolean;
}): { isValid: boolean; value: any; errors: string[] } {
	const errors: string[] = [];
	let value = input;

	// Type checking
	if (input === null || input === undefined) {
		if (rules.required) {
			errors.push('This field is required');
		}
		return { isValid: errors.length === 0, value: input, errors };
	}

	// Convert to string for validation
	const stringValue = String(input);

	// Length validation
	if (rules.maxLength && stringValue.length > rules.maxLength) {
		errors.push(`Maximum length is ${rules.maxLength} characters`);
	}

	// Pattern validation
	if (rules.pattern && !rules.pattern.test(stringValue)) {
		errors.push('Invalid format');
	}

	// Sanitization
	if (rules.sanitize && typeof input === 'string') {
		value = sanitizeText(input);
	}

	return {
		isValid: errors.length === 0,
		value,
		errors
	};
}