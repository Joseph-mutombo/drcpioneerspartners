import { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { 
  Target, 
  Heart, 
  Users, 
  TrendingUp,
  Award,
  CheckCircle2,
  ArrowRight,
  Globe,
  Building2,
  Mail,
  MapPin,
  Lightbulb,
  Zap,
  Shield,
  Handshake,
  GraduationCap,
  ClipboardCheck,
  MessageSquare,
  Eye,
  Sparkles
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import heroImage from '@/assets/images/hero.png';

const About = () => {
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

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section 
        className="text-white overflow-hidden relative"
        style={{
          backgroundImage: 'linear-gradient(rgba(13, 27, 62, 0.92), rgba(13, 27, 62, 0.85)), url("' + heroImage + '")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="mx-auto px-4 sm:px-6 lg:px-16 py-20 lg:py-28">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div 
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <Globe className="w-5 h-5 text-yellow-400" />
              <span className="text-sm font-medium">Notre Histoire & Notre Partenaire Mondial</span>
            </div>

            {/* Titre principal */}
            <h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
            >
              DRC Pioneer Partners
              <span className="block text-yellow-400 mt-2">Partenaire Exclusif ICXI en RDC</span>
            </h1>
            
            {/* Description */}
            <p 
              className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="400"
            >
              Cabinet de conseil et de formation spécialisé exclusivement dans l'Expérience Client, 
              nous accompagnons les entreprises et institutions congolaises pour transformer leur 
              relation client selon les standards internationaux ICXI.
            </p>

            {/* Points clés */}
            <div 
              className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mb-10 max-w-3xl mx-auto"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="600"
            >
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3">
                <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-sm">Partenaire exclusif ICXI</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3">
                <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-sm">Certification TISSE</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3">
                <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-sm">Standards mondiaux</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section 1 : Qui nous sommes */}
      <section id="qui-nous-sommes" className="py-20 px-4 sm:px-6 lg:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right" data-aos-duration="800">
              <Badge className="mb-4 bg-yellow-500 text-brand-blue hover:bg-yellow-600">
                <Building2 className="w-4 h-4 mr-2" />
                Qui nous sommes
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-brand-blue mb-6">
                Un Cabinet Spécialisé en Expérience Client
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                <strong>DRC Pioneer Partners</strong> est un cabinet de conseil et de formation spécialisé <strong>exclusivement dans l'Expérience Client (CX)</strong>, fondé à Kinshasa.
              </p>
              
              <div className="bg-gradient-to-r from-brand-blue/5 to-brand-blue-light/5 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                <h3 className="font-bold text-brand-blue mb-3 flex items-center gap-2">
                  <Target className="w-5 h-5 text-yellow-500" />
                  Notre Mission
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Accompagner les entreprises et institutions publiques congolaises pour <strong>améliorer la satisfaction, la fidélité et la confiance</strong> de leurs clients.
                </p>
              </div>
            </div>

            <div 
              className="grid grid-cols-2 gap-4"
              data-aos="fade-left"
              data-aos-duration="800"
            >
              <Card className="border-0 shadow-lg bg-gradient-to-br from-brand-blue to-brand-blue-light text-white">
                <CardContent className="p-6 text-center">
                  <Award className="w-10 h-10 text-yellow-400 mx-auto mb-3" />
                  <p className="font-semibold">Expertise CX</p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg bg-gradient-to-br from-yellow-400 to-yellow-500 text-brand-blue">
                <CardContent className="p-6 text-center">
                  <Users className="w-10 h-10 mx-auto mb-3" />
                  <p className="font-semibold">Équipe Locale</p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg bg-gradient-to-br from-yellow-400 to-yellow-500 text-brand-blue">
                <CardContent className="p-6 text-center">
                  <Globe className="w-10 h-10 mx-auto mb-3" />
                  <p className="font-semibold">Standards Mondiaux</p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg bg-gradient-to-br from-brand-blue to-brand-blue-light text-white">
                <CardContent className="p-6 text-center">
                  <MapPin className="w-10 h-10 text-yellow-400 mx-auto mb-3" />
                  <p className="font-semibold">Fondé à Kinshasa</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 : Notre Vision */}
      <section id="vision" className="py-20 px-4 sm:px-6 lg:px-16 bg-gradient-to-r from-brand-blue to-brand-blue-light text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div data-aos="fade-up" data-aos-duration="800">
            <Eye className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
            <Badge className="mb-4 bg-white/10 text-white hover:bg-white/20 border-white/20">
              Notre Vision
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-8">
              Faire de la RDC une référence africaine
            </h2>
            <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              Faire de la <strong>République Démocratique du Congo</strong> une <strong>référence africaine</strong> en matière d'expérience client et de qualité de service.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 mt-12" data-aos="fade-up" data-aos-delay="200">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <TrendingUp className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
              <p className="font-medium">Excellence de Service</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Award className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
              <p className="font-medium">Standards Internationaux</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Heart className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
              <p className="font-medium">Satisfaction Client</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 : L'ICXI - Notre Partenaire d'Excellence */}
      <section id="icxi" className="py-20 px-4 sm:px-6 lg:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <Badge className="mb-4 bg-brand-blue text-white hover:bg-brand-blue-light">
              <Handshake className="w-4 h-4 mr-2" />
              Notre Partenaire d'Excellence
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-blue mb-4">
              L'ICXI : International Customer Experience Institute
            </h2>
          </div>

          {/* Encadré ICXI */}
          <div 
            className="bg-gradient-to-br from-brand-blue/5 via-white to-yellow-50 border-2 border-brand-blue/20 rounded-2xl p-8 md:p-12 mb-12"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center">
                    <Globe className="w-8 h-8 text-brand-blue" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-brand-blue">ICXI</h3>
                    <p className="text-gray-600">Dubaï, Émirats Arabes Unis</p>
                  </div>
                </div>

                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Une <strong>organisation de renommée mondiale</strong> dédiée à l'amélioration des standards de service à la clientèle dans les secteurs public et privé.
                </p>

                <div className="bg-white rounded-lg p-4 border border-brand-blue/10 shadow-sm">
                  <h4 className="font-bold text-brand-blue mb-2 flex items-center gap-2">
                    <Target className="w-5 h-5 text-yellow-500" />
                    Mission de l'ICXI
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Améliorer les standards de service à la clientèle à travers le monde via des certifications, formations et standards d'excellence reconnus internationalement.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-bold text-brand-blue mb-4">Fonctions Clés de l'ICXI</h4>
                
                <div className="flex items-start gap-4 bg-white rounded-lg p-4 border border-brand-blue/10 shadow-sm">
                  <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-5 h-5 text-brand-blue" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-brand-blue">Développer le TISSE</h5>
                    <p className="text-sm text-gray-600">Norme Internationale d'Excellence de Service</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white rounded-lg p-4 border border-brand-blue/10 shadow-sm">
                  <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-brand-blue">Certifier</h5>
                    <p className="text-sm text-gray-600">Organisations et professionnels du monde entier</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white rounded-lg p-4 border border-brand-blue/10 shadow-sm">
                  <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-brand-blue">Former des Partenaires</h5>
                    <p className="text-sm text-gray-600">Réseau mondial de partenaires accrédités</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 : Un Partenariat Exclusif pour la RDC */}
      <section id="partenariat" className="py-20 px-4 sm:px-6 lg:px-16 bg-gradient-to-r from-yellow-50 to-yellow-100/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right" data-aos-duration="800">
              <Badge className="mb-4 bg-yellow-500 text-brand-blue hover:bg-yellow-600">
                <Handshake className="w-4 h-4 mr-2" />
                Partenariat Exclusif
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-brand-blue mb-6">
                Le Seul Partenaire ICXI en RDC
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                <strong>DRC Pioneer Partners</strong> est le <strong>Partenaire Exclusif en République Démocratique du Congo</strong> de l'ICXI.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Ce partenariat permet d'apporter aux entreprises et institutions congolaises :
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">L'intégration des <strong>standards internationaux d'excellence</strong></p>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Les <strong>certifications reconnues mondialement</strong> (comme le TISSE)</p>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Un accompagnement <strong>adapté au contexte africain</strong></p>
                </div>
              </div>
            </div>

            <div 
              className="relative"
              data-aos="fade-left"
              data-aos-duration="800"
            >
              <div className="bg-gradient-to-br from-brand-blue to-brand-blue-light rounded-2xl p-8 text-white">
                <div className="flex justify-center gap-8 mb-8">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-3 border border-white/20">
                      <Building2 className="w-10 h-10 text-yellow-400" />
                    </div>
                    <p className="font-semibold text-sm">DRC Pioneer</p>
                    <p className="text-xs text-white/70">Kinshasa</p>
                  </div>
                  <div className="flex items-center">
                    <Handshake className="w-8 h-8 text-yellow-400" />
                  </div>
                  <div className="text-center">
                    <div className="w-20 h-20 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-3 border border-white/20">
                      <Globe className="w-10 h-10 text-yellow-400" />
                    </div>
                    <p className="font-semibold text-sm">ICXI</p>
                    <p className="text-xs text-white/70">Dubaï</p>
                  </div>
                </div>

                <div className="bg-white/10 rounded-lg p-4 border border-white/20 text-center">
                  <Award className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                  <p className="font-semibold">Partenaire Exclusif RDC</p>
                  <p className="text-sm text-white/80 mt-1">Standards ICXI & Certification TISSE</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 : Ce que nous faisons (Nos 3 Leviers) */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <Badge className="mb-4 bg-brand-blue text-white hover:bg-brand-blue-light">
              Nos 3 Leviers
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-blue mb-4">
              Ce que nous faisons
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Méthodologie rigoureuse, reconnue à l'international et adaptée au contexte africain
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card 
              className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              data-aos="fade-up"
              data-aos-delay="0"
            >
              <div className="h-2 bg-gradient-to-r from-yellow-400 to-yellow-500" />
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center mb-6">
                  <ClipboardCheck className="w-8 h-8 text-brand-blue" />
                </div>
                <h3 className="text-xl font-bold text-brand-blue mb-4">Audit & Certification CX</h3>
                <p className="text-gray-600 mb-4">
                  Évaluation complète selon les standards ICXI pour mesurer votre maturité en expérience client.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    Standards ICXI
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    Certification TISSE
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    Rapport détaillé
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card 
              className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="h-2 bg-gradient-to-r from-blue-400 to-blue-500" />
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-500 rounded-xl flex items-center justify-center mb-6">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-brand-blue mb-4">Formation & Renforcement</h3>
                <p className="text-gray-600 mb-4">
                  Programmes de renforcement des capacités en expérience client et culture de service.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    Modules certifiés
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    Culture de service
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    Formateurs experts
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card 
              className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="h-2 bg-gradient-to-r from-purple-400 to-purple-500" />
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-500 rounded-xl flex items-center justify-center mb-6">
                  <MessageSquare className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-brand-blue mb-4">Conseil Stratégique CX</h3>
                <p className="text-gray-600 mb-4">
                  Intégrer la voix du client dans vos politiques et processus internes.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    Voix du client
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    Stratégie CX
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    Processus optimisés
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 6 : Notre Démarche (Approche en 3 Étapes) */}
      <section id="demarche" className="py-20 px-4 sm:px-6 lg:px-16 bg-gradient-to-r from-brand-blue/5 to-brand-blue-light/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <Badge className="mb-4 bg-yellow-500 text-brand-blue hover:bg-yellow-600">
              Approche en 3 Étapes
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-blue mb-4">
              Notre Démarche
            </h2>
          </div>

          <div className="relative">
            {/* Ligne de connexion */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-blue-400 to-purple-400 -translate-y-1/2 z-0" />

            <div className="grid md:grid-cols-3 gap-8 relative z-10">
              <div data-aos="fade-up" data-aos-delay="0">
                <Card className="border-0 shadow-lg h-full bg-white">
                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-blue font-bold text-2xl border-4 border-white shadow-lg">
                      1
                    </div>
                    <Zap className="w-8 h-8 text-yellow-500 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-brand-blue mb-4">Diagnostic</h3>
                    <p className="text-gray-600">
                      Analyse approfondie des processus internes et du vécu client
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div data-aos="fade-up" data-aos-delay="100">
                <Card className="border-0 shadow-lg h-full bg-white">
                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-2xl border-4 border-white shadow-lg">
                      2
                    </div>
                    <Users className="w-8 h-8 text-blue-500 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-brand-blue mb-4">Co-construction</h3>
                    <p className="text-gray-600">
                      Élaboration de solutions pratiques avec les dirigeants et les équipes
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div data-aos="fade-up" data-aos-delay="200">
                <Card className="border-0 shadow-lg h-full bg-white">
                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-2xl border-4 border-white shadow-lg">
                      3
                    </div>
                    <TrendingUp className="w-8 h-8 text-purple-500 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-brand-blue mb-4">Amélioration Continue</h3>
                    <p className="text-gray-600">
                      Accompagnement durable pour garantir la pérennité des résultats
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7 : Nos Valeurs */}
      <section id="valeurs" className="py-20 px-4 sm:px-6 lg:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <Badge className="mb-4 bg-brand-blue text-white hover:bg-brand-blue-light">
              Ce qui nous guide
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-blue mb-4">
              Nos Valeurs
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            <Card 
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              data-aos="fade-up"
              data-aos-delay="0"
            >
              <CardContent className="p-6 text-center">
                <Shield className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                <h3 className="font-bold text-brand-blue">Intégrité</h3>
              </CardContent>
            </Card>

            <Card 
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              data-aos="fade-up"
              data-aos-delay="50"
            >
              <CardContent className="p-6 text-center">
                <Award className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h3 className="font-bold text-brand-blue">Excellence</h3>
              </CardContent>
            </Card>

            <Card 
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <CardContent className="p-6 text-center">
                <Lightbulb className="w-12 h-12 text-purple-500 mx-auto mb-4" />
                <h3 className="font-bold text-brand-blue">Innovation</h3>
              </CardContent>
            </Card>

            <Card 
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              <CardContent className="p-6 text-center">
                <Heart className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <h3 className="font-bold text-brand-blue">Engagement</h3>
              </CardContent>
            </Card>

            <Card 
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 col-span-2 md:col-span-1"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <CardContent className="p-6 text-center">
                <TrendingUp className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="font-bold text-brand-blue">Impact Positif</h3>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 8 : Contactez-nous */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-16 bg-gradient-to-r from-brand-blue to-brand-blue-light text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Contactez-nous
            </h2>
            <p className="text-xl text-white/90">
              Ensemble pour l'excellence du service
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="border-0 bg-white/10 backdrop-blur-sm border border-white/20" data-aos="fade-up" data-aos-delay="0">
              <CardContent className="p-8 text-center">
                <MapPin className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">📍 Nos Bureaux</h3>
                <p className="text-white/90">
                  Kinshasa<br/>
                  Lubumbashi<br/>
                  Kolwezi
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-white/10 backdrop-blur-sm border border-white/20" data-aos="fade-up" data-aos-delay="100">
              <CardContent className="p-8 text-center">
                <Mail className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">✉️ Email</h3>
                <a href="mailto:contact@drcpioneers.com" className="text-yellow-400 hover:text-yellow-300 font-semibold">
                  contact@drcpioneers.com
                </a>
              </CardContent>
            </Card>

            <Card className="border-0 bg-white/10 backdrop-blur-sm border border-white/20" data-aos="fade-up" data-aos-delay="200">
              <CardContent className="p-8 text-center">
                <Globe className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">🌐 Site Web</h3>
                <a href="https://www.drcpioneers.com" className="text-yellow-400 hover:text-yellow-300 font-semibold">
                  www.drcpioneers.com
                </a>
              </CardContent>
            </Card>
          </div>

          <div className="text-center" data-aos="fade-up" data-aos-delay="300">
            <Link to="/contact">
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-brand-blue px-12 py-6 text-lg font-semibold">
                Prendre rendez-vous
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer Slogan */}
      <section className="py-8 px-4 bg-brand-blue text-white text-center border-t border-white/10">
        <p className="text-xl font-bold text-yellow-400">
          Ensemble pour l'excellence du service
        </p>
      </section>
    </div>
  );
};

export default About;
