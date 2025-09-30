
import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  light?: boolean;
}

const SectionTitle = ({ title, subtitle, light = false }: SectionTitleProps) => {
  return (
    <div className="section-title">
      <h2 className="text-dark-950 text-4xl font-bold text-center">{title}</h2>
      {subtitle && (
        <p className="mt-4 text-gray-600 max-w-2xl text-center mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;