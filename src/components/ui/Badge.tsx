import React from 'react';
import { COLORS } from '../../types';

interface BadgeProps {
  color: COLORS;
  text: string;
}

const Badge: React.FC<BadgeProps> = ({ color, text }) => {
  const bgColor = `bg-${color}-50`;
  const textColor = `text-${color}-700`;
  const ringColor = `ring-${color}-600/10`;

  const badgeClasses = `inline-flex justify-center items-center align-center 
    ${bgColor} rounded-md px-2 py-1 
    text-xs font-medium ${textColor} 
    ring-1 ring-inset ${ringColor} h-[38px] w-[96px]`;

  console.log(badgeClasses);
  return <span className={badgeClasses}>{text}</span>;
};

export default Badge;
