import React from 'react';

const Logo: React.FC<{ size?: 'small' | 'medium' | 'large' }> = ({ size = 'medium' }) => {
  const sizeClasses = {
    small: 'h-12 w-20',
    medium: 'h-16 w-24', 
    large: 'h-18 w-28'
  };

  return (
    <div className="flex items-center">
      <img 
        src="/logo/logo-Upadtes.png" 
        alt="Loan Expert Logo" 
        className={`${sizeClasses[size]} rounded-xl object-contain hover:scale-105 transition-transform duration-300`}
      />
    </div>
  );
};

export default Logo;
