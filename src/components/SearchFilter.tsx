import React, { useState } from 'react';
import Dropdown from './ui/Dropdown';
import useDropdownState from '../hooks/useDropdownState';
import downArrow from '../assets/downArrow.svg';
import magnifyingGlass from '../assets/magnifyingGlass.svg';
import calendar from '../assets/calendar.svg';

import { FILTER_OPTIONS, MP_BULK_ACTIONS } from '../consts';
import Input from './ui/Input';
const SearchFilter: React.FC = () => {
  const { isDropOpen, toggleDropdown } = useDropdownState();
  const [keyword, setKeyword] = useState('');

  const [selectedDate, setSelectedDate] = useState('');

  const handleApply = () => {
    console.log('Keyword:', keyword);
    console.log('Selected Date:', selectedDate);
  };

  return (
    <>
      <div className='w-full gap-2 flex-wrap bg-white shadow-drop rounded-2xl flex items-center p-4 border-b border-gray-200 text-gray-600'>
        <Input
          labelClassName='p-2 mr-2'
          label='Keyword Search'
          type='text'
          value={keyword}
          onChange={(e) => setKeyword(e)}
          placeholder='Type Keyword or #'
          inputClassName='bg-white shadow-drop h-[38px] rounded-md px-2 mr-2 text-sm border border-gray-200 w-[310px] text-gray-600 focus:outline-none focus:border-gray-500'
          icon={magnifyingGlass}
          iconBoxClassName='hover:bg-customOrange cursor-pointer absolute right-0 flex items-center rounded-r-md bg-customGray flex items-center justify-center w-[48px] h-[38px]'
        />
        <Dropdown
          label='Filter By'
          defaultValue='Ship Date (from-to)'
          items={FILTER_OPTIONS}
          labelClassName='relative bg-none'
          icon={downArrow}
          buttonClassName='flex font-light  items-center px-4 py-2 rounded-md bg-white border border-gray-300 h-[38px] w-[250px] relative shadow-drop'
          iconBoxClassName='hover:bg-customOrange cursor-pointer absolute right-0 flex items-center rounded-r-md bg-customGray flex items-center justify-center w-[48px] h-[38px]'
          dropdownClassName=' absolute right-0 mt-10 z-50  w-48 bg-white border border-gray-300 rounded-md shadow-lg'
          itemClassName='block px-4 py-2 text-sm hover:bg-gray-100'
          isOpen={isDropOpen === 'Ship Date (from-to)'}
          toggleDropdown={() => toggleDropdown('Ship Date (from-to)')}
        />

        <Input
          labelClassName='p-2 '
          type='date'
          value={selectedDate}
          onChange={(e) => setSelectedDate(e)}
          inputClassName='cursor-pointer relative bg-white shadow-drop h-[36px] rounded-md px-2 mr-2 text-sm  text-gray-600 focus:outline-none focus:border-gray-500'
          icon={calendar}
          iconBoxClassName='cursor-pointer absolute right-0 flex items-center 
          rounded-r-md  flex items-center justify-center w-[48px] '
        />

        <div className='flex flex-wrap '>
          <Dropdown
            label='Bulk Actions'
            defaultValue='Create Labels'
            items={MP_BULK_ACTIONS}
            icon={downArrow}
            labelClassName='relative bg-none gap-6'
            buttonClassName='flex font-light ml-2  items-center px-4 py-2 rounded-md bg-white border border-gray-300 text-gray-600 h-[38px] w-[250px] relative shadow-drop'
            iconBoxClassName='hover:bg-customOrange absolute top-0 right-0 bottom-0 rounded-r-md bg-customGray flex items-center justify-center w-[48px]'
            dropdownClassName='absolute right-0 mt-10 z-50  w-48 bg-white border border-gray-300 rounded-md shadow-lg text-gray-600'
            itemClassName='block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100'
            isOpen={isDropOpen === 'Bulk Actions'}
            toggleDropdown={() => toggleDropdown('Bulk Actions')}
          />
          <button
            onClick={handleApply}
            className='shadow-drop font-bold  h-[37px] uppercase ml-2 px-4 py-1 text-sm text-white bg-customGray rounded-lg hover:bg-customOrange'
          >
            Apply
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchFilter;
