import { apiClient } from './client';
import type { ApiResponse, AuditRequestPayload } from './types';

export async function submitAuditRequest(
  data: AuditRequestPayload
): Promise<ApiResponse> {
  const { data: response } = await apiClient.post<ApiResponse>(
    '/audit-requests',
    data
  );
  return response;
}
