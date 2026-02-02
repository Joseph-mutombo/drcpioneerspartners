import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Loader2, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useNewsletterSubscribeMutation } from '@/hooks/useFormMutations';
import { toast } from '@/components/ui/use-toast';

const NewsletterCTA = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { mutate: subscribe, isPending } = useNewsletterSubscribeMutation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const value = email.trim();
    if (!value) return;
    subscribe(
      { email: value },
      {
        onSuccess: () => {
          setIsSubmitted(true);
          toast({ title: t('footer.newsletter_success') });
          setEmail('');
        },
        onError: (err: { message?: string }) => {
          toast({
            variant: 'destructive',
            title: t('footer.newsletter_error'),
            description: err?.message,
          });
        },
      }
    );
  };

  if (isSubmitted) {
    return (
      <section className="py-16 md:py-20 bg-gradient-to-r from-brand-blue to-blue-600 text-white">
        <div className="mx-auto px-4 sm:px-6 lg:px-16">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-6">
              <CheckCircle className="w-9 h-9" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              {t('contact_page.newsletter_cta.success_title', { defaultValue: 'Merci pour votre inscription' })}
            </h2>
            <p className="text-white/90 text-lg">
              {t('contact_page.newsletter_cta.success_description', { defaultValue: 'Vous recevrez prochainement nos actualités et offres.' })}
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-10 md:py-15 bg-gradient-to-r rounded-xl from-brand-blue to-blue-600 text-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-16">
        <div className="max-w-2xl mx-auto flex flex-col gap-10">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-white/20 mb-5">
              <Mail className="w-7 h-7" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              {t('contact_page.newsletter_cta.title')}
            </h2>
            <p className="text-white/90 text-lg">
              {t('contact_page.newsletter_cta.description')}
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 w-full mx-auto"
          >
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t('footer.newsletter_placeholder')}
              className="bg-white/10 border-white/30 text-white placeholder:text-white/70 flex-1 min-w-0 py-4"
              disabled={isPending}
            />
            <Button
              type="submit"
              variant="secondary"
              disabled={isPending}
              className="shrink-0 whitespace-nowrap font-semibold min-w-[140px]"
            >
              {isPending ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  {t('footer.newsletter_submit_loading')}
                </>
              ) : (
                t('footer.newsletter_submit')
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterCTA;
