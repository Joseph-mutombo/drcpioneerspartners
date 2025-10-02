const ContactMap = () => {
  return (
    <div className="bg-white mt-8 rounded-lg shadow-sm">
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
  );
};

export default ContactMap;
