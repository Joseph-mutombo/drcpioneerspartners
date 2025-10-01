
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ChevronDown, Menu, X } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { to: '/', text: t('header.home') },
    { to: '/formations', text: t('header.formations') },
    { to: '/certifications', text: t('header.certifications') },
    { to: '/audit-consultation', text: 'Audit & Consultation' },
    { to: '/blog', text: 'Blog' },
    { to: '/contact', text: t('header.contact') },
  ];

  // const servicesLinks = [
  //   { to: '/services#creation-agents', text: t('header.services_agent') },
  //   { to: '/services#integration-ia', text: t('header.services_integration') },
  //   { to: '/services#developpement-logiciels', text: t('header.services_dev') },
  //   { to: '/services/chatbots', text: t('header.services_chatbot') },
  // ];

  const NavMenu = () => (
    <>
      {navLinks.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          className={({ isActive }) =>
            `px-3 py-2 text-sm font-medium transition-colors ${
              isActive
                ? 'text-yellow-600'
                : 'text-brand-blue hover:text-yellow-600'
            }`
          }
          onClick={() => setIsMobileMenuOpen(false)}
        >
          {link.text}
        </NavLink>
      ))}
      {/* <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center px-3 py-2 text-sm font-medium text-brand-blue hover:text-brand-blue-light transition-colors outline-none">
          {t('header.services')} <ChevronDown className="w-4 h-4 ml-1" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {servicesLinks.map((link) => (
            <DropdownMenuItem key={link.to} asChild>
              <Link to={link.to} onClick={() => setIsMobileMenuOpen(false)}>{link.text}</Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu> */}
    </>
  );

  return (
    <header className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 border-b border-brand-gray-dark">
      <div className="mx-auto px-4 sm:px-6 lg:px-16">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <img src="/icon.png" alt="drcpioneers" className="h-14" />
              <div className="space-y-0.5 hidden md:block">
                <div className="flex space-x-1">
                  <span className="text-2xl font-bold text-brand-blue">DRC</span>
                  <span className="text-2xl font-bold text-brand-blue">PIONEERS</span>
                  <span className="text-2xl font-bold text-yellow-600">PARTNERS</span>
                </div>
                <span className="text-brand-blue text-xs">ICXI Regional Certification Partner</span>
              </div>
            </Link>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-4">
            <NavMenu />
            <LanguageSwitcher />
          </div>
          <div className="md:hidden flex items-center">
            <LanguageSwitcher />
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="ml-2">
              {isMobileMenuOpen ? <X className="h-6 w-6 text-brand-blue" /> : <Menu className="h-6 w-6 text-brand-blue" />}
            </button>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
            <NavMenu />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
