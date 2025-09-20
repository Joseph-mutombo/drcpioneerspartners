
import { useTranslation } from 'react-i18next';

const CaseStudies = () => {
  const { t } = useTranslation();
  return (
    <div className="container mx-auto py-16 text-center">
      <h1 className="text-4xl font-bold">{t('pages.casestudies_title')}</h1>
      <p className="mt-4 text-lg text-gray-600">{t('pages.casestudies_content')}</p>
    </div>
  );
};

export default CaseStudies;
