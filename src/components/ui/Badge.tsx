import React from 'react';

interface BadgeProps {
  color: string;
  text: string;
}

const Badge: React.FC<BadgeProps> = ({ color, text }) => {
  const badgeClasses = `inline-flex items-center rounded-md bg-${color}-50 px-2 py-1 text-xs font-medium text-${color}-700 ring-1 ring-inset ring-${color}-600/10`;

  return <span className={badgeClasses}>{text}</span>;
};

export default Badge;
