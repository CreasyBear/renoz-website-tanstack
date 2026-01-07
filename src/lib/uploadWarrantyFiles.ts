import { createClient } from "@supabase/supabase-js";
import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

// Server-side Supabase client
const supabaseUrl =
	process.env.VITE_SUPABASE_URL || import.meta.env.VITE_SUPABASE_URL || "";
const supabaseAnonKey =
	process.env.VITE_SUPABASE_ANON_KEY ||
	import.meta.env.VITE_SUPABASE_ANON_KEY ||
	"";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const uploadFileSchema = z.object({
	warrantyId: z.string(),
	file: z.object({
		name: z.string(),
		type: z.string(),
		data: z.string(), // base64 encoded file data
	}),
});

export const uploadWarrantyFile = createServerFn({
	method: "POST",
}).inputValidator(uploadFileSchema).handler(async ({ data }) => {
	const { warrantyId, file } = data;

	if (!warrantyId || !file || !file.data) {
		return { success: false, error: "Missing required fields" };
	}

	try {
		// Convert base64 to buffer
		const base64Data = file.data.replace(/^data:.*,/, "");
		const buffer = Buffer.from(base64Data, "base64");

		// Generate unique filename
		const timestamp = Date.now();
		const sanitizedName = file.name.replace(/[^a-zA-Z0-9.-]/g, "_");
		const filePath = `warranty-files/${warrantyId}/${timestamp}-${sanitizedName}`;

		// Upload to Supabase Storage
		const { error: uploadError } = await supabase.storage
			.from("warranty-uploads")
			.upload(filePath, buffer, {
				contentType: file.type,
				upsert: false,
			});

		if (uploadError) {
			console.error("Supabase upload error:", uploadError);
			return { success: false, error: "Failed to upload file" };
		}

		// Get public URL
		const { data: urlData } = supabase.storage
			.from("warranty-uploads")
			.getPublicUrl(filePath);

		return {
			success: true,
			url: urlData.publicUrl,
			path: filePath,
			name: file.name,
		};
	} catch (error) {
		console.error("File upload error:", error);
		return { success: false, error: "Failed to upload file" };
	}
});
