
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Services = () => {
  const { t } = useTranslation();

  const services = [
    
  ];

  return (
    <div>
      <div className="bg-brand-blue text-white">
        <div className="container mx-auto py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">{t('services_page.title')}</h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">{t('services_page.subtitle')}</p>
          <div className="mt-8">
            {/* <Button asChild size="lg" variant="secondary">
              <Link to="/contact">{t('services_page.cta_contact_us')}</Link>
            </Button> */}
          </div>
        </div>
      </div>
      
      <div className="container mx-auto py-16">
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
                <Card key={index} className="flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
                    <CardHeader>
                        <CardTitle>{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <p className="text-gray-600">{service.description}</p>
                    </CardContent>
                    <div className="p-6 pt-0 mt-auto">
                        <Button asChild variant="default">
                            <Link to={service.path} className="w-full">
                                {t('services_overview.cta')} <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                </Card>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
