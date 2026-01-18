export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  canonical?: string;
  noindex?: boolean;
}

export interface SEOConfigByRoute {
  [route: string]: {
    fr: SEOConfig;
    en: SEOConfig;
  };
}

const baseUrl = 'https://www.drcpioneers.com';
const defaultOgImage = `${baseUrl}/icon.webp`;

export const seoConfig: SEOConfigByRoute = {
  '/': {
    fr: {
      title: 'DRC Pioneers - Excellence de l\'Expérience Client en RDC | Partenaire ICXI',
      description: 'Partenaire exclusif ICXI en RDC. Transformez votre expérience client avec nos certifications, formations et audits selon les standards internationaux. Certification TISSE disponible.',
      keywords: 'expérience client, CX, customer experience, ICXI, certification TISSE, formation CX, audit service client, RDC, Kinshasa, Congo, excellence service, DRC Pioneer Partners, partenaire ICXI',
      ogImage: `${baseUrl}/hero.png`,
      ogType: 'website',
      canonical: `${baseUrl}/`,
    },
    en: {
      title: 'DRC Pioneers - Customer Experience Excellence in DRC | ICXI Partner',
      description: 'Exclusive ICXI partner in DRC. Transform your customer experience with our certifications, training and audits according to international standards. TISSE certification available.',
      keywords: 'customer experience, CX, expérience client, ICXI, TISSE certification, CX training, customer service audit, DRC, Kinshasa, Congo, service excellence, DRC Pioneer Partners, ICXI partner',
      ogImage: `${baseUrl}/hero.png`,
      ogType: 'website',
      canonical: `${baseUrl}/`,
    },
  },
  '/about': {
    fr: {
      title: 'À Propos - DRC Pioneer Partners | Partenaire Exclusif ICXI en RDC',
      description: 'DRC Pioneer Partners est le partenaire exclusif ICXI en République Démocratique du Congo. Découvrez notre mission, notre vision et notre approche pour l\'excellence du service.',
      keywords: 'DRC Pioneer Partners, DRC Pioneers, ICXI, partenaire exclusif, RDC, Congo, Kinshasa, expérience client, CX, cabinet conseil, mission, vision, excellence service',
      ogImage: defaultOgImage,
      canonical: `${baseUrl}/about`,
    },
    en: {
      title: 'About - DRC Pioneer Partners | Exclusive ICXI Partner in DRC',
      description: 'DRC Pioneer Partners is the exclusive ICXI partner in the Democratic Republic of Congo. Discover our mission, vision and approach to service excellence.',
      keywords: 'DRC Pioneer Partners, DRC Pioneers, ICXI, exclusive partner, DRC, Congo, Kinshasa, customer experience, CX, consulting firm, mission, vision, service excellence',
      ogImage: defaultOgImage,
      canonical: `${baseUrl}/about`,
    },
  },
  '/navigators': {
    fr: {
      title: 'Navigators - Outils IA d\'Évaluation CX | DRC Pioneers',
      description: 'Outils d\'évaluation intelligents pour mesurer la maturité en expérience client. ICXN2025, IBDN2025 et IEHWN2025 - Solutions IA adaptées aux entreprises en RDC avec 3 méthodes d\'implémentation.',
      keywords: 'Navigators, outils IA, ICXN2025, IBDN2025, IEHWN2025, évaluation CX, maturité expérience client, évaluation automatique, RDC, Kinshasa',
      ogImage: defaultOgImage,
      canonical: `${baseUrl}/navigators`,
    },
    en: {
      title: 'Navigators - AI-Powered CX Assessment Tools | DRC Pioneers',
      description: 'Intelligent assessment tools to measure customer experience maturity. ICXN2025, IBDN2025 and IEHWN2025 - AI solutions adapted for businesses in DRC with 3 implementation methods.',
      keywords: 'Navigators, AI tools, ICXN2025, IBDN2025, IEHWN2025, CX assessment, customer experience maturity, automated evaluation, DRC, Kinshasa',
      ogImage: defaultOgImage,
      canonical: `${baseUrl}/navigators`,
    },
  },
  '/audit-consultation': {
    fr: {
      title: 'Audit & Consultation - Évaluation de l\'Expérience Client | DRC Pioneers',
      description: 'Audit complet selon standards ICXI : Audit CX, Excellence de Service (TISSE), Digital CX et Bien-être Employé. Processus en 4 étapes avec rapport détaillé et recommandations personnalisées.',
      keywords: 'audit expérience client, audit TISSE, audit digital CX, audit bien-être employé, consultation CX, processus audit 4 étapes, évaluation service client, audit ICXI, RDC',
      ogImage: defaultOgImage,
      canonical: `${baseUrl}/audit-consultation`,
    },
    en: {
      title: 'Audit & Consultation - Customer Experience Assessment | DRC Pioneers',
      description: 'Complete audit according to ICXI standards: CX Audit, Service Excellence (TISSE), Digital CX and Employee Well-being. 4-step process with detailed report and personalized recommendations.',
      keywords: 'customer experience audit, TISSE audit, digital CX audit, employee well-being audit, CX consultation, 4-step audit process, customer service assessment, ICXI audit, DRC',
      ogImage: defaultOgImage,
      canonical: `${baseUrl}/audit-consultation`,
    },
  },
  '/formations': {
    fr: {
      title: 'Formations Certifiées - Excellence de Service & Bien-Être | DRC Pioneers',
      description: 'Programmes de formation certifiés en expérience client et bien-être employé. Développez les compétences de votre équipe avec nos formations pratiques et mesurables.',
      keywords: 'formation expérience client, formation CX, customer experience training, certification formation, bien-être employé, employee well-being, formation ICXI, RDC, Kinshasa',
      ogImage: defaultOgImage,
      canonical: `${baseUrl}/formations`,
    },
    en: {
      title: 'Certified Training - Service Excellence & Employee Well-being | DRC Pioneers',
      description: 'Certified training programs in customer experience and employee well-being. Develop your team\'s skills with our practical and measurable training.',
      keywords: 'customer experience training, CX training, expérience client, training certification, employee well-being, bien-être employé, ICXI training, DRC, Kinshasa',
      ogImage: defaultOgImage,
      canonical: `${baseUrl}/formations`,
    },
  },
  '/certifications': {
    fr: {
      title: 'Certifications ICXI - Certifications Internationales | DRC Pioneers',
      description: 'Certifications ICXI reconnues mondialement. Obtenez les certifications qui positionnent votre organisation comme leader en excellence de service.',
      keywords: 'certification ICXI, certifications internationales, TISSE, ICXS, IDCXS, IEHWS, certification expérience client, CX certification, RDC, Kinshasa',
      ogImage: defaultOgImage,
      canonical: `${baseUrl}/certifications`,
    },
    en: {
      title: 'ICXI Certifications - International Certifications | DRC Pioneers',
      description: 'Globally recognized ICXI certifications. Get certifications that position your organization as a leader in service excellence.',
      keywords: 'ICXI certification, international certifications, TISSE, ICXS, IDCXS, IEHWS, customer experience certification, CX certification, DRC, Kinshasa',
      ogImage: defaultOgImage,
      canonical: `${baseUrl}/certifications`,
    },
  },
  '/certifications/icxs': {
    fr: {
      title: 'Certification ICXS - International Customer Experience Specialist | DRC Pioneers',
      description: 'Certification ICXS pour devenir spécialiste international en expérience client. Programme reconnu mondialement par l\'ICXI avec évaluation complète des compétences CX et certification professionnelle.',
      keywords: 'ICXS, certification ICXS, spécialiste expérience client, certification ICXI, International Customer Experience Specialist, compétences CX, RDC, Kinshasa',
      ogImage: defaultOgImage,
      canonical: `${baseUrl}/certifications/icxs`,
    },
    en: {
      title: 'ICXS Certification - International Customer Experience Specialist | DRC Pioneers',
      description: 'ICXS certification to become an international customer experience specialist. Globally recognized program by ICXI with comprehensive CX skills assessment and professional certification.',
      keywords: 'ICXS, ICXS certification, customer experience specialist, ICXI certification, International Customer Experience Specialist, CX skills, DRC, Kinshasa',
      ogImage: defaultOgImage,
      canonical: `${baseUrl}/certifications/icxs`,
    },
  },
  '/certifications/idcxs': {
    fr: {
      title: 'Certification IDCXS - International Digital Customer Experience Specialist | DRC Pioneers',
      description: 'Certification IDCXS pour devenir spécialiste en expérience client digitale. Programme certifié par l\'ICXI couvrant UX, transformation digitale et optimisation des parcours clients en ligne.',
      keywords: 'IDCXS, certification IDCXS, expérience client digitale, certification digitale, Digital Customer Experience, UX, transformation digitale, parcours client en ligne, RDC',
      ogImage: defaultOgImage,
      canonical: `${baseUrl}/certifications/idcxs`,
    },
    en: {
      title: 'IDCXS Certification - International Digital Customer Experience Specialist | DRC Pioneers',
      description: 'IDCXS certification to become a digital customer experience specialist. ICXI certified program covering UX, digital transformation and online customer journey optimization.',
      keywords: 'IDCXS, IDCXS certification, digital customer experience, digital certification, Digital Customer Experience, UX, digital transformation, online customer journey, DRC',
      ogImage: defaultOgImage,
      canonical: `${baseUrl}/certifications/idcxs`,
    },
  },
  '/certifications/iehws': {
    fr: {
      title: 'Certification IEHWS - International Employee Health & Well-being Specialist | DRC Pioneers',
      description: 'Certification IEHWS pour devenir spécialiste en santé et bien-être des employés. Programme certifié par l\'ICXI axé sur l\'engagement, la culture d\'entreprise et le bien-être au travail.',
      keywords: 'IEHWS, certification IEHWS, bien-être employé, santé au travail, Employee Health Well-being, engagement employé, culture d\'entreprise, RDC, Kinshasa',
      ogImage: defaultOgImage,
      canonical: `${baseUrl}/certifications/iehws`,
    },
    en: {
      title: 'IEHWS Certification - International Employee Health & Well-being Specialist | DRC Pioneers',
      description: 'IEHWS certification to become an employee health and well-being specialist. ICXI certified program focused on engagement, corporate culture and workplace well-being.',
      keywords: 'IEHWS, IEHWS certification, employee well-being, workplace health, Employee Health Well-being, employee engagement, corporate culture, DRC, Kinshasa',
      ogImage: defaultOgImage,
      canonical: `${baseUrl}/certifications/iehws`,
    },
  },
  '/certifications/tisse': {
    fr: {
      title: 'Certification TISSE - Norme Internationale d\'Excellence de Service | DRC Pioneers',
      description: 'Certification TISSE (The International Service Standard of Excellence). Norme internationale avec 8 domaines d\'excellence pour transformer votre service client selon les standards ICXI reconnus mondialement.',
      keywords: 'TISSE, certification TISSE, norme excellence service, standard international service, 8 domaines excellence, ICXI, service client, RDC, Kinshasa',
      ogImage: defaultOgImage,
      canonical: `${baseUrl}/certifications/tisse`,
    },
    en: {
      title: 'TISSE Certification - International Service Standard of Excellence | DRC Pioneers',
      description: 'TISSE certification (The International Service Standard of Excellence). International standard with 8 excellence domains to transform your customer service according to globally recognized ICXI standards.',
      keywords: 'TISSE, TISSE certification, service excellence standard, international service standard, 8 excellence domains, ICXI, customer service, DRC, Kinshasa',
      ogImage: defaultOgImage,
      canonical: `${baseUrl}/certifications/tisse`,
    },
  },
  '/blog': {
    fr: {
      title: 'Blog - Actualités & Conseils Expérience Client | DRC Pioneers',
      description: 'Découvrez nos articles sur l\'expérience client, les certifications ICXI, les meilleures pratiques et les actualités du secteur.',
      keywords: 'blog expérience client, articles CX, customer experience blog, actualités ICXI, conseils service client, best practices CX, RDC, Kinshasa',
      ogImage: defaultOgImage,
      canonical: `${baseUrl}/blog`,
    },
    en: {
      title: 'Blog - Customer Experience News & Tips | DRC Pioneers',
      description: 'Discover our articles on customer experience, ICXI certifications, best practices and industry news.',
      keywords: 'customer experience blog, CX articles, blog expérience client, ICXI news, customer service tips, CX best practices, DRC, Kinshasa',
      ogImage: defaultOgImage,
      canonical: `${baseUrl}/blog`,
    },
  },
  '/contact': {
    fr: {
      title: 'Contact - Prendre Rendez-vous | DRC Pioneers',
      description: 'Contactez DRC Pioneers pour vos besoins en certification, formation ou audit. Nous sommes basés à Kinshasa, Lubumbashi et Kolwezi.',
      keywords: 'contact DRC Pioneers, rendez-vous, Kinshasa, Lubumbashi, Kolwezi, consultation, RDC, Congo',
      ogImage: defaultOgImage,
      canonical: `${baseUrl}/contact`,
    },
    en: {
      title: 'Contact - Schedule an Appointment | DRC Pioneers',
      description: 'Contact DRC Pioneers for your certification, training or audit needs. We are based in Kinshasa, Lubumbashi and Kolwezi.',
      keywords: 'contact DRC Pioneers, appointment, Kinshasa, Lubumbashi, Kolwezi, consultation, DRC, Congo',
      ogImage: defaultOgImage,
      canonical: `${baseUrl}/contact`,
    },
  },
  '*': {
    fr: {
      title: 'Page non trouvée - 404 | DRC Pioneers',
      description: 'La page que vous recherchez n\'existe pas ou a été déplacée.',
      keywords: '404, page non trouvée, erreur',
      ogImage: defaultOgImage,
      canonical: `${baseUrl}/404`,
      noindex: true,
    },
    en: {
      title: 'Page Not Found - 404 | DRC Pioneers',
      description: 'The page you are looking for does not exist or has been moved.',
      keywords: '404, page not found, error',
      ogImage: defaultOgImage,
      canonical: `${baseUrl}/404`,
      noindex: true,
    },
  },
};

export const defaultSEO: SEOConfig = {
  title: 'DRC Pioneers - Improving Customer Experience in DRC',
  description: 'DRC Pioneers is a company that provides services to improve customer experience in DRC.',
  ogImage: defaultOgImage,
  ogType: 'website',
  canonical: baseUrl,
};
