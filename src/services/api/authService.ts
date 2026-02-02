import { apiClient } from './client';
import { TOKEN_KEY } from './client';
import type { AuthResponse, LoginPayload, User } from './types';

export async function login(credentials: LoginPayload): Promise<AuthResponse> {
  const { data } = await apiClient.post<AuthResponse>('/auth/login', credentials);
  if (data.accessToken) {
    localStorage.setItem(TOKEN_KEY, data.accessToken);
    if (data.refreshToken) {
      localStorage.setItem('refreshToken', data.refreshToken);
    }
  }
  return data;
}

export async function logout(): Promise<void> {
  try {
    await apiClient.post('/auth/logout');
  } finally {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem('refreshToken');
  }
}

export async function refreshToken(): Promise<AuthResponse> {
  const refreshTokenValue = localStorage.getItem('refreshToken');
  if (!refreshTokenValue) throw new Error('No refresh token');
  const { data } = await apiClient.post<AuthResponse>('/auth/refresh', {
    refreshToken: refreshTokenValue,
  });
  if (data.accessToken) {
    localStorage.setItem(TOKEN_KEY, data.accessToken);
    if (data.refreshToken) {
      localStorage.setItem('refreshToken', data.refreshToken);
    }
  }
  return data;
}

export async function getCurrentUser(): Promise<User> {
  const { data } = await apiClient.get<User>('/auth/me');
  return data;
}
