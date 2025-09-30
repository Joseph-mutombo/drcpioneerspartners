
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
import { Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import callCenter from '../assets/images/call-ce.png';

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
        <div className="container mx-auto flex flex-row items-center justify-between gap-16">
          <div
            className="text-cente py-16 max-w-2xl"
            data-aos="fade-right"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            <h1 className="text-5xl font-bold">{t('pages.contact_title')}</h1>
            <p className="mt-4 text-lg text-white/90">Pour toute question ou demande de service, n'hésitez pas à nous contacter. Notre équipe est à votre disposition pour vous aider.</p>
          </div>
          <img src={callCenter} data-aos="fade-left" alt="call center" style={{ width: '35%', height: '35%' }} className="object-cover" />
        </div>
      </div>

      <div className="container mx-auto py-16">
        <div className="grid md:grid-cols-2 gap-16 items-start mb-16">
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

          <div>
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
              <h2 className="text-2xl font-bold mb-6">{t('contact_form.info_title')}</h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">{t('contact_form.phone')}</h3>
                    <a href="tel:+243978847886" className="text-gray-600 hover:text-primary transition-colors">+243 978 847 886</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">{t('contact_form.technical_support')}</h3>
                    <a href="mailto:suport@drcpioneers.com" className="text-gray-600 hover:text-primary transition-colors">suport@drcpioneers.com</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="w-6 h-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">Adresse :</h3>
                    <p>60, Boulevard du 30 juin, Immeuble Mayumbe, Niveau 6, Appartement 33</p>
                    <p>C/Gombe, Kinshasa, RDC</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white mt-8  rounded-lg shadow-sm">
              <div className="relative w-full h-96 rounded-lg overflow-hidden">
                <iframe
                  src="https://maps.google.com/maps?q=60,%20Boulevard%20du%2030%20juin,%20Immeuble%20mayumbe,%20niveau%206,%20appartement%2033,%20C/Gombe,%20Kinshasa,%20RDC&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localisation DRC Pioneers - Kinshasa, RDC"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
