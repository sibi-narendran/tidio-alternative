export function trackFormSubmit() {
  if (typeof gtag !== 'undefined') {
    gtag('event', 'form_submit', {
      event_category: 'engagement',
      event_label: 'email_signup',
      value: 1,
    });
  }
}

export function trackAdsConversion() {
  if (typeof gtag !== 'undefined') {
    gtag('event', 'conversion', {
      send_to: 'AW-10872232955/oI5hCKLM7KgbEPu3pMAo',
      value: 1.0,
      currency: 'USD',
      event_category: 'Lead',
      event_label: 'Submit lead form',
    });
  }
}


