/**
 * Parsed address structure from Google Places API.
 */
export interface ParsedAddress {
	/** Street address (e.g., "123 Solar Way") */
	street: string;
	/** Suburb/locality (e.g., "Perth") */
	suburb: string;
	/** Postcode (e.g., "6000") */
	postcode: string;
	/** State abbreviation (e.g., "WA") */
	state: string;
	/** Country code (e.g., "AU") */
	country: string;
	/** Full formatted address from Google */
	fullAddress: string;
}

/**
 * Extracts a specific component from Google Places address_components array.
 *
 * @param components - Array of address components from Google Places
 * @param type - The component type to find (e.g., "street_number", "locality")
 * @param nameType - Whether to use long_name or short_name (default: long_name)
 * @returns The component value or empty string if not found
 */
function getComponent(
	components: google.maps.GeocoderAddressComponent[],
	type: string,
	nameType: "long_name" | "short_name" = "long_name",
): string {
	const component = components.find((c) => c.types.includes(type));
	return component?.[nameType] || "";
}

/**
 * Parses a Google Places PlaceResult into a structured ParsedAddress.
 *
 * Maps Google Places address components to Australian address format:
 * - street_number + route → street
 * - locality → suburb
 * - postal_code → postcode
 * - administrative_area_level_1 (short) → state (e.g., "WA")
 * - country (short) → country code (e.g., "AU")
 *
 * @param place - The PlaceResult from Google Places API
 * @returns Structured ParsedAddress object
 */
export function parseGooglePlace(
	place: google.maps.places.PlaceResult,
): ParsedAddress {
	const components = place.address_components || [];

	// Extract individual components
	const streetNumber = getComponent(components, "street_number");
	const route = getComponent(components, "route");
	const locality = getComponent(components, "locality");
	const postalCode = getComponent(components, "postal_code");
	const state = getComponent(
		components,
		"administrative_area_level_1",
		"short_name",
	);
	const country = getComponent(components, "country", "short_name");

	// Combine street number and route for full street address
	const street = [streetNumber, route].filter(Boolean).join(" ");

	return {
		street,
		suburb: locality,
		postcode: postalCode,
		state,
		country,
		fullAddress: place.formatted_address || "",
	};
}

/**
 * Validates that a parsed address has the minimum required fields for
 * the warranty form.
 *
 * @param address - The ParsedAddress to validate
 * @returns Object with validation result and any missing fields
 */
export function validateParsedAddress(address: ParsedAddress): {
	isValid: boolean;
	missingFields: string[];
} {
	const missingFields: string[] = [];

	if (!address.street) missingFields.push("street");
	if (!address.suburb) missingFields.push("suburb");
	if (!address.postcode) missingFields.push("postcode");

	return {
		isValid: missingFields.length === 0,
		missingFields,
	};
}
