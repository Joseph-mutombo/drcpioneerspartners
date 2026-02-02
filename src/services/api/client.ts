import axios, { type AxiosError } from 'axios';
import { API_BASE_URL } from '@/config/api';

const TOKEN_KEY = 'accessToken';

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 30_000,
});

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem(TOKEN_KEY);
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

apiClient.interceptors.response.use(
  (response) => response,
  (error: AxiosError<{ message?: string; code?: string }>) => {
    if (error.response?.status === 401) {
      localStorage.removeItem(TOKEN_KEY);
      // AuthContext / redirect can be wired when AuthProvider exists
    }
    const apiError = {
      message:
        error.response?.data?.message ??
        error.message ??
        'An unexpected error occurred',
      code: error.response?.data?.code,
      status: error.response?.status,
    };
    return Promise.reject(apiError);
  }
);

export { TOKEN_KEY };
