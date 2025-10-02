
import ContactHero from '@/components/block/contact/ContactHero';
import ContactForm from '@/components/block/contact/ContactForm';
import ContactInfo from '@/components/block/contact/ContactInfo';
import ContactMap from '@/components/block/contact/ContactMap';

const Contact = () => {
  return (
    <div>
      <ContactHero />
      
      <div className="mx-auto px-4 sm:px-6 lg:px-16 py-16">
        <div className="grid md:grid-cols-2 gap-16 items-start mb-16">
          <ContactForm />
          
          <div>
            <ContactInfo />
            <ContactMap />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
