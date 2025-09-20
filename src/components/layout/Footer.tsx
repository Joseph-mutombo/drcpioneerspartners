
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Facebook, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-brand-blue text-white">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-2">
              <img src="/logo-transparent.png" alt="drcpioneers" className="h-20 w-auto" />
            </div>
            <p className="mt-2 text-sm text-gray-300">
              {t('footer.slogan')}
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-300 hover:text-white"><Linkedin size={20} /></a>
              <a href="#" className="text-gray-300 hover:text-white"><Twitter size={20} /></a>
              <a href="#" className="text-gray-300 hover:text-white"><Facebook size={20} /></a>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase">{t('footer.services')}</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/services" className="text-gray-300 hover:text-white">{t('header.services')}</Link></li>
              <li><Link to="/formations" className="text-gray-300 hover:text-white">{t('header.formations')}</Link></li>
              <li><Link to="/certifications" className="text-gray-300 hover:text-white">{t('header.certifications')}</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase">{t('footer.company')}</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/etudes-de-cas" className="text-gray-300 hover:text-white">{t('header.case_studies')}</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white">{t('header.contact')}</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase">{t('footer.legal')}</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-white">{t('footer.privacy_policy')}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">{t('footer.terms_of_use')}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">{t('footer.legal_notice')}</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8">
            <div className="text-sm text-gray-400">
                <p>1 av. OUA, concession PROCOKI, Q/ Basoko, C/ Ngaliema, Kinshasa, RDC</p>
                <p>+243 978 847 886 | suport@iasolution.site</p>
            </div>
          <p className="text-center text-sm text-gray-400 mt-4 md:mt-0">{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
