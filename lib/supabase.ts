// Import the function that creates a connection ("client") to a Supabase project
import {createClient} from "@supabase/supabase-js";

// Read the Supabase project URL from environment variables (set in your .env file)
// The "!" tells TypeScript "trust me, this will not be undefined"
const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL!;

// Read the Supabase "anon" (public) API key from environment variables
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_KEY!;

// Create a basic Supabase client using just the URL and public key.
// This is used for requests that DON'T need to know who the logged-in user is
// (or where you're not using Clerk for auth).
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// This function creates a SPECIAL Supabase client that is aware of Clerk authentication.
// It takes one argument: a function called "getToken" that knows how to fetch
// the current user's auth token from Clerk.
export function createClerkSupabaseClient(
	getToken: () => Promise<string | null>,
) {
	// Create another Supabase client, same URL and key as before...
	return createClient(supabaseUrl, supabaseAnonKey, {
		// ...but this time we pass extra config: an "accessToken" function.
		// Supabase will CALL this function automatically before each request
		// to attach the user's Clerk token, so Supabase knows who is making the request.
		async accessToken() {
			// Call the getToken function we received as a parameter, and return
			// whatever token it gives back (or null if no one is logged in)
			return getToken();
		},
 	});
}