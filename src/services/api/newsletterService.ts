import { apiClient } from './client';
import type { ApiResponse, NewsletterSubscribePayload } from './types';

export async function subscribeNewsletter(
  data: NewsletterSubscribePayload
): Promise<ApiResponse> {
  const { data: response } = await apiClient.post<ApiResponse>(
    '/newsletter/subscribe',
    data
  );
  return response;
}
