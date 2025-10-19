import { createClient } from '@supabase/supabase-js';

// Prefer Vite-style envs; also accept NEXT_PUBLIC_* for compatibility
const envUrl = import.meta.env.VITE_SUPABASE_URL || import.meta.env.NEXT_PUBLIC_SUPABASE_URL;
const envAnon = import.meta.env.VITE_SUPABASE_ANON_KEY || import.meta.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Hard fallback using the values you provided, so local dev works even if envs fail to load
const fallbackUrl = 'https://rndiktnoopmxcwdulspf.supabase.co';
const fallbackAnon = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJuZGlrdG5vb3BteGN3ZHVsc3BmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk4MTc5NjMsImV4cCI6MjA3NTM5Mzk2M30.khywq7SrgW3YFlnEvk-nI4jeXAEJDm6u79-9fNLPNxQ';

const supabaseUrl = (envUrl as string) || fallbackUrl;
const supabaseAnonKey = (envAnon as string) || fallbackAnon;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);


