import { useEffect, useRef, useState } from "react";
import { useGoogleMapsLoader } from "@/hooks/useGoogleMapsLoader";
import { type ParsedAddress, parseGooglePlace } from "@/lib/addressUtils";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export interface AddressAutocompleteProps
	extends Omit<React.ComponentProps<"input">, "onChange"> {
	/** Google Maps API key */
	apiKey: string;
	/** Callback when an address is selected from autocomplete */
	onAddressSelect?: (address: ParsedAddress) => void;
	/** Country restriction for autocomplete (default: "au" for Australia) */
	countryRestriction?: string;
	/** Current input value (controlled) */
	value?: string;
	/** Callback when input value changes */
	onChange?: (value: string) => void;
}

/**
 * Address autocomplete input component using Google Places API.
 *
 * Integrates with React Hook Form by accepting value/onChange props.
 * When a user selects an address from the dropdown, it parses the
 * address components and calls onAddressSelect with structured data.
 *
 * @example
 * ```tsx
 * <AddressAutocomplete
 *   apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
 *   value={field.value}
 *   onChange={field.onChange}
 *   onAddressSelect={(address) => {
 *     setValue("street", address.street);
 *     setValue("suburb", address.suburb);
 *     setValue("postcode", address.postcode);
 *   }}
 * />
 * ```
 */
export function AddressAutocomplete({
	apiKey,
	onAddressSelect,
	countryRestriction = "au",
	value,
	onChange,
	className,
	placeholder = "Start typing your address...",
	disabled,
	...props
}: AddressAutocompleteProps) {
	const inputRef = useRef<HTMLInputElement>(null);
	const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);
	const { isLoaded, isLoading, error } = useGoogleMapsLoader(apiKey);
	const [internalValue, setInternalValue] = useState(value || "");

	// Sync internal value with external value prop
	useEffect(() => {
		if (value !== undefined) {
			setInternalValue(value);
		}
	}, [value]);

	// Initialize Google Places Autocomplete when API is loaded
	useEffect(() => {
		if (!isLoaded || !inputRef.current || autocompleteRef.current) return;

		// Create autocomplete instance
		const autocomplete = new google.maps.places.Autocomplete(
			inputRef.current,
			{
				componentRestrictions: { country: countryRestriction },
				fields: ["address_components", "formatted_address"],
				types: ["address"],
			},
		);

		// Listen for place selection
		autocomplete.addListener("place_changed", () => {
			const place = autocomplete.getPlace();

			if (!place.address_components) {
				console.warn("No address components found in selected place");
				return;
			}

			// Parse the address
			const parsedAddress = parseGooglePlace(place);

			// Update input value with street address
			const newValue = parsedAddress.street || place.formatted_address || "";
			setInternalValue(newValue);
			onChange?.(newValue);

			// Notify parent with full parsed address
			onAddressSelect?.(parsedAddress);
		});

		autocompleteRef.current = autocomplete;

		// Cleanup
		return () => {
			if (autocompleteRef.current) {
				google.maps.event.clearInstanceListeners(autocompleteRef.current);
				autocompleteRef.current = null;
			}
		};
	}, [isLoaded, countryRestriction, onChange, onAddressSelect]);

	// Handle input changes
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = e.target.value;
		setInternalValue(newValue);
		onChange?.(newValue);
	};

	// If no API key, show a warning in development
	if (!apiKey && process.env.NODE_ENV === "development") {
		console.warn(
			"AddressAutocomplete: No API key provided. Autocomplete will not work.",
		);
	}

	return (
		<div className="relative">
			<Input
				ref={inputRef}
				value={internalValue}
				onChange={handleChange}
				placeholder={placeholder}
				disabled={disabled || isLoading}
				autoComplete="off"
				className={cn(
					// Add subtle indicator when autocomplete is loading
					isLoading && "animate-pulse",
					// Show error state if API failed to load
					error && "border-yellow-400",
					className,
				)}
				{...props}
			/>
			{/* Show loading indicator */}
			{isLoading && (
				<div className="absolute right-3 top-1/2 -translate-y-1/2">
					<div className="h-4 w-4 animate-spin rounded-full border-2 border-gray-300 border-t-gray-600" />
				</div>
			)}
			{/* Show error message if API failed (non-blocking) */}
			{error && !isLoading && (
				<p className="mt-1 text-xs text-yellow-600">
					Address suggestions unavailable. You can still type manually.
				</p>
			)}
		</div>
	);
}
