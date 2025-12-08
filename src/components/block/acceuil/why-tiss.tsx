import { useTranslation } from 'react-i18next';
import { BarChart, Bot, ChartNoAxesCombined, ChartNoAxesGantt, Code, Database, Eye, FileText, Globe, Link, ShieldCheck } from "lucide-react";
import SectionTitle from "@/components/sectionTitle";
import ServiceCard from "@/components/serviceCard";
import { Button } from "@/components/ui/button";

export const WhyTiss = () => {
  const { t } = useTranslation();
  
  return (
    <>
      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto px-4 sm:px-6 lg:px-16">
          <SectionTitle
            title={t('why_tiss.title')}
            subtitle={t('why_tiss.subtitle')}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            <ServiceCard 
              icon={<Globe className=" w-6 h-6 text-white" />} 
              title={t('why_tiss.alignment.title')}
              description={t('why_tiss.alignment.description')}
              link="/certifications/tisse"
                color="from-yellow-500 to-yellow-600"
            />
            <ServiceCard 
              icon={<ShieldCheck className="w-6 h-6 text-white" />}
              title={t('why_tiss.credibility.title')}
              description={t('why_tiss.credibility.description')}
              link="/certifications/tisse"
              color="from-brand-blue to-brand-blue-light"
            />
            <ServiceCard 
              icon={<ChartNoAxesCombined className="w-6 h-6 text-white" />}
              title={t('why_tiss.results.title')}
              description={t('why_tiss.results.description')}
              link="/certifications/tisse"
              color="from-yellow-500 to-yellow-600"
            />
          </div>

        </div>
      </section>
    </>
  );
};