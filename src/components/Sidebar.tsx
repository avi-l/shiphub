import { useNavigate } from 'react-router-dom';

export interface SidebarProps {
  items: {
    label: string;
    path: string;
  }[];
}

const Sidebar: React.FC<SidebarProps> = ({ items }) => {
  const navigate = useNavigate();
  const handleMenuItemClick = (path: string) => {
    navigate(path);
  };

  return (
    <div className='bg-white text-[13px] font-medium w-40 justify-start items-start h-screen border-r border-gray-300 rounded-r-2xl shadow-drop'>
      {items.map((item, index) => (
        <div
          key={index}
          onClick={() => handleMenuItemClick(item.path)}
          className='h-[48px] relative cursor-pointer px-4 py-4 w-full text-gray-600 hover:text-customOrange group whitespace-nowrap '
        >
          <div className='absolute left-0 top-0 h-full w-[6px] bg-customOrange opacity-0 group-hover:opacity-100'></div>
          {item.label}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
