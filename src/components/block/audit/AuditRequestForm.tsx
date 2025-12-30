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
  CheckCircle,
  Heart,
  Globe,
  Users
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
    agreeTerms: z.boolean().refine(val => val === true, {
      message: t('audit_page.form.validation.agree_terms_required')
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

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    toast({
      title: t('audit_page.form.success.title'),
      description: t('audit_page.form.success.description'),
    });
  };

  const serviceTypes = [
    { value: 'cx_audit', label: t('audit_page.form.service_types.cx_audit') },
    { value: 'service_excellence', label: t('audit_page.form.service_types.service_excellence') },
    { value: 'digital_experience', label: t('audit_page.form.service_types.digital_experience') },
    { value: 'employee_wellbeing', label: t('audit_page.form.service_types.employee_wellbeing') },
    { value: 'complete_audit', label: t('audit_page.form.service_types.complete_audit') },
    { value: 'other', label: t('audit_page.form.service_types.other') }
  ];

  const companySizes = [
    { value: 'micro', label: t('audit_page.form.company_sizes.micro') },
    { value: 'small', label: t('audit_page.form.company_sizes.small') },
    { value: 'medium', label: t('audit_page.form.company_sizes.medium') },
    { value: 'large', label: t('audit_page.form.company_sizes.large') }
  ];

  const industries = [
    { value: 'manufacturing', label: t('audit_page.form.industries.manufacturing') },
    { value: 'services', label: t('audit_page.form.industries.services') },
    { value: 'construction', label: t('audit_page.form.industries.construction') },
    { value: 'healthcare', label: t('audit_page.form.industries.healthcare') },
    { value: 'food', label: t('audit_page.form.industries.food') },
    { value: 'technology', label: t('audit_page.form.industries.technology') },
    { value: 'retail', label: t('audit_page.form.industries.retail') },
    { value: 'other', label: t('audit_page.form.industries.other') }
  ];

  const timelines = [
    { value: 'immediate', label: t('audit_page.form.timelines.immediate') },
    { value: '1_month', label: t('audit_page.form.timelines.1_month') },
    { value: '3_months', label: t('audit_page.form.timelines.3_months') },
    { value: '6_months', label: t('audit_page.form.timelines.6_months') },
    { value: 'flexible', label: t('audit_page.form.timelines.flexible') }
  ];

  const budgets = [
    { value: 'under_5k', label: t('audit_page.form.budgets.under_5k') },
    { value: '5k_10k', label: t('audit_page.form.budgets.5k_10k') },
    { value: '10k_25k', label: t('audit_page.form.budgets.10k_25k') },
    { value: '25k_50k', label: t('audit_page.form.budgets.25k_50k') },
    { value: 'over_50k', label: t('audit_page.form.budgets.over_50k') },
    { value: 'discuss', label: t('audit_page.form.budgets.discuss') }
  ];

  const getServiceIcon = (serviceType: string) => {
    switch (serviceType) {
      case 'cx_audit':
        return Users;
      case 'service_excellence':
        return CheckCircle;
      case 'digital_experience':
        return Globe;
      case 'employee_wellbeing':
        return Heart;
      default:
        return FileText;
    }
  };

  return (
    <div className="py-20 bg-gray-50" id="audit-request-form">
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
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
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
              {/* Type de service */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                  <FileText className="w-6 h-6 text-brand-blue" />
                  {t('audit_page.form.sections.service_type')}
                </h3>
                <FormField
                  control={form.control}
                  name="serviceType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('audit_page.form.labels.service_type')}</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder={t('audit_page.form.placeholders.select_service_type')} />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {serviceTypes.map((service) => {
                            const IconComponent = getServiceIcon(service.value);
                            return (
                              <SelectItem key={service.value} value={service.value}>
                                <div className="flex items-center gap-2">
                                  <IconComponent className="w-4 h-4" />
                                  {service.label}
                                </div>
                              </SelectItem>
                            );
                          })}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Informations de contact */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                  <Building2 className="w-6 h-6 text-brand-blue" />
                  {t('audit_page.form.sections.contact_info')}
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
                          <Input type="email" placeholder={t('audit_page.form.placeholders.email')} {...field} />
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

              {/* Détails de l'audit */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                  <FileText className="w-6 h-6 text-brand-blue" />
                  {t('audit_page.form.sections.audit_details')}
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="companySize"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t('audit_page.form.labels.company_size')}</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder={t('audit_page.form.placeholders.select_company_size')} />
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
                  <FormField
                    control={form.control}
                    name="industry"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t('audit_page.form.labels.industry')}</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder={t('audit_page.form.placeholders.select_industry')} />
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
                    name="timeline"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t('audit_page.form.labels.timeline')}</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder={t('audit_page.form.placeholders.select_timeline')} />
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
                              <SelectValue placeholder={t('audit_page.form.placeholders.select_budget')} />
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
              </div>

              {/* Objectifs et informations supplémentaires */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                  <FileText className="w-6 h-6 text-brand-blue" />
                  {t('audit_page.form.sections.project_details')}
                </h3>
                <div className="space-y-6">
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
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-brand-blue" />
                  {t('audit_page.form.sections.conditions')}
                </h3>
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
                            {t('audit_page.form.conditions.agree_terms')}
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
                            {t('audit_page.form.conditions.agree_newsletter')}
                          </FormLabel>
                        </div>
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              {/* Bouton de soumission */}
              <div className="text-center">
                <Button 
                  type="submit" 
                  className="px-8 py-4 bg-brand-blue text-white font-semibold rounded-lg hover:bg-yellow-600 transition-colors duration-200"
                >
                  <Send className="w-5 h-5 mr-2" />
                  {t('audit_page.form.submit_button')}
                </Button>
              </div>
            </form>
          </Form>
        </div>

        {/* Section contact alternatif */}
        <div 
          className="mt-12 text-center"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="600"
        >
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {t('audit_page.form.alternative_contact.title')}
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              {t('audit_page.form.alternative_contact.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:contact@drcpioneers.com" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition-colors duration-200"
              >
                <Mail className="w-5 h-5" />
                contact@drcpioneers.com
              </a>
              <a 
                href="tel:+243862121612" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition-colors duration-200"
              >
                <Phone className="w-5 h-5" />
                +243 862121612
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuditRequestForm;