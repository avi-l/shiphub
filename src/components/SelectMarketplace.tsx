import React, { useState } from 'react';
import { selectMPOptions } from '../consts';
import downArrow from '../assets/downArrow.svg';
import Dropdown from './Dropdown';
import useDropdownState from '../hooks/useDropdownState';
const SelectMarketplace: React.FC = () => {
  const { isDropOpen, toggleDropdown } = useDropdownState();
  const [marketplace, setMarketplace] = useState('');
  const handleApply = () => {
    console.log(marketplace);
  };
  return (
    <>
      <div className='w-full gap-2 flex-wrap bg-white shadow-drop rounded-2xl flex items-center p-4 border-b border-gray-200 text-gray-600'>
        <Dropdown
          label='Select a Marketplace'
          defaultValue={`${selectMPOptions[0].label}: ${selectMPOptions[0].store}`}
          items={selectMPOptions}
          labelClassName='relative bg-none'
          icon={downArrow}
          buttonClassName='flex font-light  items-center px-4 py-2 rounded-md bg-white border border-gray-300 h-[38px] w-[250px] relative shadow-drop'
          iconBoxClassName='cursor-pointer absolute right-0 flex items-center rounded-r-md bg-customGray flex items-center justify-center w-[48px] h-[38px]'
          dropdownClassName=' absolute right-0 mt-10 z-50  w-48 bg-white border border-gray-300 rounded-md shadow-lg'
          itemClassName='block px-4 py-2 text-sm hover:bg-gray-100'
          onChange={(value) => setMarketplace(value)}
          isOpen={isDropOpen === 'Ship Date (from-to)'}
          toggleDropdown={() => toggleDropdown('Ship Date (from-to)')}
        />

        <button
          onClick={handleApply}
          className='shadow-drop  h-[37px] uppercase ml-2 px-4 py-1 text-sm text-customGray  rounded hover:bg-customOrange'
        >
          Edit
        </button>
        <button
          onClick={handleApply}
          className='shadow-drop text-customGray h-[37px] uppercase ml-2 px-4 py-1 text-sm   rounded hover:bg-customOrange'
        >
          Refresh
        </button>
      </div>
    </>
  );
};

export default SelectMarketplace;
