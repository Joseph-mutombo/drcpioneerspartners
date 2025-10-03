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
  BookOpen, 
  Send,
  CheckCircle,
  Users,
  Clock
} from 'lucide-react';

const FormationRequestForm = () => {
  const { t } = useTranslation();

  const formSchema = z.object({
    requestType: z.string().min(1, { message: "Veuillez sélectionner le type de demande" }),
    companyName: z.string().optional(),
    contactPerson: z.string().min(1, { message: "Le nom du contact est requis" }),
    email: z.string().email({ message: "Adresse email invalide" }),
    phone: z.string().min(1, { message: "Le numéro de téléphone est requis" }),
    formationProgram: z.string().min(1, { message: "Veuillez sélectionner un programme" }),
    participantCount: z.string().optional(),
    currentLevel: z.string().min(1, { message: "Veuillez indiquer votre niveau actuel" }),
    objectives: z.string().min(1, { message: "Veuillez décrire vos objectifs" }),
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
      requestType: "",
      companyName: "",
      contactPerson: "",
      email: "",
      phone: "",
      formationProgram: "",
      participantCount: "",
      currentLevel: "",
      objectives: "",
      timeline: "",
      budget: "",
      additionalInfo: "",
      agreeTerms: false,
      agreeNewsletter: false
    },
  });

  const requestType = form.watch("requestType");

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Demande envoyée avec succès",
      description: "Nous vous contacterons dans les plus brefs délais pour discuter de votre projet de formation.",
    });
    form.reset();
  }

  const requestTypes = [
    { value: "individual", label: "Particulier" },
    { value: "enterprise", label: "Entreprise" }
  ];

  const formationPrograms = [
    { value: "cxop", label: "CXOP - Customer Experience Officer Program" },
    { value: "cxmp", label: "CXMP - Customer Experience Management Program" },
    { value: "cxlp", label: "CXLP - Customer Experience Leadership Program" },
    { value: "msc", label: "MSC - Masterclass Spécialisées" },
    { value: "multiple", label: "Plusieurs programmes" },
    { value: "consultation", label: "Consultation personnalisée" }
  ];

  const currentLevels = [
    { value: "beginner", label: "Débutant" },
    { value: "intermediate", label: "Intermédiaire" },
    { value: "advanced", label: "Avancé" },
    { value: "expert", label: "Expert" }
  ];

  const timelines = [
    { value: "asap", label: "Dès que possible" },
    { value: "1-3months", label: "1-3 mois" },
    { value: "3-6months", label: "3-6 mois" },
    { value: "6-12months", label: "6-12 mois" },
    { value: "flexible", label: "Flexible" }
  ];

  const budgets = [
    { value: "under-1k", label: "Moins de 1 000 $" },
    { value: "1k-5k", label: "1 000 $ - 5 000 $" },
    { value: "5k-10k", label: "5 000 $ - 10 000 $" },
    { value: "10k-25k", label: "10 000 $ - 25 000 $" },
    { value: "over-25k", label: "Plus de 25 000 $" },
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
            Demander une Formation
          </h2>
          <p 
            className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="200"
          >
            Remplissez ce formulaire pour nous faire part de votre intérêt pour nos programmes de formation. 
            Nous vous contacterons pour discuter de vos besoins spécifiques.
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
              {/* Type de demande */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-3">
                  <BookOpen className="w-6 h-6 text-brand-blue" />
                  Type de demande
                </h3>
                
                <FormField
                  control={form.control}
                  name="requestType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Type de formation souhaitée *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Sélectionnez le type de demande" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {requestTypes.map((type) => (
                            <SelectItem key={type.value} value={type.value}>
                              {type.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Informations de contact */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-3">
                  <User className="w-6 h-6 text-brand-blue" />
                  Informations de contact
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {requestType === "enterprise" && (
                    <FormField
                      control={form.control}
                      name="companyName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nom de l'entreprise</FormLabel>
                          <FormControl>
                            <Input placeholder="Nom de votre entreprise" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  )}
                  
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

              {/* Détails de la formation */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-3">
                  <BookOpen className="w-6 h-6 text-brand-blue" />
                  Détails de la formation
                </h3>
                
                <div className="space-y-6">
                  <FormField
                    control={form.control}
                    name="formationProgram"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Programme de formation souhaité *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Sélectionnez un programme" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {formationPrograms.map((program) => (
                              <SelectItem key={program.value} value={program.value}>
                                {program.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  {requestType === "enterprise" && (
                    <FormField
                      control={form.control}
                      name="participantCount"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nombre de participants</FormLabel>
                          <FormControl>
                            <Input placeholder="Nombre de personnes à former" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  )}
                  
                  <FormField
                    control={form.control}
                    name="currentLevel"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Niveau actuel *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Sélectionnez votre niveau" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {currentLevels.map((level) => (
                              <SelectItem key={level.value} value={level.value}>
                                {level.label}
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
                    name="objectives"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Objectifs de formation *</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Décrivez vos objectifs et ce que vous souhaitez accomplir avec cette formation"
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
                          Je souhaite recevoir des informations sur nos programmes de formation
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

export default FormationRequestForm;
