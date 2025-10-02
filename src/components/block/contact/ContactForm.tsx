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

const ContactForm = () => {
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
  );
};

export default ContactForm;
