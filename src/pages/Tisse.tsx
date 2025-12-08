import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { 
  Award, 
  Target, 
  TrendingUp, 
  Users, 
  Heart, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  Globe,
  Building2,
  Phone,
  Mail,
  Clock,
  DollarSign,
  BarChart3,
  Shield,
  Lightbulb,
  Zap,
  CheckCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import certificationHero from '@/assets/images/certification.png';

const Tisse = () => {
  const { t } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.hash]);

  const domainIcons = [
    Target,
    Heart,
    Sparkles,
    Users,
    BarChart3,
    TrendingUp,
    Award,
    Lightbulb
  ];

  const domains = [
    'customer_knowledge',
    'customer_experience',
    'service_design',
    'customer_satisfaction',
    'performance_management',
    'staff_development',
    'service_culture',
    'continuous_improvement'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section 
        className="text-white overflow-hidden relative"
        style={{
          backgroundImage: 'linear-gradient(rgba(13, 27, 62, 0.9), rgba(13, 27, 62, 0.8)), url("' + certificationHero + '")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="mx-auto px-4 sm:px-6 lg:px-16 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              {/* Badge */}
              <div 
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6"
                data-aos="fade-up"
                data-aos-duration="600"
              >
                <Award className="w-5 h-5 text-yellow-400" />
                <span className="text-sm font-medium">{t('tisse_page.hero.badge')}</span>
              </div>

              {/* Titre principal */}
              <h1 
                className="text-5xl font-bold mb-6"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200"
              >
                {t('tisse_page.hero.title')}
                <span className="block text-yellow-400">{t('tisse_page.hero.subtitle')}</span>
              </h1>
              
              {/* Description */}
              <p 
                className="text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto text-lg"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="400"
              >
                {t('tisse_page.hero.description')}
              </p>

              {/* Points clés */}
              <div 
                className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto mb-8"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="600"
              >
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-white/90 text-sm">{t('tisse_page.hero.key_points.definition')}</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-white/90 text-sm">{t('tisse_page.hero.key_points.global_reference')}</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-white/90 text-sm">{t('tisse_page.hero.key_points.culture')}</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-white/90 text-sm">{t('tisse_page.hero.key_points.results')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Definition Section */}
      <section className="py-20 bg-brand-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-blue mb-6">
              {t('tisse_page.definition.title')}
            </h2>
            <p className="text-xl text-brand-blue/70 max-w-3xl mx-auto mb-8">
              {t('tisse_page.definition.subtitle')}
            </p>
            <p className="text-lg text-brand-blue/80 max-w-4xl mx-auto">
              {t('tisse_page.definition.main_description')}
            </p>
          </div>

          {/* Definition Points */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {Object.keys(t('tisse_page.definition.points', { returnObjects: true }) as object).map((key, index) => {
              const point = t(`tisse_page.definition.points.${key}`, { returnObjects: true }) as any;
              const icons = [Globe, Award, TrendingUp, Heart];
              const Icon = icons[index % icons.length];
              
              return (
                <Card key={key} className="border-2 border-brand-blue/10 hover:border-yellow-500 transition-all duration-300 hover:shadow-xl">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-brand-blue mb-3">
                          {point.title}
                        </h3>
                        <p className="text-brand-blue/70 leading-relaxed">
                          {point.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {Object.keys(t('tisse_page.definition.stats', { returnObjects: true }) as object).map((key) => {
              const stat = t(`tisse_page.definition.stats.${key}`, { returnObjects: true }) as any;
              return (
                <div key={key} className="bg-white p-6 rounded-lg text-center shadow-lg border-2 border-transparent hover:border-yellow-500 transition-all">
                  <div className="text-4xl font-bold text-yellow-600 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-brand-blue/70 font-medium">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8 Domains Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-blue mb-6">
              {t('tisse_page.eight_domains.title')}
            </h2>
            <p className="text-xl text-brand-blue/70 max-w-3xl mx-auto mb-4">
              {t('tisse_page.eight_domains.subtitle')}
            </p>
            <p className="text-lg text-brand-blue/80 max-w-4xl mx-auto">
              {t('tisse_page.eight_domains.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {domains.map((domain, index) => {
              const domainData = t(`tisse_page.eight_domains.domains.${domain}`, { returnObjects: true }) as any;
              const Icon = domainIcons[index];
              const keyElements = domainData.key_elements || [];
              
              return (
                <Card 
                  key={domain} 
                  className="group hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-yellow-500 bg-gradient-to-br from-white to-brand-gray"
                >
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-4">
                        <Badge className="bg-brand-blue text-yellow-500 text-lg px-3 py-1">
                          {domainData.number}
                        </Badge>
                        <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-brand-blue mb-3 leading-tight">
                        {domainData.title}
                      </h3>
                      
                      <p className="text-brand-blue/70 mb-4 leading-relaxed">
                        {domainData.description}
                      </p>
                    </div>
                    
                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-brand-blue/80 mb-2">
                        Éléments Clés :
                      </p>
                      {keyElements.map((element: string, idx: number) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <CheckCircle2 className="w-4 h-4 text-yellow-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-brand-blue/70">{element}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Strategic Value Section */}
      <section className="py-20 bg-brand-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-blue mb-6">
              {t('tisse_page.strategic_value.title')}
            </h2>
            <p className="text-xl text-brand-blue/70 max-w-3xl mx-auto mb-4">
              {t('tisse_page.strategic_value.subtitle')}
            </p>
            <p className="text-lg text-brand-blue/80 max-w-4xl mx-auto">
              {t('tisse_page.strategic_value.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.keys(t('tisse_page.strategic_value.values', { returnObjects: true }) as object).map((key, index) => {
              const value = t(`tisse_page.strategic_value.values.${key}`, { returnObjects: true }) as any;
              const icons = [Zap, Shield, Globe, CheckCircle2];
              const Icon = icons[index % icons.length];
              const benefits = value.benefits || [];
              
              return (
                <Card key={key} className="border-2 border-transparent hover:border-yellow-500 transition-all duration-300 hover:shadow-xl">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4 mb-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-brand-blue to-brand-blue-light rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-7 h-7 text-yellow-500" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-brand-blue mb-3">
                          {value.title}
                        </h3>
                        <p className="text-brand-blue/70 leading-relaxed mb-4">
                          {value.description}
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-sm font-semibold text-brand-blue mb-3">
                        Bénéfices Clés :
                      </p>
                      <ul className="space-y-2">
                        {benefits.map((benefit: string, idx: number) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <CheckCircle2 className="w-4 h-4 text-yellow-600 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-brand-blue/70">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Integration Diagram */}
          <div className="mt-16 bg-white p-8 rounded-lg shadow-xl border-2 border-yellow-500/20">
            <h3 className="text-2xl font-bold text-brand-blue text-center mb-8">
              {t('tisse_page.strategic_value.integration_diagram.title')}
            </h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-lg text-center flex-1 max-w-xs">
                <Award className="w-12 h-12 mx-auto mb-3" />
                <p className="font-semibold">{t('tisse_page.strategic_value.integration_diagram.iso_9001')}</p>
              </div>
              <div className="text-4xl text-yellow-600 font-bold">+</div>
              <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 text-white p-6 rounded-lg text-center flex-1 max-w-xs">
                <Sparkles className="w-12 h-12 mx-auto mb-3" />
                <p className="font-semibold">{t('tisse_page.strategic_value.integration_diagram.tisse')}</p>
              </div>
              <div className="text-4xl text-yellow-600 font-bold">=</div>
              <div className="bg-gradient-to-br from-brand-blue to-brand-blue-light text-white p-6 rounded-lg text-center flex-1 max-w-xs">
                <CheckCircle2 className="w-12 h-12 mx-auto mb-3" />
                <p className="font-semibold">{t('tisse_page.strategic_value.integration_diagram.result')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emerging Markets Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-blue mb-6">
              {t('tisse_page.emerging_markets.title')}
            </h2>
            <p className="text-xl text-brand-blue/70 max-w-3xl mx-auto mb-4">
              {t('tisse_page.emerging_markets.subtitle')}
            </p>
            <p className="text-lg text-brand-blue/80 max-w-4xl mx-auto">
              {t('tisse_page.emerging_markets.description')}
            </p>
          </div>

          {/* Challenges */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-brand-blue text-center mb-8">
              {t('tisse_page.emerging_markets.challenges.title')}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {Object.keys(t('tisse_page.emerging_markets.challenges', { returnObjects: true }) as object)
                .filter(key => key !== 'title')
                .map((key) => {
                  const challenge = t(`tisse_page.emerging_markets.challenges.${key}`, { returnObjects: true }) as any;
                  return (
                    <div key={key} className="bg-red-50 border-2 border-red-200 p-6 rounded-lg">
                      <h4 className="text-lg font-bold text-red-900 mb-2">
                        {challenge.title}
                      </h4>
                      <p className="text-red-700 text-sm">
                        {challenge.description}
                      </p>
                    </div>
                  );
                })}
            </div>
          </div>

          {/* TISSE Solutions */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-brand-blue text-center mb-8">
              {t('tisse_page.emerging_markets.tisse_solutions.title')}
            </h3>
            <div className="space-y-8">
              {Object.keys(t('tisse_page.emerging_markets.tisse_solutions', { returnObjects: true }) as object)
                .filter(key => key !== 'title')
                .map((key, index) => {
                  const solution = t(`tisse_page.emerging_markets.tisse_solutions.${key}`, { returnObjects: true }) as any;
                  
                  if (key === 'sectoral_relevance') {
                    return (
                      <Card key={key} className="border-2 border-yellow-500/30 bg-gradient-to-br from-white to-yellow-50">
                        <CardContent className="p-8">
                          <h4 className="text-2xl font-bold text-brand-blue mb-3">
                            {solution.title}
                          </h4>
                          <p className="text-brand-blue/70 mb-6">
                            {solution.description}
                          </p>
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {Object.keys(solution.sectors).map((sectorKey) => {
                              const sector = solution.sectors[sectorKey];
                              return (
                                <div key={sectorKey} className="bg-white p-4 rounded-lg border border-yellow-500/20">
                                  <Building2 className="w-8 h-8 text-yellow-600 mb-2" />
                                  <h5 className="font-bold text-brand-blue mb-1">{sector.title}</h5>
                                  <p className="text-sm text-brand-blue/70">{sector.description}</p>
                                </div>
                              );
                            })}
                          </div>
                        </CardContent>
                      </Card>
                    );
                  }
                  
                  const benefits = solution.benefits || [];
                  return (
                    <Card key={key} className="border-2 border-green-500/30 bg-gradient-to-br from-white to-green-50">
                      <CardContent className="p-8">
                        <h4 className="text-2xl font-bold text-brand-blue mb-3">
                          {solution.title}
                        </h4>
                        <p className="text-brand-blue/70 mb-4">
                          {solution.description}
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {benefits.map((benefit: string, idx: number) => (
                            <div key={idx} className="flex items-start space-x-2 bg-white p-3 rounded-lg">
                              <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-brand-blue/70">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
            </div>
          </div>

          {/* Success Stories */}
          {/* <div className="bg-brand-gray p-8 rounded-lg">
            <h3 className="text-3xl font-bold text-brand-blue text-center mb-4">
              {t('tisse_page.emerging_markets.success_stories.title')}
            </h3>
            <p className="text-center text-brand-blue/70 mb-8">
              {t('tisse_page.emerging_markets.success_stories.description')}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {['bank', 'telecom', 'hospital'].map((type) => (
                <Card key={type} className="bg-white">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <div className="text-6xl text-yellow-600 mb-4">"</div>
                      <p className="text-brand-blue/80 italic mb-4">
                        {t(`tisse_page.emerging_markets.success_stories.${type}_quote`)}
                      </p>
                    </div>
                    <div className="border-t pt-4">
                      <p className="text-sm font-semibold text-brand-blue">
                        {t(`tisse_page.emerging_markets.success_stories.${type}_author`)}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div> */}
        </div>
      </section>

      {/* Certification Process Section */}
      <section className="py-20 bg-brand-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-blue mb-6">
              {t('tisse_page.certification_process.title')}
            </h2>
            <p className="text-xl text-brand-blue/70 max-w-3xl mx-auto mb-4">
              {t('tisse_page.certification_process.subtitle')}
            </p>
            <p className="text-lg text-brand-blue/80 max-w-4xl mx-auto">
              {t('tisse_page.certification_process.description')}
            </p>
          </div>

          {/* Process Steps */}
          <div className="relative mb-16">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-yellow-500 via-yellow-500 to-yellow-500" style={{ top: '6rem' }}></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 relative">
              {Object.keys(t('tisse_page.certification_process.steps', { returnObjects: true }) as object).map((key, index) => {
                const step = t(`tisse_page.certification_process.steps.${key}`, { returnObjects: true }) as any;
                const isLast = index === 4;
                
                return (
                  <div key={key} className="relative">
                    <Card className={`h-full border-2 ${isLast ? 'border-green-500 bg-gradient-to-br from-white to-green-50' : 'border-yellow-500/30 bg-white'}`}>
                      <CardContent className="p-6 text-center">
                        <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-2xl font-bold ${
                          isLast ? 'bg-green-500 text-white' : 'bg-yellow-500 text-white'
                        }`}>
                          {step.number}
                        </div>
                        <h4 className="text-lg font-bold text-brand-blue mb-2">
                          {step.title}
                        </h4>
                        <p className="text-sm text-brand-blue/70 mb-3">
                          {step.description}
                        </p>
                        <Badge className={isLast ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}>
                          <Clock className="w-3 h-3 mr-1" />
                          {step.duration}
                        </Badge>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="text-center mb-12">
            <Badge className="bg-brand-blue text-yellow-500 text-lg px-6 py-2">
              {t('tisse_page.certification_process.total_duration')}
            </Badge>
          </div>

          {/* Investment & ROI */}
          <Card className="border-2 border-yellow-500 bg-gradient-to-br from-white to-yellow-50">
            <CardContent className="p-8">
              <h3 className="text-3xl font-bold text-brand-blue text-center mb-4">
                {t('tisse_page.certification_process.investment.title')}
              </h3>
              <p className="text-center text-brand-blue/70 mb-8">
                {t('tisse_page.certification_process.investment.description')}
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {Object.keys(t('tisse_page.certification_process.investment.roi_stats', { returnObjects: true }) as object).map((key) => {
                  const stat = t(`tisse_page.certification_process.investment.roi_stats.${key}`, { returnObjects: true }) as any;
                  return (
                    <div key={key} className="bg-white p-6 rounded-lg text-center shadow-md">
                      <DollarSign className="w-10 h-10 text-yellow-600 mx-auto mb-2" />
                      <div className="text-3xl font-bold text-brand-blue mb-2">
                        {stat.value}
                      </div>
                      <div className="text-sm text-brand-blue/70">
                        {stat.label}
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-blue mb-6">
              {t('tisse_page.faq.title')}
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {Object.keys(t('tisse_page.faq.questions', { returnObjects: true }) as object).map((key, index) => {
              const faq = t(`tisse_page.faq.questions.${key}`, { returnObjects: true }) as any;
              return (
                <AccordionItem key={key} value={`item-${index}`} className="bg-brand-gray border-2 border-transparent hover:border-yellow-500 rounded-lg px-6">
                  <AccordionTrigger className="text-left text-lg font-semibold text-brand-blue hover:text-yellow-600">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-brand-blue/70 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-brand-blue via-brand-blue-light to-brand-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t('tisse_page.cta.title')}
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              {t('tisse_page.cta.description')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              
              <Link
                        to="/audit-consultation#audit-request-form"
                        className="inline-flex bg-yellow-500 hover:bg-yellow-600 text-brand-blue px-6 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors duration-300"
                      >
                        <span>{t('cta_audit.button')}</span>
                        <ArrowRight className="w-5 h-5" />
                      </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tisse;
