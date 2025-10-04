import { useTranslation } from 'react-i18next';
import { 
  Award, 
  Clock, 
  Users, 
  CheckCircle, 
  Star,
  ArrowRight,
  Globe,
  Shield,
  Target,
  Heart
} from 'lucide-react';

const CertificationPrograms = () => {
  const { t } = useTranslation();

  const programs = [
    {
      id: 'tisse',
      name: 'TISSE',
      fullName: t('certifications_page.programs.tisse.full_name'),
      description: t('certifications_page.programs.tisse.description'),
      icon: Star,
      color: 'bg-yellow-100 text-yellow-600',
      duration: t('certifications_page.programs.tisse.duration'),
      level: t('certifications_page.programs.tisse.level'),
      target: t('certifications_page.programs.tisse.target'),
      benefits: [
        t('certifications_page.programs.tisse.benefits.client_satisfaction'),
        t('certifications_page.programs.tisse.benefits.process_standardization'),
        t('certifications_page.programs.tisse.benefits.international_recognition'),
        t('certifications_page.programs.tisse.benefits.professional_network')
      ],
      status: 'coming-soon',
      price: t('certifications_page.programs.tisse.price')
    },
    {
      id: 'icxs',
      name: 'ICXS',
      fullName: t('certifications_page.programs.icxs.full_name'),
      description: t('certifications_page.programs.icxs.description'),
      icon: Users,
      color: 'bg-blue-100 text-blue-600',
      duration: t('certifications_page.programs.icxs.duration'),
      level: t('certifications_page.programs.icxs.level'),
      target: t('certifications_page.programs.icxs.target'),
      benefits: [
        t('certifications_page.programs.icxs.benefits.cx_optimization'),
        t('certifications_page.programs.icxs.benefits.metrics_analysis'),
        t('certifications_page.programs.icxs.benefits.loyalty_strategies'),
        t('certifications_page.programs.icxs.benefits.employer_recognition')
      ],
      status: 'coming-soon',
      price: t('certifications_page.programs.icxs.price')
    },
    {
      id: 'idcxs',
      name: 'IDCXS',
      fullName: t('certifications_page.programs.idcxs.full_name'),
      description: t('certifications_page.programs.idcxs.description'),
      icon: Globe,
      color: 'bg-green-100 text-green-600',
      duration: t('certifications_page.programs.idcxs.duration'),
      level: t('certifications_page.programs.idcxs.level'),
      target: t('certifications_page.programs.idcxs.target'),
      benefits: [
        t('certifications_page.programs.idcxs.benefits.digital_mastery'),
        t('certifications_page.programs.idcxs.benefits.ux_design'),
        t('certifications_page.programs.idcxs.benefits.trend_integration'),
        t('certifications_page.programs.idcxs.benefits.tech_certification')
      ],
      status: 'coming-soon',
      price: t('certifications_page.programs.idcxs.price')
    },
    {
      id: 'iehws',
      name: 'IEHWS',
      fullName: t('certifications_page.programs.iehws.full_name'),
      description: t('certifications_page.programs.iehws.description'),
      icon: Heart,
      color: 'bg-red-100 text-red-600',
      duration: t('certifications_page.programs.iehws.duration'),
      level: t('certifications_page.programs.iehws.level'),
      target: t('certifications_page.programs.iehws.target'),
      benefits: [
        t('certifications_page.programs.iehws.benefits.workplace_wellbeing'),
        t('certifications_page.programs.iehws.benefits.turnover_reduction'),
        t('certifications_page.programs.iehws.benefits.productivity_increase'),
        t('certifications_page.programs.iehws.benefits.positive_culture')
      ],
      status: 'coming-soon',
      price: t('certifications_page.programs.iehws.price')
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'coming-soon':
        return (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
            <Clock className="w-3 h-3 mr-1" />
            {t('certifications_page.programs.status.coming_soon')}
          </span>
        );
      case 'available':
        return (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
            <CheckCircle className="w-3 h-3 mr-1" />
            {t('certifications_page.programs.status.available')}
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        {/* En-tête */}
        <div className="text-center mb-16">
          <h2 
            className="text-4xl font-bold text-gray-900 mb-6"
            data-aos="fade-up"
            data-aos-duration="600"
          >
            {t('certifications_page.programs.title')}
          </h2>
          <p 
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="200"
          >
            {t('certifications_page.programs.description')}
          </p>
        </div>

        {/* Grille des programmes */}
        <div className="grid lg:grid-cols-2 gap-8">
          {programs.map((program, index) => {
            const IconComponent = program.icon;
            return (
              <div
                key={program.id}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 group"
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay={index * 100}
              >
                {/* En-tête du programme */}
                <div className="flex items-start gap-4 mb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl ${program.color} flex-shrink-0`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-brand-blue transition-colors duration-200">
                        {program.name}
                      </h3>
                      {getStatusBadge(program.status)}
                    </div>
                    <h4 className="text-lg font-semibold text-gray-700 mb-2">
                      {program.fullName}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {program.description}
                    </p>
                  </div>
                </div>

                {/* Informations du programme */}
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <span><strong>Durée:</strong> {program.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Target className="w-4 h-4 text-gray-400" />
                    <span><strong>Niveau:</strong> {program.level}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Users className="w-4 h-4 text-gray-400" />
                    <span><strong>Public:</strong> {program.target}</span>
                  </div>
                </div>

                {/* Bénéfices */}
                <div className="mb-6">
                  <h5 className="text-lg font-semibold text-gray-900 mb-4">Bénéfices de la certification :</h5>
                  <ul className="space-y-2">
                    {program.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Prix et CTA */}
                <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                  <div className="text-lg font-semibold text-brand-blue">
                    {program.price}
                  </div>
                  <button 
                    disabled={program.status === 'coming-soon'}
                    className={`group/btn flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                      program.status === 'coming-soon'
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'bg-brand-blue text-white hover:bg-yellow-600 hover:scale-105'
                    }`}
                  >
                    <span>
                      {program.status === 'coming-soon' ? t('certifications_page.programs.status.coming_soon') : t('certifications_page.programs.register')}
                    </span>
                    {program.status !== 'coming-soon' && (
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section d'information */}
        <div 
          className="mt-16 bg-gradient-to-r from-brand-blue to-blue-600 rounded-2xl p-8 md:p-12 text-white text-center"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="400"
        >
          <h3 className="text-3xl font-bold mb-6">
            {t('certifications_page.programs.finalization.title')}
          </h3>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            {t('certifications_page.programs.finalization.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-yellow-600 text-white font-semibold rounded-lg hover:bg-yellow-700 transition-colors duration-200">
              {t('certifications_page.programs.finalization.waitlist')}
            </button>
            <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-brand-blue transition-colors duration-200">
              {t('certifications_page.programs.finalization.download_prospectus')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificationPrograms;
