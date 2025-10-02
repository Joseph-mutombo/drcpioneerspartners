import { useTranslation } from 'react-i18next';
import callCenter from '@/assets/images/certificat.png';
import formation from '@/assets/images/professor.png';

const FormationHero = () => {
  const { t } = useTranslation();

  return (
    <div 
    className="text-white overflow-hidden"
    style={{
      backgroundImage: 'linear-gradient(rgba(13, 27, 62, 0.95), rgba(13, 27, 62, 0.8)), url("' + formation + '")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}>
      <div className="mx-auto px-4 sm:px-6 pt-16 lg:px-16 flex flex-row items-center justify-between gap-16">
        <div
          className="text-cente py-16 max-w-2xl"
        //   data-aos="fade-right"
        //   data-aos-duration="800"
        //   data-aos-delay="200"
        >
          <h1 data-aos="fade-right" className="text-5xl font-bold">Formations</h1>
          <p data-aos="fade-up" className="mt-4 text-lg text-white/90">
            Profitez des meilleures formations en RDC couplées d'une certification internationale.
          </p>
        </div>
        <img 
          src={callCenter} 
          data-aos="fade-left" 
          alt="call center" 
          style={{ width: '35%', height: '35%' }} 
          className="hidden lg:flex object-cover" 
        />
      </div>
    </div>
  );
};

export default FormationHero;
