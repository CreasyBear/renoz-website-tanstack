import { describe, expect, it } from "vitest";
import {
	audFromCny,
	audPerTonne,
	formatDelta,
	normalizePercentCell,
	xAxisLabel,
} from "./insight-fx";

describe("insight AUD scale conversions", () => {
	it("converts yuan totals at A$0.21 per yuan", () => {
		expect(audFromCny(21.4e9)).toBe("A$4.5 billion");
		expect(audFromCny(3.65e9)).toBe("A$770 million");
		expect(audPerTonne(57_000)).toBe("A$12,000/t");
		expect(audPerTonne(147_000)).toBe("A$30,900/t");
	});
});

describe("insight shared delta formatting", () => {
	it("signs deltas and trims trailing zeros at two decimals", () => {
		expect(formatDelta(5.56)).toBe("+5.56%");
		expect(formatDelta(6.25)).toBe("+6.25%");
		expect(formatDelta(5)).toBe("+5%");
		expect(formatDelta(0.98)).toBe("+0.98%");
		expect(formatDelta(5.1)).toBe("+5.1%");
		expect(formatDelta(-3.37)).toBe("-3.37%");
		expect(formatDelta(-7.29)).toBe("-7.29%");
		expect(formatDelta(0)).toBe("0%");
	});

	it("normalises bare percent cells and leaves other cells untouched", () => {
		expect(normalizePercentCell("5.56%")).toBe("+5.56%");
		expect(normalizePercentCell("-3.37%")).toBe("-3.37%");
		expect(normalizePercentCell("5%")).toBe("+5%");
		expect(normalizePercentCell("+5.56%")).toBe("+5.56%");
		expect(normalizePercentCell("57,000")).toBe("57,000");
		expect(normalizePercentCell("↓ 0.15")).toBe("↓ 0.15");
		expect(normalizePercentCell("-")).toBe("-");
	});

	it("derives the line-chart axis label from the x labels", () => {
		expect(xAxisLabel(["2023", "2024", "2025", "2026E"])).toBe("Year");
		expect(xAxisLabel(["Jan", "Feb"])).toBe("Period");
		expect(xAxisLabel([])).toBe("Period");
	});
});
