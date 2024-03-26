import React from 'react';
import { badgeColorClasses } from '../../consts';

interface BadgeProps {
  color: string;
  text: string;
}

const Badge: React.FC<BadgeProps> = ({ color, text }) => {
  const badgeClasses = `inline-flex justify-center items-center align-center 
    rounded-md px-2 py-1 
    text-xs font-medium ${badgeColorClasses(color)}
    ring-1 ring-inset ${badgeColorClasses(color)} h-[38px] w-[96px]`;

  return <span className={badgeClasses}>{text}</span>;
};

export default Badge;
