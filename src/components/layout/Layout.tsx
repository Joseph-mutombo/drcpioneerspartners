
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ChatbotProvider from '../ChatbotProvider';
import GoToTopProvider from '../GoToTopProvider';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
      <ChatbotProvider />
      <GoToTopProvider />
    </div>
  );
};

export default Layout;
