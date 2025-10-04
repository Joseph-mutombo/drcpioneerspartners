import { useTranslation } from 'react-i18next';
import { 
  BookOpen, 
  Clock, 
  Users, 
  CheckCircle, 
  Star,
  ArrowRight,
  Award,
  Target,
  TrendingUp,
  Monitor
} from 'lucide-react';

const FormationPrograms = () => {
  const { t } = useTranslation();

  const programs = [
    {
      id: 'cxop',
      code: 'CXOP',
      name: t('formations_page.programs.cxop.name'),
      description: t('formations_page.programs.cxop.description'),
      icon: BookOpen,
      color: 'bg-blue-100 text-blue-600',
      duration: t('formations_page.programs.cxop.duration'),
      level: t('formations_page.programs.cxop.level'),
      target: t('formations_page.programs.cxop.target'),
      benefits: [
        t('formations_page.programs.cxop.benefits.understand_cx'),
        t('formations_page.programs.cxop.benefits.master_tools'),
        t('formations_page.programs.cxop.benefits.develop_culture'),
        t('formations_page.programs.cxop.benefits.international_certification')
      ],
      status: 'coming-soon',
      price: t('formations_page.programs.cxop.price')
    },
    {
      id: 'cxmp',
      code: 'CXMP',
      name: t('formations_page.programs.cxmp.name'),
      description: t('formations_page.programs.cxmp.description'),
      icon: Target,
      color: 'bg-green-100 text-green-600',
      duration: t('formations_page.programs.cxmp.duration'),
      level: t('formations_page.programs.cxmp.level'),
      target: t('formations_page.programs.cxmp.target'),
      benefits: [
        t('formations_page.programs.cxmp.benefits.organizational_strategy'),
        t('formations_page.programs.cxmp.benefits.team_management'),
        t('formations_page.programs.cxmp.benefits.process_optimization'),
        t('formations_page.programs.cxmp.benefits.advanced_metrics')
      ],
      status: 'coming-soon',
      price: t('formations_page.programs.cxmp.price')
    },
    {
      id: 'cxlp',
      code: 'CXLP',
      name: t('formations_page.programs.cxlp.name'),
      description: t('formations_page.programs.cxlp.description'),
      icon: Award,
      color: 'bg-purple-100 text-purple-600',
      duration: t('formations_page.programs.cxlp.duration'),
      level: t('formations_page.programs.cxlp.level'),
      target: t('formations_page.programs.cxlp.target'),
      benefits: [
        t('formations_page.programs.cxlp.benefits.transformational_leadership'),
        t('formations_page.programs.cxlp.benefits.strategic_vision'),
        t('formations_page.programs.cxlp.benefits.change_management'),
        t('formations_page.programs.cxlp.benefits.innovation_disruption')
      ],
      status: 'coming-soon',
      price: t('formations_page.programs.cxlp.price')
    },
    {
      id: 'msc',
      code: 'MSC',
      name: t('formations_page.programs.msc.name'),
      description: t('formations_page.programs.msc.description'),
      icon: Star,
      color: 'bg-orange-100 text-orange-600',
      duration: t('formations_page.programs.msc.duration'),
      level: t('formations_page.programs.msc.level'),
      target: t('formations_page.programs.msc.target'),
      benefits: [
        t('formations_page.programs.msc.benefits.current_topics'),
        t('formations_page.programs.msc.benefits.emerging_technologies'),
        t('formations_page.programs.msc.benefits.advanced_case_studies'),
        t('formations_page.programs.msc.benefits.expert_network')
      ],
      status: 'coming-soon',
      price: t('formations_page.programs.msc.price')
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'coming-soon':
        return (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
            <Clock className="w-3 h-3 mr-1" />
            {t('formations_page.programs.status.coming_soon')}
          </span>
        );
      case 'available':
        return (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
            <CheckCircle className="w-3 h-3 mr-1" />
            {t('formations_page.programs.status.available')}
          </span>
        );
      default:
        return null;
    }
  };

  const getLevelColor = (level: string) => {
    // Comparer avec les valeurs traduites
    if (level === t('formations_page.programs.levels.fundamental')) {
      return 'bg-blue-100 text-blue-800';
    } else if (level === t('formations_page.programs.levels.advanced')) {
      return 'bg-green-100 text-green-800';
    } else if (level === t('formations_page.programs.levels.expert')) {
      return 'bg-purple-100 text-purple-800';
    } else if (level === t('formations_page.programs.levels.specialized')) {
      return 'bg-orange-100 text-orange-800';
    } else {
      return 'bg-gray-100 text-gray-800';
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
            {t('formations_page.programs.title')}
          </h2>
          <p 
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="200"
          >
            {t('formations_page.programs.description')}
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
                        {program.code}
                      </h3>
                      {getStatusBadge(program.status)}
                    </div>
                    <h4 className="text-lg font-semibold text-gray-700 mb-2">
                      {program.name}
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
                    <span><strong>{t('formations_page.programs.labels.duration')}:</strong> {program.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Target className="w-4 h-4 text-gray-400" />
                    <span><strong>{t('formations_page.programs.labels.level')}:</strong> {program.level}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Users className="w-4 h-4 text-gray-400" />
                    <span><strong>{t('formations_page.programs.labels.target')}:</strong> {program.target}</span>
                  </div>
                </div>

                {/* Niveau */}
                <div className="mb-6">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getLevelColor(program.level)}`}>
                    {program.level}
                  </span>
                </div>

                {/* Bénéfices */}
                <div className="mb-6">
                  <h5 className="text-lg font-semibold text-gray-900 mb-4">{t('formations_page.programs.what_you_will_learn')}:</h5>
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
                      {program.status === 'coming-soon' ? t('formations_page.programs.coming_soon') : t('formations_page.programs.register')}
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
            {t('formations_page.programs.finalization.title')}
          </h3>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            {t('formations_page.programs.finalization.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => window.location.href = '/contact'} className="px-8 py-4 bg-yellow-600 text-white font-semibold rounded-lg hover:bg-yellow-700 transition-colors duration-200">
              {t('formations_page.programs.finalization.contact_us')}
            </button>
            <button onClick={() => window.location.href = '/contact'} className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-brand-blue transition-colors duration-200">
              {t('formations_page.programs.finalization.get_prospectus')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormationPrograms;
