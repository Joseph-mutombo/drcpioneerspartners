import { apiClient } from './client';
import type { ApiResponse, FormationRequestPayload } from './types';

export async function submitFormationRequest(
  data: FormationRequestPayload
): Promise<ApiResponse> {
  const { data: response } = await apiClient.post<ApiResponse>(
    '/training-requests',
    data
  );
  return response;
}
