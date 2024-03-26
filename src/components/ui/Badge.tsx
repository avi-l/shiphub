import { COLORS } from '../../types';

interface BadgeProps {
  color: COLORS;
  text: string;
}

const Badge: React.FC<BadgeProps> = ({ color, text }) => {
  const colorClasses = {
    gray: 'bg-gray-50 text-gray-600 ring-gray-500/10',
    red: 'bg-red-50 text-red-700 ring-red-600/10',
    yellow: 'bg-yellow-50 text-yellow-800 ring-yellow-600/20',
    green: 'bg-green-50 text-green-700 ring-green-600/20',
    blue: 'bg-blue-50 text-blue-700 ring-blue-700/10',
    indigo: 'bg-indigo-50 text-indigo-700 ring-indigo-700/10',
    purple: 'bg-purple-50 text-purple-700 ring-purple-700/10',
    pink: 'bg-pink-50 text-pink-700 ring-pink-700/10',
  };

  const badgeClasses = `inline-flex justify-center items-center align-center 
    rounded-md px-2 py-1 
    text-xs font-medium ${colorClasses[color]}
    ring-1 ring-inset ${colorClasses[color]} h-[38px] w-[96px]`;

  return <span className={badgeClasses}>{text}</span>;
};

export default Badge;
