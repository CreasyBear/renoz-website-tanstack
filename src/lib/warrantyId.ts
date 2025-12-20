/**
 * Generate a unique warranty ID in format: WR-YYYYMMDD-XXXXXX
 * Where XXXXXX is a random 6-character alphanumeric string
 */
export function generateWarrantyId(): string {
	const now = new Date();
	const year = now.getFullYear();
	const month = String(now.getMonth() + 1).padStart(2, "0");
	const day = String(now.getDate()).padStart(2, "0");
	const dateStr = `${year}${month}${day}`;

	// Generate random 6-character alphanumeric string
	const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
	let randomStr = "";
	for (let i = 0; i < 6; i++) {
		randomStr += chars.charAt(Math.floor(Math.random() * chars.length));
	}

	return `WR-${dateStr}-${randomStr}`;
}
