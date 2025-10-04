import { useTranslation } from 'react-i18next';
import { 
  TrendingUp, 
  Shield, 
  Users, 
  Target, 
  CheckCircle, 
  Award,
  BarChart3,
  Lightbulb,
  Clock,
  DollarSign
} from 'lucide-react';

const AuditBenefits = () => {
  const { t } = useTranslation();

  const benefits = [
    {
      id: 'compliance',
      title: t('audit_page.benefits.compliance.title'),
      description: t('audit_page.benefits.compliance.description'),
      icon: Shield,
      color: 'bg-blue-100 text-blue-600',
      stats: t('audit_page.benefits.compliance.stats'),
      details: [
        t('audit_page.benefits.compliance.details.requirements_identification'),
        t('audit_page.benefits.compliance.details.current_compliance_verification'),
        t('audit_page.benefits.compliance.details.action_plan'),
        t('audit_page.benefits.compliance.details.follow_up')
      ]
    },
    {
      id: 'efficiency',
      title: t('audit_page.benefits.efficiency.title'),
      description: t('audit_page.benefits.efficiency.description'),
      icon: TrendingUp,
      color: 'bg-green-100 text-green-600',
      stats: t('audit_page.benefits.efficiency.stats'),
      details: [
        t('audit_page.benefits.efficiency.details.process_analysis'),
        t('audit_page.benefits.efficiency.details.bottleneck_identification'),
        t('audit_page.benefits.efficiency.details.optimization_recommendations'),
        t('audit_page.benefits.efficiency.details.performance_measurement')
      ]
    },
    {
      id: 'quality',
      title: t('audit_page.benefits.quality.title'),
      description: t('audit_page.benefits.quality.description'),
      icon: Award,
      color: 'bg-yellow-100 text-yellow-600',
      stats: t('audit_page.benefits.quality.stats'),
      details: [
        t('audit_page.benefits.quality.details.quality_systems'),
        t('audit_page.benefits.quality.details.staff_training'),
        t('audit_page.benefits.quality.details.internal_controls'),
        t('audit_page.benefits.quality.details.continuous_improvement')
      ]
    },
    {
      id: 'risk-management',
      title: t('audit_page.benefits.risk_management.title'),
      description: t('audit_page.benefits.risk_management.description'),
      icon: Target,
      color: 'bg-red-100 text-red-600',
      stats: t('audit_page.benefits.risk_management.stats'),
      details: [
        t('audit_page.benefits.risk_management.details.risk_mapping'),
        t('audit_page.benefits.risk_management.details.probability_assessment'),
        t('audit_page.benefits.risk_management.details.mitigation_plan'),
        t('audit_page.benefits.risk_management.details.continuous_monitoring')
      ]
    },
    {
      id: 'team-development',
      title: t('audit_page.benefits.team_development.title'),
      description: t('audit_page.benefits.team_development.description'),
      icon: Users,
      color: 'bg-purple-100 text-purple-600',
      stats: t('audit_page.benefits.team_development.stats'),
      details: [
        t('audit_page.benefits.team_development.details.best_practices_training'),
        t('audit_page.benefits.team_development.details.quality_awareness'),
        t('audit_page.benefits.team_development.details.skill_transfer'),
        t('audit_page.benefits.team_development.details.follow_up')
      ]
    },
    {
      id: 'competitive-advantage',
      title: t('audit_page.benefits.competitive_advantage.title'),
      description: t('audit_page.benefits.competitive_advantage.description'),
      icon: BarChart3,
      color: 'bg-indigo-100 text-indigo-600',
      stats: t('audit_page.benefits.competitive_advantage.stats'),
      details: [
        t('audit_page.benefits.competitive_advantage.details.recognized_certifications'),
        t('audit_page.benefits.competitive_advantage.details.standardized_processes'),
        t('audit_page.benefits.competitive_advantage.details.brand_improvement'),
        t('audit_page.benefits.competitive_advantage.details.new_markets')
      ]
    }
  ];

  const roiStats = [
    {
      icon: DollarSign,
      value: '300%',
      label: t('audit_page.benefits.roi.average_roi.label'),
      description: t('audit_page.benefits.roi.average_roi.description')
    },
    {
      icon: Clock,
      value: '6 mois',
      label: t('audit_page.benefits.roi.payback_time.label'),
      description: t('audit_page.benefits.roi.payback_time.description')
    },
    {
      icon: TrendingUp,
      value: '+40%',
      label: t('audit_page.benefits.roi.productivity_improvement.label'),
      description: t('audit_page.benefits.roi.productivity_improvement.description')
    },
    {
      icon: CheckCircle,
      value: '95%',
      label: t('audit_page.benefits.roi.client_satisfaction.label'),
      description: t('audit_page.benefits.roi.client_satisfaction.description')
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        {/* En-tête */}
        <div className="text-center mb-16">
          <h2 
            className="text-4xl font-bold text-gray-900 mb-6"
            data-aos="fade-up"
            data-aos-duration="600"
          >
            {t('audit_page.benefits.title')}
          </h2>
          <p 
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="200"
          >
            {t('audit_page.benefits.description')}
          </p>
        </div>

        {/* Grille des avantages */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={benefit.id}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 group"
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay={index * 100}
              >
                {/* En-tête */}
                <div className="flex items-start gap-4 mb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl ${benefit.color} flex-shrink-0`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-brand-blue transition-colors duration-200">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {benefit.description}
                    </p>
                    <div className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 text-sm font-semibold rounded-full">
                      {benefit.stats}
                    </div>
                  </div>
                </div>

                {/* Détails */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Comment nous procédons :</h4>
                  <ul className="space-y-3">
                    {benefit.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section ROI et statistiques */}
        <div 
          className="bg-gradient-to-r from-brand-blue to-blue-600 rounded-2xl p-8 md:p-12 text-white"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="400"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              {t('audit_page.benefits.roi_section.title')}
            </h3>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              {t('audit_page.benefits.roi_section.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {roiStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div 
                  key={index}
                  className="text-center"
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-delay={index * 100}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full mb-4">
                    <IconComponent className="w-8 h-8 text-yellow-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-lg font-semibold text-white mb-2">
                    {stat.label}
                  </div>
                  <div className="text-sm text-white/80">
                    {stat.description}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Section témoignages */}
        <div 
          className="mt-20"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="600"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              {t('audit_page.benefits.testimonials.title')}
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('audit_page.benefits.testimonials.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Lightbulb key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">
                "{t('audit_page.benefits.testimonials.testimonial1.quote')}"
              </p>
              <div className="font-semibold text-gray-900">{t('audit_page.benefits.testimonials.testimonial1.author')}</div>
              <div className="text-sm text-gray-500">{t('audit_page.benefits.testimonials.testimonial1.company')}</div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Lightbulb key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">
                "{t('audit_page.benefits.testimonials.testimonial2.quote')}"
              </p>
              <div className="font-semibold text-gray-900">{t('audit_page.benefits.testimonials.testimonial2.author')}</div>
              <div className="text-sm text-gray-500">{t('audit_page.benefits.testimonials.testimonial2.company')}</div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Lightbulb key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">
                "{t('audit_page.benefits.testimonials.testimonial3.quote')}"
              </p>
              <div className="font-semibold text-gray-900">{t('audit_page.benefits.testimonials.testimonial3.author')}</div>
              <div className="text-sm text-gray-500">{t('audit_page.benefits.testimonials.testimonial3.company')}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuditBenefits;
