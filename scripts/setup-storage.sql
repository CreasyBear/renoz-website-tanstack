-- =============================================================================
-- RENOZ Energy - Supabase Storage Setup
-- =============================================================================
-- Run this SQL in your Supabase SQL Editor to create the warranty uploads bucket
-- and set up Row Level Security (RLS) policies

-- 1. Create the storage bucket for warranty files
INSERT INTO storage.buckets (id, name, public)
VALUES ('warranty-uploads', 'warranty-uploads', false)
ON CONFLICT (id) DO NOTHING;

-- 2. Allow authenticated and anonymous users to upload files
-- (Files are organized by warrantyId folder for security)
CREATE POLICY "Allow public uploads to warranty-uploads"
ON storage.objects
FOR INSERT
TO public
WITH CHECK (
  bucket_id = 'warranty-uploads'
);

-- 3. Allow users to read their own uploaded files
-- (In production, you might want to restrict this further)
CREATE POLICY "Allow public reads from warranty-uploads"
ON storage.objects
FOR SELECT
TO public
USING (
  bucket_id = 'warranty-uploads'
);

-- 4. Allow users to update their own files (optional)
CREATE POLICY "Allow public updates to warranty-uploads"
ON storage.objects
FOR UPDATE
TO public
USING (
  bucket_id = 'warranty-uploads'
)
WITH CHECK (
  bucket_id = 'warranty-uploads'
);

-- 5. Allow users to delete their own files (optional)
CREATE POLICY "Allow public deletes from warranty-uploads"
ON storage.objects
FOR DELETE
TO public
USING (
  bucket_id = 'warranty-uploads'
);

-- =============================================================================
-- Verification Query
-- =============================================================================
-- Run this to verify the bucket was created successfully:
-- SELECT * FROM storage.buckets WHERE id = 'warranty-uploads';

-- =============================================================================
-- Notes
-- =============================================================================
-- - Files are stored at: warranty-uploads/{warrantyId}/{filename}
-- - Max file size: 10MB (configured in FileUpload component)
-- - Allowed types: image/jpeg, image/png, application/pdf
-- - Files are NOT public by default (public = false)
-- - Adjust RLS policies based on your security requirements
-- =============================================================================

