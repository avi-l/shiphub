// Navbar.tsx
import React from 'react';

import Dropdown from './ui/Dropdown';
import downArrow from '../assets/downArrow.svg';
import downArrowSolid from '../assets/downArrowSolid.svg';
import useDropdownState from '../hooks/useDropdownState';
import {
  BILLING_ENTITY_OPTIONS,
  CUSTOMERS_OPTIONS,
  USER_OPTIONS,
} from '../consts';
const Navbar: React.FC = () => {
  const { isDropOpen, toggleDropdown } = useDropdownState();
  return (
    <>
      <nav className='flex  items-center p-4 gap-2'>
        <img src='/shiphub.svg' alt='Shiphub Logo' />
        <Dropdown
          defaultValue='Hi, Cookies Kids!'
          isOpen={isDropOpen === 'Hi, Cookies Kids!'}
          toggleDropdown={() => toggleDropdown('Hi, Cookies Kids!')}
          items={USER_OPTIONS}
          icon={downArrowSolid}
          labelClassName='relative bg-none'
          buttonClassName='flex font-light  items-center rounded-md bg-[#eeeeee] text-gray-600 h-[38px]'
          iconBoxClassName='p-1 m-1  '
          dropdownClassName='absolute right-0 mt-10 z-50 w-48 bg-white border border-gray-300 rounded-md shadow-lg text-gray-600'
          itemClassName='block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100'
        />
        <Dropdown
          defaultValue='Customers'
          isOpen={isDropOpen === 'Customers'}
          toggleDropdown={() => toggleDropdown('Customers')}
          items={CUSTOMERS_OPTIONS}
          labelClassName='relative'
          icon={downArrow}
          buttonClassName='flex font-light  items-center px-4 py-2 rounded-md bg-white border border-gray-300 text-gray-600 h-[38px] w-[292px] relative shadow-drop'
          iconBoxClassName='absolute top-0 right-0 bottom-0 rounded-r-md bg-customOrange flex items-center justify-center w-[48px]'
          dropdownClassName='absolute right-0 mt-10 z-50  w-48 bg-white border border-gray-300 rounded-md shadow-lg text-gray-600'
          itemClassName='block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100'
        />
        <Dropdown
          defaultValue='Billing Entity'
          isOpen={isDropOpen === 'Billing Entity'}
          toggleDropdown={() => toggleDropdown('Billing Entity')}
          items={BILLING_ENTITY_OPTIONS}
          labelClassName='relative'
          icon={downArrow}
          buttonClassName='flex font-light  items-center px-4 py-2 rounded-md bg-white border border-gray-300 text-gray-600 h-[38px] w-[292px] relative shadow-drop'
          iconBoxClassName='absolute top-0 right-0 bottom-0 rounded-r-md bg-customOrange flex items-center justify-center w-[48px]'
          dropdownClassName='absolute right-0 mt-10 z-50  w-48 bg-white border border-gray-300 rounded-md shadow-lg text-gray-600'
          itemClassName='block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100'
        />
      </nav>
    </>
  );
};

export default Navbar;
