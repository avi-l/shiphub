import React from 'react';
import SearchFilter from '../components/SearchFilter';
import SelectMarketplace from '../components/SelectMarketplace';
import OrdersTable from '../components/OrdersTable';
import { mpTableData } from '../consts';

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
          headings={mpTableData.headings}
          rowNames={mpTableData.rowNames}
          data={mpTableData.data}
        />
      </div>
    </>
  );
};

export default Marketplaces;
