import { useTranslation } from 'react-i18next';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { toast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { useCertificationRequestMutation } from "@/hooks/useFormMutations";
import type { CertificationRequestPayload } from "@/services/api/types";
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
  Award, 
  Send,
  CheckCircle,
  Users,
  Clock
} from 'lucide-react';

const CertificationRequestForm = () => {
  const { t } = useTranslation();
  const { mutate, isPending } = useCertificationRequestMutation();

  const formSchema = z.object({
    requestType: z.string().min(1, { message: t('certifications_page.form.validation.request_type') }),
    companyName: z.string().optional(),
    contactPerson: z.string().min(1, { message: t('certifications_page.form.validation.contact_person') }),
    email: z.string().email({ message: t('certifications_page.form.validation.email') }),
    phone: z.string().min(1, { message: t('certifications_page.form.validation.phone') }),
    certificationProgram: z.string().min(1, { message: t('certifications_page.form.validation.certification_program') }),
    participantCount: z.string().optional(),
    currentLevel: z.string().min(1, { message: t('certifications_page.form.validation.current_level') }),
    objectives: z.string().min(1, { message: t('certifications_page.form.validation.objectives') }),
    timeline: z.string().min(1, { message: t('certifications_page.form.validation.timeline') }),
    budget: z.string().min(1, { message: t('certifications_page.form.validation.budget') }),
    additionalInfo: z.string().optional(),
    agreeTerms: z.boolean().refine((val) => val === true, {
      message: t('certifications_page.form.validation.agree_terms')
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
      certificationProgram: "",
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
    mutate(values as CertificationRequestPayload, {
      onSuccess: () => {
        toast({
          title: t('certifications_page.form.success.title'),
          description: t('certifications_page.form.success.description'),
        });
        form.reset();
      },
      onError: (err: { message?: string }) => {
        toast({
          variant: 'destructive',
          title: t('certifications_page.form.error_title', { defaultValue: 'Error' }),
          description: err?.message ?? t('certifications_page.form.error_description', { defaultValue: 'Please try again later.' }),
        });
      },
    });
  }

  const requestTypes = [
    { value: "individual", label: t('certifications_page.form.options.request_types.individual') },
    { value: "enterprise", label: t('certifications_page.form.options.request_types.enterprise') }
  ];

  const certificationPrograms = [
    { value: "tisse", label: t('certifications_page.form.options.programs.tisse') },
    { value: "icxs", label: t('certifications_page.form.options.programs.icxs') },
    { value: "idcxs", label: t('certifications_page.form.options.programs.idcxs') },
    { value: "iehws", label: t('certifications_page.form.options.programs.iehws') },
    { value: "multiple", label: t('certifications_page.form.options.programs.multiple') },
    { value: "consultation", label: t('certifications_page.form.options.programs.consultation') }
  ];

  const currentLevels = [
    { value: "beginner", label: t('certifications_page.form.options.levels.beginner') },
    { value: "intermediate", label: t('certifications_page.form.options.levels.intermediate') },
    { value: "advanced", label: t('certifications_page.form.options.levels.advanced') },
    { value: "expert", label: t('certifications_page.form.options.levels.expert') }
  ];

  const timelines = [
    { value: "asap", label: t('certifications_page.form.options.timelines.asap') },
    { value: "1-3months", label: t('certifications_page.form.options.timelines.1_3_months') },
    { value: "3-6months", label: t('certifications_page.form.options.timelines.3_6_months') },
    { value: "6-12months", label: t('certifications_page.form.options.timelines.6_12_months') },
    { value: "flexible", label: t('certifications_page.form.options.timelines.flexible') }
  ];

  const budgets = [
    { value: "under-1k", label: t('certifications_page.form.options.budgets.under_1k') },
    { value: "1k-5k", label: t('certifications_page.form.options.budgets.1k_5k') },
    { value: "5k-10k", label: t('certifications_page.form.options.budgets.5k_10k') },
    { value: "10k-25k", label: t('certifications_page.form.options.budgets.10k_25k') },
    { value: "over-25k", label: t('certifications_page.form.options.budgets.over_25k') },
    { value: "discuss", label: t('certifications_page.form.options.budgets.discuss') }
  ];

  return (
    <div className="py-20 bg-gray-50" id="certification-request-form">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-16">
        {/* En-tête */}
        <div className="text-center mb-12">
          <h2 
            className="text-4xl font-bold text-gray-900 mb-6"
            data-aos="fade-up"
            data-aos-duration="600"
          >
            {t('certifications_page.form.title')}
          </h2>
          <p 
            className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="200"
          >
            {t('certifications_page.form.description')}
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
                  <Award className="w-6 h-6 text-brand-blue" />
                  {t('certifications_page.form.sections.request_type')}
                </h3>
                
                <FormField
                  control={form.control}
                  name="requestType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('certifications_page.form.labels.certification_type')}</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder={t('certifications_page.form.placeholders.select_request_type')} />
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
                  {t('certifications_page.form.sections.contact_info')}
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {requestType === "enterprise" && (
                    <FormField
                      control={form.control}
                      name="companyName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t('certifications_page.form.labels.company_name')}</FormLabel>
                          <FormControl>
                            <Input placeholder={t('certifications_page.form.placeholders.company_name')} {...field} />
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
                        <FormLabel>{t('certifications_page.form.labels.contact_person')}</FormLabel>
                        <FormControl>
                          <Input placeholder={t('certifications_page.form.placeholders.contact_person')} {...field} />
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
                        <FormLabel>{t('certifications_page.form.labels.email')}</FormLabel>
                        <FormControl>
                          <Input placeholder={t('certifications_page.form.placeholders.email')} type="email" {...field} />
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
                        <FormLabel>{t('certifications_page.form.labels.phone')}</FormLabel>
                        <FormControl>
                          <Input placeholder={t('certifications_page.form.placeholders.phone')} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              {/* Détails de la certification */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-3">
                  <Award className="w-6 h-6 text-brand-blue" />
                  {t('certifications_page.form.sections.certification_details')}
                </h3>
                
                <div className="space-y-6">
                  <FormField
                    control={form.control}
                    name="certificationProgram"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t('certifications_page.form.labels.certification_program')}</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder={t('certifications_page.form.placeholders.select_program')} />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {certificationPrograms.map((program) => (
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
                          <FormLabel>{t('certifications_page.form.labels.participant_count')}</FormLabel>
                          <FormControl>
                            <Input placeholder={t('certifications_page.form.placeholders.participant_count')} {...field} />
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
                        <FormLabel>{t('certifications_page.form.labels.current_level')}</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder={t('certifications_page.form.placeholders.select_level')} />
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
                        <FormLabel>{t('certifications_page.form.labels.objectives')}</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder={t('certifications_page.form.placeholders.objectives')}
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
                          <FormLabel>{t('certifications_page.form.labels.timeline')}</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder={t('certifications_page.form.placeholders.select_timeline')} />
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
                          <FormLabel>{t('certifications_page.form.labels.budget')}</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder={t('certifications_page.form.placeholders.select_budget')} />
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
                        <FormLabel>{t('certifications_page.form.labels.additional_info')}</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder={t('certifications_page.form.placeholders.additional_info')}
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
                          {t('certifications_page.form.conditions.agree_terms')}
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
                          {t('certifications_page.form.conditions.newsletter')}
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
                  disabled={isPending}
                  className="w-full group flex items-center justify-center gap-2 px-8 py-4 bg-brand-blue text-white font-semibold rounded-lg hover:bg-yellow-600 transition-colors duration-200"
                >
                  <Send className="w-5 h-5" />
                  <span>{isPending ? t('certifications_page.form.submitting', { defaultValue: 'Sending...' }) : t('certifications_page.form.submit_button')}</span>
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
              {t('certifications_page.form.alternative_contact.title')}
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+243862121612" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-200"
              >
                <Phone className="w-4 h-4" />
                +243 862121612
              </a>
              <a 
                href="mailto:contact@drcpioneers.com" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                <Mail className="w-4 h-4" />
                contact@drcpioneers.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificationRequestForm;
