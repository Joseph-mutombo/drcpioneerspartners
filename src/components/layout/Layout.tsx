
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ChatbotProvider from '../ChatbotProvider';
import GoToTopProvider from '../GoToTopProvider';
import SEO from '../SEO';
import StructuredData from '../StructuredData';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <SEO />
      <StructuredData type="Organization" />
      <StructuredData type="WebSite" />
      <StructuredData type="BreadcrumbList" />
      <div className="flex flex-col min-h-screen bg-white font-sans">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <ChatbotProvider />
        <GoToTopProvider />
      </div>
    </>
  );
};

export default Layout;
