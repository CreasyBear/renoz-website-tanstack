/**
 * Scale conversions for China-desk copy. Mid-market, late August 2026.
 * Not a hedge, and not a contemporaneous AUD price for 2015–2022 yuan prints.
 */
export const AUD_PER_CNY = 0.21;
export const CNY_PER_AUD = 4.8;
export const FX_AS_OF = "late August 2026";

export const FX_NOTE =
	"Yuan converted at A$0.21 per yuan (about CNY 4.8 to the Australian dollar), mid-market in late August 2026. Historical yuan prices use the same rate so the scale is readable; they are not the Australian-dollar price on the original date.";

export function audFromCny(cny: number): string {
	const aud = cny * AUD_PER_CNY;
	if (aud >= 1_000_000_000) {
		const billions = aud / 1_000_000_000;
		const digits = billions >= 10 ? 0 : 1;
		return `A$${billions.toFixed(digits)} billion`;
	}
	if (aud >= 100_000_000) {
		const tensOfMillions = Math.round(aud / 10_000_000) * 10;
		return `A$${tensOfMillions.toLocaleString("en-AU")} million`;
	}
	if (aud >= 10_000_000) {
		return `A$${Math.round(aud / 1_000_000).toLocaleString("en-AU")} million`;
	}
	if (aud >= 1_000_000) {
		return `A$${(aud / 1_000_000).toFixed(1)} million`;
	}
	return `A$${Math.round(aud).toLocaleString("en-AU")}`;
}

export function audPerTonne(cnyPerTonne: number): string {
	const aud = cnyPerTonne * AUD_PER_CNY;
	const rounded = aud >= 10_000 ? Math.round(aud / 100) * 100 : Math.round(aud);
	return `A$${rounded.toLocaleString("en-AU")}/t`;
}

export function cnyAudPair(
	cny: number,
	kind: "money" | "tonne" = "money",
): string {
	if (kind === "tonne") {
		return `${cny.toLocaleString("en-AU")} CNY/t (${audPerTonne(cny)})`;
	}
	const cnyLabel =
		cny >= 1_000_000_000
			? `CNY ${(cny / 1_000_000_000).toLocaleString("en-AU")} billion`
			: `CNY ${cny.toLocaleString("en-AU")}`;
	return `${cnyLabel} (${audFromCny(cny)})`;
}
