import { supabase } from '@/lib/supabaseClient';

export interface EmailEntry {
  id: string;
  email: string;
  timestamp: string;
  ip_address?: string | null;
  user_agent?: string | null;
}

export interface EmailStats {
  total: number;
  today: number;
  week: number;
}

export async function addEmail(email: string): Promise<EmailEntry> {
  const nowIso = new Date().toISOString();
  const userAgent = typeof navigator !== 'undefined' ? navigator.userAgent : undefined;

  // Upsert by email to avoid duplicates if function is called multiple times
  const { data, error } = await supabase
    .from('emails')
    .upsert({
      email,
      timestamp: nowIso,
      ip_address: null,
      user_agent: userAgent || null,
    }, { onConflict: 'email' })
    .select('id, email, timestamp, ip_address, user_agent')
    .single();

  if (error || !data) {
    throw error || new Error('Failed to save email');
  }

  return data as EmailEntry;
}

export async function getEmails(): Promise<EmailEntry[]> {
  const { data, error } = await supabase
    .from('emails')
    .select('*')
    .order('timestamp', { ascending: false });

  if (error) {
    throw error;
  }

  return (data || []) as EmailEntry[];
}

export async function clearAllEmails(): Promise<number> {
  const { count, error: countError } = await supabase
    .from('emails')
    .select('*', { count: 'exact', head: true });

  if (countError) throw countError;

  const { error } = await supabase
    .from('emails')
    .delete()
    .neq('id', '00000000-0000-0000-0000-000000000000');

  if (error) throw error;
  return count || 0;
}

export function calculateStats(emails: EmailEntry[]): EmailStats {
  const now = new Date();
  const todayStr = now.toISOString().split('T')[0];
  const oneWeekAgo = new Date();
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

  return {
    total: emails.length,
    today: emails.filter((e) => e.timestamp.split('T')[0] === todayStr).length,
    week: emails.filter((e) => new Date(e.timestamp) > oneWeekAgo).length,
  };
}


