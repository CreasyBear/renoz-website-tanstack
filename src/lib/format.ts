const EN_AU_DATE_FORMATTER = new Intl.DateTimeFormat("en-AU", {
	day: "numeric",
	month: "short",
	year: "numeric",
	timeZone: "Australia/Perth",
});

/**
 * Formats an ISO `YYYY-MM-DD` date in en-AU style, e.g. "1 Sep 2026" — the
 * same style the /guides index uses. The explicit +08:00 offset keeps the
 * date stable in Perth time regardless of the server's timezone.
 */
export function formatDateEnAu(value: string) {
	return EN_AU_DATE_FORMATTER.format(new Date(`${value}T00:00:00+08:00`));
}
