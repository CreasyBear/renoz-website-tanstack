import { File, RefreshCw, Upload, X } from "lucide-react";
import { useRef, useState } from "react";
import { supabase } from "../../lib/supabase";

interface UploadedFile {
	name: string;
	type: string;
	size: number;
	url?: string;
	path?: string;
	preview?: string;
	uploading?: boolean;
	error?: string;
	// Store the original file for retry purposes
	originalFile?: globalThis.File;
}

interface FileUploadProps {
	warrantyId: string;
	files: UploadedFile[];
	onFilesChange: (
		update: UploadedFile[] | ((prev: UploadedFile[]) => UploadedFile[]),
	) => void;
	maxFileSize?: number; // in bytes
	allowedTypes?: string[];
}

/**
 * Upload a file directly to Supabase Storage from the client
 * This bypasses the serverless function to avoid payload size limits
 */
async function uploadToSupabaseStorage(
	warrantyId: string,
	file: globalThis.File,
): Promise<{ success: boolean; url?: string; path?: string; error?: string }> {
	try {
		// Generate unique filename
		const timestamp = Date.now();
		const sanitizedName = file.name.replace(/[^a-zA-Z0-9.-]/g, "_");
		const filePath = `warranty-files/${warrantyId}/${timestamp}-${sanitizedName}`;

		console.log("[DirectUpload] Uploading to path:", filePath);

		// Upload directly to Supabase Storage
		const { error: uploadError } = await supabase.storage
			.from("warranty-uploads")
			.upload(filePath, file, {
				contentType: file.type,
				upsert: false,
			});

		if (uploadError) {
			console.error("[DirectUpload] Supabase upload error:", uploadError);

			// Provide more specific error messages
			if (uploadError.message?.includes("size")) {
				return { success: false, error: "File size exceeds limit" };
			} else if (uploadError.message?.includes("type")) {
				return { success: false, error: "File type not allowed" };
			} else if (uploadError.message?.includes("exists")) {
				return { success: false, error: "File already exists" };
			} else {
				return {
					success: false,
					error: uploadError.message || "Upload failed",
				};
			}
		}

		// Get public URL
		const { data: urlData } = supabase.storage
			.from("warranty-uploads")
			.getPublicUrl(filePath);

		console.log("[DirectUpload] Upload successful, URL:", urlData.publicUrl);

		return {
			success: true,
			url: urlData.publicUrl,
			path: filePath,
		};
	} catch (error) {
		console.error("[DirectUpload] Exception:", error);
		return {
			success: false,
			error: error instanceof Error ? error.message : "Upload failed",
		};
	}
}

export default function FileUpload({
	warrantyId,
	files,
	onFilesChange,
	maxFileSize = 25 * 1024 * 1024, // 25MB default (no more base64 bloat!)
	allowedTypes = ["image/jpeg", "image/png", "application/pdf"],
}: FileUploadProps) {
	const fileInputRef = useRef<HTMLInputElement>(null);
	const [dragActive, setDragActive] = useState(false);

	const retryUpload = async (fileToRetry: UploadedFile) => {
		if (!fileToRetry.originalFile) {
			onFilesChange((prevFiles: UploadedFile[]) => {
				const updatedFiles = [...prevFiles];
				const fileIndex = updatedFiles.findIndex(
					(f) => f.name === fileToRetry.name && f.error,
				);
				if (fileIndex !== -1) {
					updatedFiles[fileIndex] = {
						...updatedFiles[fileIndex],
						error: "Cannot retry - please remove and re-upload the file",
					};
				}
				return updatedFiles;
			});
			return;
		}

		// Mark as uploading again
		onFilesChange((prevFiles: UploadedFile[]) => {
			const updatedFiles = [...prevFiles];
			const fileIndex = updatedFiles.findIndex(
				(f) => f.name === fileToRetry.name && f.error,
			);
			if (fileIndex !== -1) {
				updatedFiles[fileIndex] = {
					...updatedFiles[fileIndex],
					uploading: true,
					error: undefined,
				};
			}
			return updatedFiles;
		});

		try {
			const result = await uploadToSupabaseStorage(
				warrantyId,
				fileToRetry.originalFile,
			);

			if (result.success) {
				onFilesChange((prevFiles: UploadedFile[]) => {
					const updatedFiles = [...prevFiles];
					const fileIndex = updatedFiles.findIndex(
						(f) => f.name === fileToRetry.name,
					);
					if (fileIndex !== -1) {
						updatedFiles[fileIndex] = {
							...updatedFiles[fileIndex],
							uploading: false,
							url: result.url,
							path: result.path,
							error: undefined,
							originalFile: undefined, // Clear the file reference after successful upload
						};
					}
					return updatedFiles;
				});
			} else {
				throw new Error(result.error || "Upload failed");
			}
		} catch (error) {
			console.error("Retry upload failed:", error);
			onFilesChange((prevFiles: UploadedFile[]) => {
				const updatedFiles = [...prevFiles];
				const fileIndex = updatedFiles.findIndex(
					(f) => f.name === fileToRetry.name,
				);
				if (fileIndex !== -1) {
					updatedFiles[fileIndex] = {
						...updatedFiles[fileIndex],
						uploading: false,
						error:
							error instanceof Error
								? error.message
								: "Retry failed - please try again",
					};
				}
				return updatedFiles;
			});
		}
	};

	const handleFileSelect = async (selectedFiles: FileList | null) => {
		if (!selectedFiles) return;

		const newFiles: UploadedFile[] = [];

		for (let i = 0; i < selectedFiles.length; i++) {
			const file = selectedFiles[i];

			// Check file type
			if (!allowedTypes.includes(file.type)) {
				const errorFile: UploadedFile = {
					name: file.name,
					type: file.type,
					size: file.size,
					error:
						"Invalid file type. Only JPEG, PNG, and PDF files are allowed.",
				};
				newFiles.push(errorFile);
				continue;
			}

			// Check file size
			if (file.size > maxFileSize) {
				const errorFile: UploadedFile = {
					name: file.name,
					type: file.type,
					size: file.size,
					error: `File too large. Maximum size is ${Math.round(maxFileSize / 1024 / 1024)}MB`,
				};
				newFiles.push(errorFile);
				continue;
			}

			// Check for file corruption (basic check)
			if (file.size === 0) {
				const errorFile: UploadedFile = {
					name: file.name,
					type: file.type,
					size: file.size,
					error: "File appears to be empty or corrupted",
				};
				newFiles.push(errorFile);
				continue;
			}

			// Create preview for images
			let preview: string | undefined;
			if (file.type.startsWith("image/")) {
				preview = URL.createObjectURL(file);
			}

			const uploadFile: UploadedFile = {
				name: file.name,
				type: file.type,
				size: file.size,
				preview,
				uploading: true,
				originalFile: file, // Store original file for retry
			};

			newFiles.push(uploadFile);

			// Upload file directly to Supabase with retry logic
			const performUpload = async (retryCount = 0): Promise<void> => {
				try {
					const result = await uploadToSupabaseStorage(warrantyId, file);

					if (result.success && result.url) {
						// Success - update file state
						onFilesChange((prevFiles: UploadedFile[]) => {
							const updatedFiles = [...prevFiles];
							const fileIndex = updatedFiles.findIndex(
								(f) => f.name === file.name && f.uploading,
							);
							if (fileIndex !== -1) {
								updatedFiles[fileIndex] = {
									...updatedFiles[fileIndex],
									url: result.url,
									path: result.path,
									uploading: false,
									originalFile: undefined, // Clear file reference after success
								};
							}
							return updatedFiles;
						});
					} else {
						// Handle retry for network/server errors
						const errorMessage = result.error || "Upload failed";
						const isRetryableError =
							errorMessage.includes("network") ||
							errorMessage.includes("server") ||
							errorMessage.includes("timeout") ||
							errorMessage.includes("fetch");

						if (isRetryableError && retryCount < 2) {
							console.log(
								`Retrying upload for ${file.name} (attempt ${retryCount + 2})`,
							);
							// Wait with exponential backoff
							setTimeout(
								() => performUpload(retryCount + 1),
								2 ** retryCount * 1000,
							);
							return;
						}

						// Final failure
						onFilesChange((prevFiles: UploadedFile[]) => {
							const updatedFiles = [...prevFiles];
							const fileIndex = updatedFiles.findIndex(
								(f) => f.name === file.name && f.uploading,
							);
							if (fileIndex !== -1) {
								updatedFiles[fileIndex] = {
									...updatedFiles[fileIndex],
									uploading: false,
									error: errorMessage,
								};
							}
							return updatedFiles;
						});
					}
				} catch (error) {
					console.error("Upload error:", error);

					// Retry for network errors
					if (
						retryCount < 2 &&
						(error as Error).message?.includes("network")
					) {
						console.log(
							`Retrying upload for ${file.name} due to network error (attempt ${retryCount + 2})`,
						);
						setTimeout(
							() => performUpload(retryCount + 1),
							2 ** retryCount * 1000,
						);
						return;
					}

					// Final failure
					onFilesChange((prevFiles: UploadedFile[]) => {
						const updatedFiles = [...prevFiles];
						const fileIndex = updatedFiles.findIndex(
							(f) => f.name === file.name && f.uploading,
						);
						if (fileIndex !== -1) {
							updatedFiles[fileIndex] = {
								...updatedFiles[fileIndex],
								uploading: false,
								error: "Upload failed - please try again",
							};
						}
						return updatedFiles;
					});
				}
			};

			// Start upload process
			performUpload();
		}

		// Add files immediately for preview
		if (newFiles.length > 0) {
			onFilesChange((prev: UploadedFile[]) => [...prev, ...newFiles]);
		}
	};

	const handleDrag = (e: React.DragEvent) => {
		e.preventDefault();
		e.stopPropagation();
		if (e.type === "dragenter" || e.type === "dragover") {
			setDragActive(true);
		} else if (e.type === "dragleave") {
			setDragActive(false);
		}
	};

	const handleDrop = (e: React.DragEvent) => {
		e.preventDefault();
		e.stopPropagation();
		setDragActive(false);

		if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
			handleFileSelect(e.dataTransfer.files);
		}
	};

	const removeFile = (index: number) => {
		onFilesChange((prev: UploadedFile[]) => prev.filter((_, i) => i !== index));
	};

	return (
		<div className="space-y-4">
			<div
				onDragEnter={handleDrag}
				onDragLeave={handleDrag}
				onDragOver={handleDrag}
				onDrop={handleDrop}
				className={`
          border-2 border-dashed rounded-xl p-8 text-center transition-colors cursor-pointer hover:border-gray-400
          ${dragActive ? "border-[var(--renoz-green)] bg-[var(--renoz-green)]/5" : "border-gray-300 bg-gray-50"}
        `}
				onClick={() => {
					fileInputRef.current?.click();
				}}
			>
				<input
					ref={fileInputRef}
					type="file"
					multiple
					accept={allowedTypes.join(",")}
					onChange={(e) => handleFileSelect(e.target.files)}
					className="hidden"
				/>
				<Upload className="w-12 h-12 mx-auto mb-4 text-gray-400" />
				<p className="text-sm font-medium text-gray-700 mb-1">
					Drag & drop files here
				</p>
				<p className="text-xs text-gray-500">
					or click to browse • {Math.round(maxFileSize / 1024 / 1024)}MB per
					file
				</p>
				<p className="text-xs text-gray-400 mt-2">Accepted: JPEG, PNG, PDF</p>
			</div>

			{files.length > 0 && (
				<div className="space-y-2">
					<p className="text-sm font-medium text-gray-700">
						Uploaded Files ({files.length})
					</p>
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
						{files.map((file, index) => (
							<div
								key={index}
								className="flex items-center gap-3 p-3 bg-white border border-gray-200 rounded-lg"
							>
								{file.preview ? (
									<img
										src={file.preview}
										alt={file.name}
										className="w-12 h-12 object-cover rounded"
									/>
								) : (
									<div className="w-12 h-12 bg-gray-100 rounded flex items-center justify-center">
										<File className="w-6 h-6 text-gray-400" />
									</div>
								)}
								<div className="flex-1 min-w-0">
									<p className="text-sm font-medium text-gray-900 truncate">
										{file.name}
									</p>
									<p className="text-xs text-gray-500">
										{file.uploading ? (
											"Uploading..."
										) : file.error ? (
											<span className="text-red-500">{file.error}</span>
										) : (
											`${Math.round(file.size / 1024)} KB`
										)}
									</p>
								</div>
								{!file.uploading && (
									<div className="flex gap-1">
										{file.error && (
											<button
												type="button"
												onClick={() => retryUpload(file)}
												className="p-1 text-gray-400 hover:text-blue-500 transition-colors"
												title="Retry upload"
												disabled={file.uploading}
											>
												<RefreshCw
													className={`w-4 h-4 ${file.uploading ? "animate-spin" : ""}`}
												/>
											</button>
										)}
										<button
											type="button"
											onClick={() => removeFile(index)}
											className="p-1 text-gray-400 hover:text-red-500 transition-colors"
										>
											<X className="w-5 h-5" />
										</button>
									</div>
								)}
							</div>
						))}
					</div>
				</div>
			)}
		</div>
	);
}
