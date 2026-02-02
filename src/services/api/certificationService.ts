import { apiClient } from './client';
import type { ApiResponse, CertificationRequestPayload } from './types';

export async function submitCertificationRequest(
  data: CertificationRequestPayload
): Promise<ApiResponse> {
  const { data: response } = await apiClient.post<ApiResponse>(
    '/certification-requests',
    data
  );
  return response;
}
