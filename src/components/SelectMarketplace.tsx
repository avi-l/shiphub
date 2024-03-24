import React, { useState } from 'react';
import { SELECT_MP_PTIONS } from '../consts';
import downArrow from '../assets/downArrow.svg';
import Dropdown from './ui/Dropdown';
import useDropdownState from '../hooks/useDropdownState';
import refreshIcon from '../assets/refresh.svg';
import plusIcon from '../assets/plus.svg';
import NewMPModal from './NewMPModal';

const SelectMarketplace: React.FC = () => {
  const { isDropOpen, toggleDropdown } = useDropdownState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleApply = () => {
    console.log('');
  };
  const addNewMP = [
    {
      label: <div className='p-2'>ADD NEW MARKETPLACE</div>,
      icon: <img src={plusIcon} alt='plus' />,
      action: () => setIsModalOpen(true),
    },
  ];
  return (
    <>
      {' '}
      {isModalOpen && (
        <NewMPModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
      <div className='w-full gap-2 flex-wrap bg-white shadow-drop rounded-2xl flex items-center p-4 border-b border-gray-200 text-gray-600'>
        <Dropdown
          label='Select a Marketplace'
          defaultValue={`Shopify- Cookies Store`}
          items={[...SELECT_MP_PTIONS, ...addNewMP]}
          labelClassName='relative bg-none'
          icon={downArrow}
          buttonClassName='flex font-light ml-2 items-center px-4 py-2 rounded-md bg-white border border-gray-300 h-[38px] w-[250px] relative shadow-drop'
          iconBoxClassName='cursor-pointer absolute right-0 flex items-center rounded-r-md bg-customGray flex items-center justify-center w-[48px] h-[38px]'
          dropdownClassName=' absolute right-0 mt-10 z-50  w-54 bg-white border border-gray-300 rounded-md shadow-lg'
          itemClassName='block px-4 py-2 text-sm hover:bg-gray-100'
          isOpen={isDropOpen === 'Ship Date (from-to)'}
          toggleDropdown={() => toggleDropdown('Ship Date (from-to)')}
        />
        <button
          onClick={handleApply}
          className='shadow-drop items-center justify-center font-bold  rounded-lg border
           border-gray-600 h-[37px] uppercase ml-2 px-4 py-1 
           text-sm text-customGray  hover:bg-customOrange
            hover:text-white hover:border-white'
        >
          Edit
        </button>
        <button
          onClick={handleApply}
          className='shadow-drop flex items-center justify-center w-[105px] 
          font-bold rounded-lg border border-gray-600 text-customGray 
          h-[37px] uppercase ml-2 px-4 py-1 text-sm hover:bg-customOrange
           hover:text-white hover:border-white'
        >
          <img src={refreshIcon} alt='Refresh Icon' className='mr-1' />
          Refresh
        </button>
        <span className=' underline text-sm  cursor-pointer'>
          {' '}
          What's this?
        </span>
        <div className='flex flex-wrap w-full gap-2 mt-2 ml-2'>
          <div className='uppercase font-bold text-gray-600'>
            Unfulfilled: <span className='font-normal'>42</span>
          </div>
          <div className='uppercase font-bold text-gray-600'>
            labels issued: <span className='font-normal'>42</span>
          </div>

          <div className='uppercase font-bold text-red-800'>
            errors: <span className='font-normal'>42</span>
          </div>
        </div>
        <div className='flex flex-wrap w-full gap-2 text-sm mt-2 ml-2'>
          <div className=''>
            Your carrier and service of choice is UPS/UPS Ground.{' '}
          </div>
          <div className='underline cursor-pointer'>Click here</div>to change it
        </div>
      </div>
    </>
  );
};

export default SelectMarketplace;
