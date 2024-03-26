import React from 'react';
import { ColorClasses } from '../../types';
import { colorClasses } from '../../consts';

interface BadgeProps {
  color: keyof ColorClasses;
  text: string;
}

const Badge: React.FC<BadgeProps> = ({ color, text }) => {
  const badgeClasses = `inline-flex justify-center items-center align-center 
    rounded-md px-2 py-1 
    text-xs font-medium ${colorClasses[color as keyof ColorClasses]}
    ring-1 ring-inset ${
      colorClasses[color as keyof ColorClasses]
    } h-[38px] w-[96px]`;

  return <span className={badgeClasses}>{text}</span>;
};

export default Badge;
