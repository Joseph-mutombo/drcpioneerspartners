import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { seoConfig, defaultSEO, SEOConfig } from '@/config/seo';

interface SEOProps {
  customConfig?: Partial<SEOConfig>;
}

const SEO = ({ customConfig }: SEOProps) => {
  const location = useLocation();
  const { i18n } = useTranslation();
  const currentLang = i18n.language || 'fr';

  // Get SEO config for current route
  const routeConfig = seoConfig[location.pathname];
  const langConfig = routeConfig?.[currentLang as 'fr' | 'en'] || routeConfig?.fr || defaultSEO;

  // Merge with custom config if provided
  const finalConfig: SEOConfig = {
    ...langConfig,
    ...customConfig,
  };

  useEffect(() => {
    // Update document title
    document.title = finalConfig.title;

    // Helper function to update or create meta tags
    const updateMetaTag = (name: string, content: string, attribute: 'name' | 'property' = 'name') => {
      let element = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Basic meta tags
    updateMetaTag('description', finalConfig.description);
    if (finalConfig.keywords) {
      updateMetaTag('keywords', finalConfig.keywords);
    }

    // Open Graph tags
    updateMetaTag('og:title', finalConfig.title, 'property');
    updateMetaTag('og:description', finalConfig.description, 'property');
    updateMetaTag('og:image', finalConfig.ogImage || defaultSEO.ogImage!, 'property');
    updateMetaTag('og:type', finalConfig.ogType || 'website', 'property');
    const canonicalUrl = finalConfig.canonical || `${window.location.origin}${location.pathname}`;
    updateMetaTag('og:url', canonicalUrl, 'property');
    updateMetaTag('og:locale', currentLang === 'fr' ? 'fr_FR' : 'en_US', 'property');
    if (currentLang === 'fr') {
      updateMetaTag('og:locale:alternate', 'en_US', 'property');
    } else {
      updateMetaTag('og:locale:alternate', 'fr_FR', 'property');
    }

    // Twitter Card tags
    updateMetaTag('twitter:card', finalConfig.twitterCard || 'summary_large_image');
    updateMetaTag('twitter:title', finalConfig.title);
    updateMetaTag('twitter:description', finalConfig.description);
    updateMetaTag('twitter:image', finalConfig.ogImage || defaultSEO.ogImage!);

    // Canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // Hreflang tags
    const baseUrl = 'https://www.drcpioneers.com';
    const currentPath = location.pathname;
    
    // Remove existing hreflang tags
    document.querySelectorAll('link[rel="alternate"][hreflang]').forEach(tag => tag.remove());
    
    // Add hreflang tags
    const addHreflang = (lang: string, href: string) => {
      const link = document.createElement('link');
      link.setAttribute('rel', 'alternate');
      link.setAttribute('hreflang', lang);
      link.setAttribute('href', href);
      document.head.appendChild(link);
    };

    addHreflang('fr', `${baseUrl}${currentPath}`);
    addHreflang('en', `${baseUrl}${currentPath}`);
    addHreflang('x-default', `${baseUrl}${currentPath}`);

    // Update HTML lang attribute
    document.documentElement.lang = currentLang;

    // Robots meta tag
    if (finalConfig.noindex) {
      updateMetaTag('robots', 'noindex, nofollow');
    } else {
      const robotsTag = document.querySelector('meta[name="robots"]') as HTMLMetaElement;
      if (robotsTag) {
        robotsTag.remove();
      }
    }
  }, [location.pathname, currentLang, finalConfig, customConfig]);

  return null;
};

export default SEO;
