// @vitest-environment jsdom
import { render } from "@testing-library/react";
import type { ReactNode } from "react";
import { describe, expect, it, vi } from "vitest";

import { InlineText } from "./inline-content";

// InlineText uses the router's Link for internal paths; the real Link needs a
// RouterProvider, so stub it with a plain anchor to assert href/children.

vi.mock("@tanstack/react-router", () => ({
	Link: ({
		to,
		className,
		children,
	}: {
		to: string;
		className?: string;
		children?: ReactNode;
	}) => (
		<a href={to} className={className}>
			{children}
		</a>
	),
}));

describe("InlineText", () => {
	it("renders valid external citation links with target and rel", () => {
		const { container } = render(
			<InlineText text="[CEC approved](https://www.cleanenergycouncil.org.au)" />,
		);
		const link = container.querySelector("a");
		expect(link).toBeTruthy();
		expect(link?.getAttribute("href")).toBe(
			"https://www.cleanenergycouncil.org.au",
		);
		expect(link?.getAttribute("target")).toBe("_blank");
		expect(link?.getAttribute("rel")).toBe("noopener noreferrer");
		expect(
			// visible label — the sr-only "(opens in a new tab)" span is appended
			link?.querySelector("span:not(.sr-only)")?.textContent ??
				link?.textContent,
		).toBe("CEC approved");
		expect(link?.className).toContain("decoration-2");
		expect(link?.className).toContain("underline");
	});

	it("renders internal paths via the router Link, keeping query strings", () => {
		const { container } = render(
			<InlineText text="[residential products](/products/residential?utm_source=perplexity)" />,
		);
		const link = container.querySelector("a");
		expect(link?.getAttribute("href")).toBe(
			"/products/residential?utm_source=perplexity",
		);
		expect(link?.textContent).toBe("residential products");
		expect(link?.className).toContain("decoration-2");
	});

	it("renders unsafe URLs as plain text with no href", () => {
		const { container } = render(
			<InlineText text="[x](javascript:alert(1))" />,
		);
		expect(container.querySelector("a")).toBeNull();
		expect(container.textContent).toBe("[x](javascript:alert(1))");
	});

	it("passes plain text through unchanged", () => {
		const { container } = render(
			<InlineText text="plain text with no brackets at all" />,
		);
		expect(container.querySelector("a")).toBeNull();
		expect(container.textContent).toBe("plain text with no brackets at all");
	});
	it("keeps a URL containing balanced parentheses intact", () => {
		const { container } = render(
			<InlineText text="[battery](https://en.wikipedia.org/wiki/Battery_(electricity))" />,
		);
		const link = container.querySelector("a");
		expect(link?.getAttribute("href")).toBe(
			"https://en.wikipedia.org/wiki/Battery_(electricity)",
		);
		expect(link?.querySelector("span:not(.sr-only)")?.textContent).toBe(
			"battery",
		);
		// no stray ")" text left over from a clipped URL
		expect(container.textContent).not.toContain("))");
	});

	it("renders an empty-label token as plain text, never a link", () => {
		const { container } = render(
			<InlineText text="see [](https://example.gov/) for the rules" />,
		);
		expect(container.querySelector("a")).toBeNull();
		expect(container.textContent).toContain("[](https://example.gov/)");
	});

	it("keeps both linked and plain fragments in a mixed string", () => {
		const { container } = render(
			<InlineText text="The CEC lists [3,435 products](https://www.cleanenergycouncil.org.au) incl. battery models." />,
		);
		expect(container.querySelectorAll("a")[0]?.getAttribute("href")).toBe(
			"https://www.cleanenergycouncil.org.au",
		);
		expect(
			container.querySelectorAll("a")[0]?.querySelector("span:not(.sr-only)")
				?.textContent,
		).toBe("3,435 products");
		expect(container.textContent).toContain("The CEC lists");
		expect(container.textContent).toContain("incl. battery models.");
	});
});
