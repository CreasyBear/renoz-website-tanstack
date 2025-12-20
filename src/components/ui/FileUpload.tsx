import { File, Upload, X } from "lucide-react";
import { useRef, useState } from "react";
import { uploadWarrantyFile } from "../../lib/uploadWarrantyFiles";

interface UploadedFile {
	name: string;
	type: string;
	size: number;
	url?: string;
	path?: string;
	preview?: string;
	uploading?: boolean;
	error?: string;
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

export default function FileUpload({
	warrantyId,
	files,
	onFilesChange,
	maxFileSize = 10 * 1024 * 1024, // 10MB default
	allowedTypes = ["image/jpeg", "image/png", "application/pdf"],
}: FileUploadProps) {
	const fileInputRef = useRef<HTMLInputElement>(null);
	const [dragActive, setDragActive] = useState(false);

	const handleFileSelect = async (selectedFiles: FileList | null) => {
		if (!selectedFiles) return;

		const newFiles: UploadedFile[] = [];

		for (let i = 0; i < selectedFiles.length; i++) {
			const file = selectedFiles[i];

			// Check file type
			if (!allowedTypes.includes(file.type)) {
				alert(
					`${file.name} is not an allowed file type. Please upload JPEG, PNG, or PDF files.`,
				);
				continue;
			}

			// Check file size
			if (file.size > maxFileSize) {
				alert(
					`${file.name} is too large. Maximum size is ${Math.round(maxFileSize / 1024 / 1024)}MB`,
				);
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
			};

			newFiles.push(uploadFile);

			// Upload file
			try {
				const reader = new FileReader();
				reader.onload = async (e) => {
					const base64Data = e.target?.result as string;

				const result = await uploadWarrantyFile({
					data: {
						warrantyId,
						file: {
							name: file.name,
							type: file.type,
								data: base64Data,
							},
						},
					});

					if (result.success && result.url) {
						// Functional update to avoid closure issues with multiple concurrent uploads
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
								};
							}
							return updatedFiles;
						});
					} else {
						onFilesChange((prevFiles: UploadedFile[]) => {
							const updatedFiles = [...prevFiles];
							const fileIndex = updatedFiles.findIndex(
								(f) => f.name === file.name && f.uploading,
							);
							if (fileIndex !== -1) {
								updatedFiles[fileIndex] = {
									...updatedFiles[fileIndex],
									uploading: false,
									error: result.error || "Upload failed",
								};
							}
							return updatedFiles;
						});
					}
				};
				reader.readAsDataURL(file);
			} catch (error) {
				console.error("Error uploading file:", error);
				onFilesChange((prevFiles: UploadedFile[]) => {
					const updatedFiles = [...prevFiles];
					const fileIndex = updatedFiles.findIndex(
						(f) => f.name === file.name && f.uploading,
					);
					if (fileIndex !== -1) {
						updatedFiles[fileIndex] = {
							...updatedFiles[fileIndex],
							uploading: false,
							error: "Upload failed",
						};
					}
					return updatedFiles;
				});
			}
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
									<button
										type="button"
										onClick={() => removeFile(index)}
										className="p-1 text-gray-400 hover:text-red-500 transition-colors"
									>
										<X className="w-5 h-5" />
									</button>
								)}
							</div>
						))}
					</div>
				</div>
			)}
		</div>
	);
}
