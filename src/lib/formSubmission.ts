export type SubmissionStatus = 'idle' | 'submitting' | 'not_configured' | 'success' | 'error';

export interface SubmissionResult {
  success: boolean;
  status: 'not_configured' | 'success' | 'error';
  message: string;
}

export interface ContactFormData {
  name: string;
  phone: string;
  email?: string;
  category?: string;
  location: string;
  serviceType: string;
  message?: string;
}

export interface BookingFormData {
  name: string;
  phone: string;
  location: string;
  message?: string;
}

export interface NewsletterFormData {
  email: string;
}

/**
 * Submits contact inquiry to backend.
 * Currently returns explicit 'not_configured' status until backend submission endpoint is provisioned.
 */
export async function submitContactInquiry(
  _data: ContactFormData
): Promise<SubmissionResult> {
  // Future architecture: call server action or real API endpoint here
  return {
    success: false,
    status: 'not_configured',
    message:
      'Online submission is currently unavailable. Please use the available contact method shown on this page.',
  };
}

/**
 * Submits booking request from homepage or location pages.
 * Currently returns explicit 'not_configured' status until backend submission endpoint is provisioned.
 */
export async function submitBookingRequest(
  _data: BookingFormData
): Promise<SubmissionResult> {
  // Future architecture: call server action or real API endpoint here
  return {
    success: false,
    status: 'not_configured',
    message:
      'Online booking is currently unavailable. Please call or message directly via WhatsApp for reservations.',
  };
}

/**
 * Submits newsletter subscription.
 * Currently returns explicit 'not_configured' status until backend submission endpoint is provisioned.
 */
export async function submitNewsletterSubscription(
  _data: NewsletterFormData
): Promise<SubmissionResult> {
  // Future architecture: call server action or real API endpoint here
  return {
    success: false,
    status: 'not_configured',
    message:
      'Newsletter subscription is currently unavailable. Please contact us directly for updates.',
  };
}
