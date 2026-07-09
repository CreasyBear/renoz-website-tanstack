# Debug Report: Contact Form Inquiry RLS Failure

Date: 2026-04-29

## Symptom

Contact form submissions failed with:

`Failed to save inquiry: new row violates row-level security policy for table "inquiries"`

## Root Cause

`submitInquiry` runs as a server function, but it created the Supabase client with `VITE_SUPABASE_ANON_KEY`. That made the server-side insert depend on the public `anon` role's RLS policies. In production, the `inquiries` insert policy was missing, stale, or otherwise not matching the submitted row.

The insert also chained `.select().single()`, which required a read policy after writing even though the client did not need the inserted row.

## Fix

- Added a server Supabase helper that prefers `SUPABASE_SERVICE_ROLE_KEY` for verified server-side form writes.
- Updated inquiry submission to use the helper and insert without selecting the row back.
- Updated warranty registration submission to use the same helper because it had the same anon-client server-write pattern.
- Made the inquiry RLS policy section in `scripts/supabase-schema.sql` drop both old and current policy names before recreating them.
- Documented `SUPABASE_SERVICE_ROLE_KEY` as a required server-only deployment variable.

## Evidence

- `npm run typecheck` passed.
- `npm run lint` passed.
- `npm run test` passed: 2 files, 11 tests.
- `npm run build` passed.

## Status

DONE_WITH_CONCERNS: Code path is fixed and verified locally, but production still needs `SUPABASE_SERVICE_ROLE_KEY` configured and a redeploy before live submissions can be confirmed.
