import FormationHero from '@/components/block/formation/FormationHero';
import FormationComingSoon from '@/components/block/formation/FormationComingSoon';

export default function Formations() {
  return (
    <div>
      <FormationHero />
      
      <div className="mx-auto px-4 sm:px-6 lg:px-16">
        <FormationComingSoon />
      </div>
    </div>
  );
}