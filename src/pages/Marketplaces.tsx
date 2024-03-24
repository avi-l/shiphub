import React from 'react';
import SearchFilter from '../components/SearchFilter';
import SelectMarketplace from '../components/SelectMarketplace';
import OrdersTable from '../components/OrdersTable';
import { MP_TABLE_DATA } from '../consts';

const Marketplaces: React.FC = () => {
  return (
    <>
      <div className='text-customOrange font-extrabold text-2xl uppercase flex-row flex w-full p-4'>
        Marketplaces
      </div>
      <div className='flex flex-col gap-4'>
        <SelectMarketplace />
        <SearchFilter />
        <OrdersTable
          headings={MP_TABLE_DATA.headings}
          rowNames={MP_TABLE_DATA.rowNames}
          orders={MP_TABLE_DATA.orders}
        />
      </div>
    </>
  );
};

export default Marketplaces;
