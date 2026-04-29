import { createClient } from "@supabase/supabase-js";

type RuntimeEnv = Record<string, string | undefined>;

export function resolveServerSupabaseConfig(
	env: RuntimeEnv = process.env,
	viteEnv: RuntimeEnv = import.meta.env,
) {
	const url = env.VITE_SUPABASE_URL || viteEnv.VITE_SUPABASE_URL || "";
	const anonKey =
		env.VITE_SUPABASE_ANON_KEY || viteEnv.VITE_SUPABASE_ANON_KEY || "";
	const serviceRoleKey = env.SUPABASE_SERVICE_ROLE_KEY || "";
	const key = serviceRoleKey || anonKey;

	if (!url || !key) {
		return null;
	}

	return {
		url,
		key,
		usesServiceRoleKey: Boolean(serviceRoleKey),
	};
}

export function createServerSupabaseClient() {
	const config = resolveServerSupabaseConfig();

	if (!config) {
		return null;
	}

	return {
		client: createClient(config.url, config.key, {
			auth: {
				autoRefreshToken: false,
				persistSession: false,
				detectSessionInUrl: false,
			},
		}),
		config,
	};
}
