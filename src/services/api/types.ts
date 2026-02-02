// Generic API response
export interface ApiResponse<T = unknown> {
  success: boolean;
  message?: string;
  data?: T;
}

// Form payloads (aligned with existing zod schemas)
export interface ContactFormPayload {
  name: string;
  email: string | null;
  phone: string | null;
  company: string | null;
  service: string;
  message: string | null;
}

export interface NewsletterSubscribePayload {
  email: string;
}

export interface AuditRequestPayload {
  serviceName: string;
  company: string;
  contactName: string;
  email: string;
  phone: string;
  companySize: string;
  activity: string;
  timeline: string;
  budget: string;
  scope: string;
  objectives: string;
  more?: string;
  privacyPolicy: boolean;
  keepMeInformed?: boolean;
}

export interface CertificationRequestPayload {
  requestType: string;
  companyName?: string;
  contactPerson: string;
  email: string;
  phone: string;
  certificationProgram: string;
  participantCount?: string;
  currentLevel: string;
  objectives: string;
  timeline: string;
  budget: string;
  additionalInfo?: string;
  agreeTerms: boolean;
  agreeNewsletter?: boolean;
}

export interface FormationRequestPayload {
  requestType: string;
  trainingProgram: string;
  company: string;
  contactName: string;
  email: string;
  phone: string;
  currentLevel: string;
  participantsNumber: number;
  activity: string;
  timeline: string;
  budget: string;
  scope: string;
  objectives: string;
  more?: string;
  privacyPolicy: boolean;
  keepMeInformed?: boolean;
}

// Auth
export interface LoginPayload {
  email: string;
  password: string;
}

export interface User {
  id: string;
  email: string;
  name?: string;
}

export interface AuthResponse {
  accessToken: string;
  refreshToken?: string;
  user: User;
}

export interface ApiError {
  message: string;
  code?: string;
  status?: number;
}
