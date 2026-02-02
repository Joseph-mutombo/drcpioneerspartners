import { apiClient } from './client';
import type { ApiResponse, ContactFormPayload } from './types';

export async function submitContactForm(
  data: ContactFormPayload
): Promise<ApiResponse> {
  const { data: response } = await apiClient.post<ApiResponse>('/contacts', data);
  return response;
}
