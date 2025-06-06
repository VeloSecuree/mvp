
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  title?: React.ReactNode; // Changed from string to React.ReactNode
  titleClassName?: string;
}

export const Card: React.FC<CardProps> = ({ children, className, title, titleClassName }) => {
  return (
    <div className={`bg-white shadow-lg rounded-xl overflow-hidden ${className || ''}`}>
      {title && (
        <div className={`px-6 py-4 border-b border-brand-gray-light ${titleClassName || ''}`}>
          {typeof title === 'string' ? (
             <h3 className="text-lg font-semibold text-brand-gray-dark">{title}</h3>
          ) : (
            title // Render ReactNode directly
          )}
        </div>
      )}
      <div className="p-6">
        {children}
      </div>
    </div>
  );
};
