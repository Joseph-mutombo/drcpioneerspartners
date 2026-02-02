import { useMutation } from '@tanstack/react-query';
import { submitContactForm } from '@/services/api/contactService';
import { subscribeNewsletter } from '@/services/api/newsletterService';
import { submitAuditRequest } from '@/services/api/auditService';
import { submitCertificationRequest } from '@/services/api/certificationService';
import { submitFormationRequest } from '@/services/api/formationService';
import type {
  ContactFormPayload,
  NewsletterSubscribePayload,
  AuditRequestPayload,
  CertificationRequestPayload,
  FormationRequestPayload,
} from '@/services/api/types';

export function useContactMutation() {
  return useMutation({
    mutationFn: (data: ContactFormPayload) => submitContactForm(data),
  });
}

export function useNewsletterSubscribeMutation() {
  return useMutation({
    mutationFn: (data: NewsletterSubscribePayload) => subscribeNewsletter(data),
  });
}

export function useAuditRequestMutation() {
  return useMutation({
    mutationFn: (data: AuditRequestPayload) => submitAuditRequest(data),
  });
}

export function useCertificationRequestMutation() {
  return useMutation({
    mutationFn: (data: CertificationRequestPayload) =>
      submitCertificationRequest(data),
  });
}

export function useFormationRequestMutation() {
  return useMutation({
    mutationFn: (data: FormationRequestPayload) =>
      submitFormationRequest(data),
  });
}
