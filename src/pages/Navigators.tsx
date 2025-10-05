import React from 'react';
import NavigatorHero from '@/components/block/navigators/NavigatorHero';
import NavigatorFeatures from '@/components/block/navigators/NavigatorFeatures';
import NavigatorTypes from '@/components/block/navigators/NavigatorTypes';
import NavigatorIndustries from '@/components/block/navigators/NavigatorIndustries';
import NavigatorImplementation from '@/components/block/navigators/NavigatorImplementation';
import NavigatorBenefits from '@/components/block/navigators/NavigatorBenefits';
import NavigatorCTA from '@/components/block/navigators/NavigatorCTA';

const Navigators = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavigatorHero />
      <NavigatorFeatures />
      <NavigatorTypes />
      <NavigatorIndustries />
      <NavigatorImplementation />
      <NavigatorBenefits />
      <NavigatorCTA />
    </div>
  );
};

export default Navigators;
