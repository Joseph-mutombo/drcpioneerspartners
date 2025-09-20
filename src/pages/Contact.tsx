
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
import { Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const { t } = useTranslation();

  const formSchema = z.object({
    name: z.string().min(1, { message: t('contact_form.validation.required') }),
    email: z.string().email({ message: t('contact_form.validation.invalid_email') }),
    company: z.string().min(1, { message: t('contact_form.validation.required') }),
    service: z.string().min(1, { message: t('contact_form.validation.required') }),
    message: z.string().min(1, { message: t('contact_form.validation.required') }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      service: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: t('contact_form.success_title'),
      description: t('contact_form.success_description'),
    });
    form.reset();
  }

  const services = [
    { value: "certifications", label: t('contact_form.service_certifications') },
    { value: "formations", label: t('contact_form.service_formations') },
    { value: "other", label: t('contact_form.service_other') },
  ];

  return (
    <div>
      <div className="bg-brand-blue text-white">
        <div className="container mx-auto py-16 text-center">
          <h1 className="text-4xl font-bold">{t('pages.contact_title')}</h1>
          <p className="mt-4 text-lg text-gray-600">{t('pages.contact_content')}</p>
        </div>
      </div>
      
      <div className="container mx-auto py-16">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-2xl font-bold mb-6">{t('contact_form.title')}</h2>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('contact_form.name')}</FormLabel>
                    <FormControl>
                      <Input placeholder={t('contact_form.name_placeholder')} {...field} />
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
                    <FormLabel>{t('contact_form.email')}</FormLabel>
                    <FormControl>
                      <Input placeholder={t('contact_form.email_placeholder')} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('contact_form.company')}</FormLabel>
                    <FormControl>
                      <Input placeholder={t('contact_form.company_placeholder')} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="service"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('contact_form.service')}</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder={t('contact_form.service_placeholder')} />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {services.map((service) => (
                           <SelectItem key={service.value} value={service.value}>{service.label}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('contact_form.message')}</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder={t('contact_form.message_placeholder')}
                        className="min-h-[120px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">{t('contact_form.submit')}</Button>
            </form>
          </Form>
        </div>
        
        <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
          <h2 className="text-2xl font-bold mb-6">{t('contact_form.info_title')}</h2>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Phone className="w-6 h-6 text-primary"/>
              <div>
                <h3 className="font-semibold">{t('contact_form.phone')}</h3>
                <a href="tel:+243978847886" className="text-gray-600 hover:text-primary transition-colors">+243 978 847 886</a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="w-6 h-6 text-primary"/>
              <div>
                <h3 className="font-semibold">{t('contact_form.technical_support')}</h3>
                <a href="mailto:suport@drcpioneers.com" className="text-gray-600 hover:text-primary transition-colors">suport@drcpioneers.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default Contact;
