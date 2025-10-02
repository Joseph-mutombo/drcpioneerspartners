import { useTranslation } from 'react-i18next';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { toast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Building2, 
  User, 
  Mail, 
  Phone, 
  FileText, 
  Send,
  CheckCircle
} from 'lucide-react';

const AuditRequestForm = () => {
  const { t } = useTranslation();

  const formSchema = z.object({
    companyName: z.string().min(1, { message: "Le nom de l'entreprise est requis" }),
    contactPerson: z.string().min(1, { message: "Le nom du contact est requis" }),
    email: z.string().email({ message: "Adresse email invalide" }),
    phone: z.string().min(1, { message: "Le numéro de téléphone est requis" }),
    serviceType: z.string().min(1, { message: "Veuillez sélectionner un type de service" }),
    companySize: z.string().min(1, { message: "Veuillez sélectionner la taille de l'entreprise" }),
    industry: z.string().min(1, { message: "Veuillez sélectionner le secteur d'activité" }),
    auditScope: z.string().min(1, { message: "Veuillez décrire le périmètre de l'audit" }),
    objectives: z.string().min(1, { message: "Veuillez décrire les objectifs" }),
    timeline: z.string().min(1, { message: "Veuillez indiquer le délai souhaité" }),
    budget: z.string().min(1, { message: "Veuillez indiquer votre budget approximatif" }),
    additionalInfo: z.string().optional(),
    agreeTerms: z.boolean().refine((val) => val === true, {
      message: "Vous devez accepter les conditions"
    }),
    agreeNewsletter: z.boolean().optional()
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      companyName: "",
      contactPerson: "",
      email: "",
      phone: "",
      serviceType: "",
      companySize: "",
      industry: "",
      auditScope: "",
      objectives: "",
      timeline: "",
      budget: "",
      additionalInfo: "",
      agreeTerms: false,
      agreeNewsletter: false
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Demande envoyée avec succès",
      description: "Nous vous contacterons dans les plus brefs délais pour discuter de votre projet.",
    });
    form.reset();
  }

  const serviceTypes = [
    { value: "audit-qualite", label: "Audit de Qualité (ISO 9001)" },
    { value: "audit-environnement", label: "Audit Environnemental (ISO 14001)" },
    { value: "audit-securite", label: "Audit de Sécurité (OHSAS 18001)" },
    { value: "consultation-strategique", label: "Consultation Stratégique" },
    { value: "audit-complet", label: "Audit Complet (Multi-normes)" },
    { value: "autre", label: "Autre (préciser dans les commentaires)" }
  ];

  const companySizes = [
    { value: "micro", label: "Micro-entreprise (1-9 employés)" },
    { value: "petite", label: "Petite entreprise (10-49 employés)" },
    { value: "moyenne", label: "Moyenne entreprise (50-249 employés)" },
    { value: "grande", label: "Grande entreprise (250+ employés)" }
  ];

  const industries = [
    { value: "manufacturing", label: "Manufacturing / Industrie" },
    { value: "services", label: "Services" },
    { value: "construction", label: "Construction / BTP" },
    { value: "healthcare", label: "Santé / Médical" },
    { value: "food", label: "Agroalimentaire" },
    { value: "technology", label: "Technologie / IT" },
    { value: "retail", label: "Commerce / Distribution" },
    { value: "other", label: "Autre" }
  ];

  const timelines = [
    { value: "urgent", label: "Urgent (sous 1 mois)" },
    { value: "1-3months", label: "1-3 mois" },
    { value: "3-6months", label: "3-6 mois" },
    { value: "6-12months", label: "6-12 mois" },
    { value: "flexible", label: "Flexible" }
  ];

  const budgets = [
    { value: "under-5k", label: "Moins de 5 000 $" },
    { value: "5k-10k", label: "5 000 $ - 10 000 $" },
    { value: "10k-25k", label: "10 000 $ - 25 000 $" },
    { value: "25k-50k", label: "25 000 $ - 50 000 $" },
    { value: "over-50k", label: "Plus de 50 000 $" },
    { value: "discuss", label: "À discuter" }
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-16">
        {/* En-tête */}
        <div className="text-center mb-12">
          <h2 
            className="text-4xl font-bold text-gray-900 mb-6"
            data-aos="fade-up"
            data-aos-duration="600"
          >
            Demander un Audit
          </h2>
          <p 
            className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="200"
          >
            Remplissez ce formulaire pour nous faire part de vos besoins en audit et consultation. 
            Nous vous contacterons dans les plus brefs délais.
          </p>
        </div>

        {/* Formulaire */}
        <div 
          className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="400"
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {/* Informations de l'entreprise */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-3">
                  <Building2 className="w-6 h-6 text-brand-blue" />
                  Informations de l'entreprise
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="companyName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nom de l'entreprise *</FormLabel>
                        <FormControl>
                          <Input placeholder="Nom de votre entreprise" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="industry"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Secteur d'activité *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Sélectionnez votre secteur" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {industries.map((industry) => (
                              <SelectItem key={industry.value} value={industry.value}>
                                {industry.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="companySize"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Taille de l'entreprise *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Sélectionnez la taille" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {companySizes.map((size) => (
                              <SelectItem key={size.value} value={size.value}>
                                {size.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              {/* Informations de contact */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-3">
                  <User className="w-6 h-6 text-brand-blue" />
                  Informations de contact
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="contactPerson"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nom du contact *</FormLabel>
                        <FormControl>
                          <Input placeholder="Votre nom complet" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email *</FormLabel>
                        <FormControl>
                          <Input placeholder="votre@email.com" type="email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Téléphone *</FormLabel>
                        <FormControl>
                          <Input placeholder="+243 XXX XXX XXX" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              {/* Détails du projet */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-3">
                  <FileText className="w-6 h-6 text-brand-blue" />
                  Détails du projet
                </h3>
                
                <div className="space-y-6">
                  <FormField
                    control={form.control}
                    name="serviceType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Type de service souhaité *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Sélectionnez le type de service" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {serviceTypes.map((service) => (
                              <SelectItem key={service.value} value={service.value}>
                                {service.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="auditScope"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Périmètre de l'audit *</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Décrivez le périmètre souhaité pour l'audit (départements, processus, etc.)"
                            className="min-h-[100px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="objectives"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Objectifs de l'audit *</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Quels sont vos objectifs principaux ? (certification, amélioration, conformité, etc.)"
                            className="min-h-[100px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="timeline"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Délai souhaité *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Sélectionnez le délai" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {timelines.map((timeline) => (
                                <SelectItem key={timeline.value} value={timeline.value}>
                                  {timeline.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="budget"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Budget approximatif *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Sélectionnez le budget" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {budgets.map((budget) => (
                                <SelectItem key={budget.value} value={budget.value}>
                                  {budget.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="additionalInfo"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Informations supplémentaires</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Toute information supplémentaire qui pourrait nous aider à mieux comprendre vos besoins"
                            className="min-h-[100px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              {/* Conditions et consentements */}
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="agreeTerms"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>
                          J'accepte les conditions d'utilisation et la politique de confidentialité *
                        </FormLabel>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="agreeNewsletter"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>
                          Je souhaite recevoir des informations sur vos services et actualités
                        </FormLabel>
                      </div>
                    </FormItem>
                  )}
                />
              </div>

              {/* Bouton de soumission */}
              <div className="pt-6">
                <Button 
                  type="submit" 
                  className="w-full group flex items-center justify-center gap-2 px-8 py-4 bg-brand-blue text-white font-semibold rounded-lg hover:bg-yellow-600 transition-colors duration-200"
                >
                  <Send className="w-5 h-5" />
                  <span>Envoyer la demande</span>
                </Button>
              </div>
            </form>
          </Form>
        </div>

        {/* Informations de contact alternatives */}
        <div 
          className="mt-12 text-center"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="600"
        >
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Préférez-vous nous contacter directement ?
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+243978847886" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-200"
              >
                <Phone className="w-4 h-4" />
                +243 978 847 886
              </a>
              <a 
                href="mailto:suport@drcpioneers.com" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                <Mail className="w-4 h-4" />
                suport@drcpioneers.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuditRequestForm;
