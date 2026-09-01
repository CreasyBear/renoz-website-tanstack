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

/**
 * Signed percentage delta shared by every rendering boundary (tables,
 * key figures, bar charts): always a leading +/- (no sign on zero), no
 * space before the percent, two decimals from content with trailing
 * zeros trimmed (5.00 -> "+5%").
 */
export function formatDelta(value: number): string {
	const sign = value > 0 ? "+" : value < 0 ? "-" : "";
	const fixed = Math.abs(value).toFixed(2);
	const trimmed = fixed.includes(".")
		? fixed.replace(/0+$/, "").replace(/\.$/, "")
		: fixed;
	return `${sign}${trimmed}%`;
}

const PERCENT_CELL_PATTERN = /^[+-]?\d+(?:\.\d+)?%$/;

/**
 * Normalises a table cell that is a bare percentage (e.g. "5.56%" or
 * "-3.37%") to the shared signed delta convention. Any other cell is
 * returned untouched.
 */
export function normalizePercentCell(cell: string): string {
	const match = cell.trim().match(PERCENT_CELL_PATTERN);
	if (!match) return cell;
	const value = Number(cell.slice(0, -1));
	if (!Number.isFinite(value)) return cell;
	return formatDelta(value);
}

/**
 * Axis label for a line chart's first (time) column: "Year" when every
 * x-label is a four-digit year (optionally estimate-suffixed, e.g.
 * "2026E"), otherwise "Period".
 */
export function xAxisLabel(labels: readonly string[]): string {
	const yearPattern = /^\d{4}E?$/;
	const allYears =
		labels.length > 0 && labels.every((label) => yearPattern.test(label));
	return allYears ? "Year" : "Period";
}
