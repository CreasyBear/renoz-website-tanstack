import { describe, expect, it } from "vitest";
import { audFromCny, audPerTonne } from "./insight-fx";

describe("insight AUD scale conversions", () => {
	it("converts yuan totals at A$0.21 per yuan", () => {
		expect(audFromCny(21.4e9)).toBe("A$4.5 billion");
		expect(audFromCny(3.65e9)).toBe("A$770 million");
		expect(audPerTonne(57_000)).toBe("A$12,000/t");
		expect(audPerTonne(147_000)).toBe("A$30,900/t");
	});
});
