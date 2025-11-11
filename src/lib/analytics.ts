import { supabase } from './supabaseClient';

// Get user IP address (client-side)
const getClientIP = async (): Promise<string> => {
  try {
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();
    return data.ip;
  } catch (error) {
    console.warn('Could not fetch IP address:', error);
    return '';
  }
};

// Track signup events
export const trackSignup = async (
  email: string,
  password?: string,
  method: string = 'email'
) => {
  try {
    const ip = await getClientIP();
    const referrer = document.referrer || '';
    const userAgent = navigator.userAgent;

    const { error } = await supabase
      .from('signups')
      .insert({
        email,
        password_hash: password ? await hashPassword(password) : null,
        ip_address: ip,
        user_agent: userAgent,
        referrer,
        signup_method: method,
        is_verified: false
      });

    if (error) {
      console.error('Error tracking signup:', error);
    } else {
      console.log('Signup tracked successfully');
    }
  } catch (error) {
    console.error('Error in trackSignup:', error);
  }
};

// Track signin events
export const trackSignin = async (
  email: string,
  success: boolean,
  errorMessage?: string,
  method: string = 'password'
) => {
  try {
    const ip = await getClientIP();
    const userAgent = navigator.userAgent;

    const { error } = await supabase
      .from('signins')
      .insert({
        email,
        ip_address: ip,
        user_agent: userAgent,
        success,
        error_message: errorMessage || null,
        signin_method: method
      });

    if (error) {
      console.error('Error tracking signin:', error);
    } else {
      console.log('Signin tracked successfully');
    }
  } catch (error) {
    console.error('Error in trackSignin:', error);
  }
};

// Simple password hashing function (for demo purposes - use proper hashing in production)
const hashPassword = async (password: string): Promise<string> => {
  // In production, use proper password hashing like bcrypt
  // This is just a placeholder for demo purposes
  const encoder = new TextEncoder();
  const data = encoder.encode(password + 'salt');
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
};

// Track form submissions (generic analytics)
export const trackFormSubmit = () => {
  try {
    // Google Analytics 4
    if (typeof gtag !== "undefined") {
      gtag("event", "form_submit", {
        event_category: "engagement",
        event_label: "email_signup_form",
        value: 1,
      });
    }

    // Facebook Pixel
    if (typeof fbq !== "undefined") {
      fbq("track", "Lead");
    }

    console.log("Form submission tracked");
  } catch (error) {
    console.error("Error tracking form submit:", error);
  }
};

// Track ad conversions
export const trackAdsConversion = () => {
  try {
    // Facebook Pixel conversion
    if (typeof fbq !== "undefined") {
      fbq("track", "CompleteRegistration");
    }

    // Google Ads conversion
    if (typeof gtag !== "undefined") {
      gtag("event", "conversion", {
        send_to: "AW-CONVERSION_ID/CONVERSION_LABEL", // Replace with actual conversion ID
        value: 1.0,
        currency: "USD"
      });
    }

    console.log("Ads conversion tracked");
  } catch (error) {
    console.error("Error tracking ads conversion:", error);
  }
};

// Get analytics data for admin page
export const getAnalyticsData = async () => {
  try {
    // Get signup stats
    const { data: signups, error: signupsError } = await supabase
      .from('signups')
      .select('created_at, email, signup_method, is_verified')
      .order('created_at', { ascending: false })
      .limit(1000); // Limit to prevent large queries

    // Get signin stats
    const { data: signins, error: signinsError } = await supabase
      .from('signins')
      .select('created_at, email, success, error_message, signin_method')
      .order('created_at', { ascending: false })
      .limit(1000); // Limit to prevent large queries

    // Get legacy emails for comparison
    const { data: legacyEmails, error: legacyError } = await supabase
      .from('emails')
      .select('email, timestamp')
      .order('timestamp', { ascending: false });

    if (signupsError) {
      console.error('Error fetching signups:', signupsError);
    }
    if (signinsError) {
      console.error('Error fetching signins:', signinsError);
    }
    if (legacyError) {
      console.error('Error fetching legacy emails:', legacyError);
    }

    // Return whatever data we could fetch (partial success is ok)
    return {
      signups: signups || [],
      signins: signins || [],
      legacyEmails: legacyEmails || []
    };
  } catch (error) {
    console.error('Error in getAnalyticsData:', error);
    return { signups: [], signins: [], legacyEmails: [] };
  }
};