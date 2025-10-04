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
    companyName: z.string().min(1, { message: t('audit_page.form.validation.company_name_required') }),
    contactPerson: z.string().min(1, { message: t('audit_page.form.validation.contact_person_required') }),
    email: z.string().email({ message: t('audit_page.form.validation.invalid_email') }),
    phone: z.string().min(1, { message: t('audit_page.form.validation.phone_required') }),
    serviceType: z.string().min(1, { message: t('audit_page.form.validation.service_type_required') }),
    companySize: z.string().min(1, { message: t('audit_page.form.validation.company_size_required') }),
    industry: z.string().min(1, { message: t('audit_page.form.validation.industry_required') }),
    auditScope: z.string().min(1, { message: t('audit_page.form.validation.audit_scope_required') }),
    objectives: z.string().min(1, { message: t('audit_page.form.validation.objectives_required') }),
    timeline: z.string().min(1, { message: t('audit_page.form.validation.timeline_required') }),
    budget: z.string().min(1, { message: t('audit_page.form.validation.budget_required') }),
    additionalInfo: z.string().optional(),
    agreeTerms: z.boolean().refine((val) => val === true, {
      message: t('audit_page.form.validation.terms_required')
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
      title: t('audit_page.form.success.title'),
      description: t('audit_page.form.success.description'),
    });
    form.reset();
  }

  const serviceTypes = [
    { value: "audit-qualite", label: t('audit_page.form.options.service_types.quality') },
    { value: "audit-environnement", label: t('audit_page.form.options.service_types.environmental') },
    { value: "audit-securite", label: t('audit_page.form.options.service_types.safety') },
    { value: "consultation-strategique", label: t('audit_page.form.options.service_types.strategic') },
    { value: "audit-complet", label: t('audit_page.form.options.service_types.complete') },
    { value: "autre", label: t('audit_page.form.options.service_types.other') }
  ];

  const companySizes = [
    { value: "micro", label: t('audit_page.form.options.company_sizes.micro') },
    { value: "petite", label: t('audit_page.form.options.company_sizes.small') },
    { value: "moyenne", label: t('audit_page.form.options.company_sizes.medium') },
    { value: "grande", label: t('audit_page.form.options.company_sizes.large') }
  ];

  const industries = [
    { value: "manufacturing", label: t('audit_page.form.options.industries.manufacturing') },
    { value: "services", label: t('audit_page.form.options.industries.services') },
    { value: "construction", label: t('audit_page.form.options.industries.construction') },
    { value: "healthcare", label: t('audit_page.form.options.industries.healthcare') },
    { value: "food", label: t('audit_page.form.options.industries.food') },
    { value: "technology", label: t('audit_page.form.options.industries.technology') },
    { value: "retail", label: t('audit_page.form.options.industries.retail') },
    { value: "other", label: t('audit_page.form.options.industries.other') }
  ];

  const timelines = [
    { value: "urgent", label: t('audit_page.form.options.timelines.urgent') },
    { value: "1-3months", label: t('audit_page.form.options.timelines.1_3_months') },
    { value: "3-6months", label: t('audit_page.form.options.timelines.3_6_months') },
    { value: "6-12months", label: t('audit_page.form.options.timelines.6_12_months') },
    { value: "flexible", label: t('audit_page.form.options.timelines.flexible') }
  ];

  const budgets = [
    { value: "under-5k", label: t('audit_page.form.options.budgets.under_5k') },
    { value: "5k-10k", label: t('audit_page.form.options.budgets.5k_10k') },
    { value: "10k-25k", label: t('audit_page.form.options.budgets.10k_25k') },
    { value: "25k-50k", label: t('audit_page.form.options.budgets.25k_50k') },
    { value: "over-50k", label: t('audit_page.form.options.budgets.over_50k') },
    { value: "discuss", label: t('audit_page.form.options.budgets.discuss') }
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
            {t('audit_page.form.title')}
          </h2>
          <p 
            className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="200"
          >
            {t('audit_page.form.description')}
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
                  {t('audit_page.form.sections.company_info')}
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="companyName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t('audit_page.form.labels.company_name')}</FormLabel>
                        <FormControl>
                          <Input placeholder={t('audit_page.form.placeholders.company_name')} {...field} />
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
                        <FormLabel>{t('audit_page.form.labels.industry')}</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder={t('audit_page.form.placeholders.industry')} />
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
                        <FormLabel>{t('audit_page.form.labels.company_size')}</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder={t('audit_page.form.placeholders.company_size')} />
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
                  {t('audit_page.form.sections.contact_info')}
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="contactPerson"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t('audit_page.form.labels.contact_person')}</FormLabel>
                        <FormControl>
                          <Input placeholder={t('audit_page.form.placeholders.contact_person')} {...field} />
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
                        <FormLabel>{t('audit_page.form.labels.email')}</FormLabel>
                        <FormControl>
                          <Input placeholder={t('audit_page.form.placeholders.email')} type="email" {...field} />
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
                        <FormLabel>{t('audit_page.form.labels.phone')}</FormLabel>
                        <FormControl>
                          <Input placeholder={t('audit_page.form.placeholders.phone')} {...field} />
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
                  {t('audit_page.form.sections.audit_details')}
                </h3>
                
                <div className="space-y-6">
                  <FormField
                    control={form.control}
                    name="serviceType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t('audit_page.form.labels.service_type')}</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder={t('audit_page.form.placeholders.service_type')} />
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
                        <FormLabel>{t('audit_page.form.labels.audit_scope')}</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder={t('audit_page.form.placeholders.audit_scope')}
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
                        <FormLabel>{t('audit_page.form.labels.objectives')}</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder={t('audit_page.form.placeholders.objectives')}
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
                          <FormLabel>{t('audit_page.form.labels.timeline')}</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder={t('audit_page.form.placeholders.timeline')} />
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
                          <FormLabel>{t('audit_page.form.labels.budget')}</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder={t('audit_page.form.placeholders.budget')} />
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
                        <FormLabel>{t('audit_page.form.labels.additional_info')}</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder={t('audit_page.form.placeholders.additional_info')}
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
                          {t('audit_page.form.labels.agree_terms')}
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
                          {t('audit_page.form.labels.agree_newsletter')}
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
                  <span>{t('audit_page.form.submit_button')}</span>
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
              {t('audit_page.form.alternative_contact.title')}
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
