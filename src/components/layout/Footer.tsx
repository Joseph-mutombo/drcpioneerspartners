import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Facebook, Linkedin, MapPin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useNewsletterSubscribeMutation } from '@/hooks/useFormMutations';
import { toast } from '@/components/ui/use-toast';

const Footer = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const { mutate: subscribe, isPending } = useNewsletterSubscribeMutation();

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const value = email.trim();
    if (!value) return;
    subscribe(
      { email: value },
      {
        onSuccess: () => {
          toast({
            title: t('footer.newsletter_success'),
          });
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

  return (
    <footer className="bg-brand-blue text-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-16 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-2">
              <img src="/logo.png" alt="drcpioneers" className="h-20 w-auto" />
            </div>
            <p className="mt-2  text-gray-300">
              {t('footer.slogan')}
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-300 hover:text-white"><Linkedin size={20} /></a>
              <a href="#" className="text-gray-300 hover:text-white"><Twitter size={20} /></a>
              <a href="#" className="text-gray-300 hover:text-white"><Facebook size={20} /></a>
            </div>
          </div>
          <div>
            <h3 className=" font-semibold tracking-wider uppercase">{t('footer.services')}</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/formations" className="text-gray-300 hover:text-white">{t('header.formations')}</Link></li>
              <li><Link to="/certifications" className="text-gray-300 hover:text-white">{t('header.certifications')}</Link></li>
              <li><Link to="/audit-consultation" className="text-gray-300 hover:text-white">Audit & Consultation</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold tracking-wider uppercase">{t('footer.company')}</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/blog" className="text-gray-300 hover:text-white">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white">{t('header.contact')}</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold tracking-wider uppercase">{t('footer.legal')}</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">{t('footer.privacy_policy')}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">{t('footer.terms_of_use')}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">{t('footer.legal_notice')}</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-6 fle grid grid-cols-1 md:grid-cols-2 lg:flex-row lg:items-center lg:justify-between gap-6">
          <div className="flex flex-row items-start gap-2">
            <MapPin size={12} className="w-10 h-10 text-gray-400 shrink-0" />
            <div className=" text-gray-400">
              <p>60, Boulevard du 30 juin,  Immeuble mayumbe, niveau 6, appartement 33, C/Gombe, Kinshasa, RDC</p>
              <p>+243 862121612 | contact@drcpioneers.com</p>
            </div>
          </div>
          <div className="flex-row sm:items-center gap-2 lg:shrink-0">
            <p className="font-semibold tracking-wider mb-3 uppercase text-sm text-gray-300">
              {t('footer.newsletter_title')}
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2 sm:min-w-[280px]">
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t('footer.newsletter_placeholder')}
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 flex-1 min-w-0"
              />
              <Button
                type="submit"
                variant="secondary"
                size="sm"
                disabled={isPending}
                className="shrink-0 whitespace-nowrap"
              >
                {isPending ? t('footer.newsletter_submit_loading') : t('footer.newsletter_submit')}
              </Button>
            </form>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-center  text-gray-400 mt-4 md:mt-0">{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
