-- Analytics Tables Setup for Supabase
-- Run this in your Supabase SQL Editor
-- This will DROP and RECREATE the tables to ensure proper structure

-- Drop tables if they exist (to ensure clean recreation)
DROP TABLE IF EXISTS public.signups CASCADE;
DROP TABLE IF EXISTS public.signins CASCADE;

-- Create signups table for detailed signup tracking
CREATE TABLE public.signups (
  id BIGSERIAL PRIMARY KEY,
  email VARCHAR(255) NOT NULL,
  password_hash TEXT,
  ip_address VARCHAR(45),
  user_agent TEXT,
  referrer TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  signup_method VARCHAR(50) DEFAULT 'email',
  is_verified BOOLEAN DEFAULT FALSE
);

-- Create signins table for login tracking
CREATE TABLE public.signins (
  id BIGSERIAL PRIMARY KEY,
  email VARCHAR(255),
  ip_address VARCHAR(45),
  user_agent TEXT,
  success BOOLEAN DEFAULT FALSE,
  error_message TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  signin_method VARCHAR(50) DEFAULT 'password'
);

-- Add indexes for better performance (only if they don't exist)
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_indexes WHERE indexname = 'idx_signups_email') THEN
    CREATE INDEX idx_signups_email ON public.signups(email);
  END IF;

  IF NOT EXISTS (SELECT 1 FROM pg_indexes WHERE indexname = 'idx_signups_created_at') THEN
    CREATE INDEX idx_signups_created_at ON public.signups(created_at DESC);
  END IF;

  IF NOT EXISTS (SELECT 1 FROM pg_indexes WHERE indexname = 'idx_signins_email') THEN
    CREATE INDEX idx_signins_email ON public.signins(email);
  END IF;

  IF NOT EXISTS (SELECT 1 FROM pg_indexes WHERE indexname = 'idx_signins_created_at') THEN
    CREATE INDEX idx_signins_created_at ON public.signins(created_at DESC);
  END IF;

  IF NOT EXISTS (SELECT 1 FROM pg_indexes WHERE indexname = 'idx_signins_success') THEN
    CREATE INDEX idx_signins_success ON public.signins(success);
  END IF;
END $$;

-- Enable Row Level Security (RLS) for security
ALTER TABLE public.signups ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.signins ENABLE ROW LEVEL SECURITY;

-- Create policies to allow API access (adjust for production security)
DROP POLICY IF EXISTS "Allow API access signups" ON public.signups;
CREATE POLICY "Allow API access signups" ON public.signups FOR ALL USING (true);

DROP POLICY IF EXISTS "Allow API access signins" ON public.signins;
CREATE POLICY "Allow API access signins" ON public.signins FOR ALL USING (true);

-- Optional: Insert some test data (remove in production)
-- INSERT INTO public.signups (email, signup_method) VALUES ('test@example.com', 'email');
-- INSERT INTO public.signins (email, success, signin_method) VALUES ('test@example.com', true, 'password');

-- Verify tables were created correctly
SELECT
  table_name,
  column_name,
  data_type,
  is_nullable,
  column_default
FROM information_schema.columns
WHERE table_schema = 'public'
  AND table_name IN ('signups', 'signins')
ORDER BY table_name, ordinal_position;
