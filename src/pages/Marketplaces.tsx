import React from 'react';
import SearchFilter from '../components/SearchFilter';
import SelectMarketplace from '../components/SelectMarketplace';
import OrdersTable from '../components/OrdersTable';
import { MP_TABLE_DATA } from '../consts';
const Marketplaces: React.FC = () => {
  return (
    <>
      <div className=' w-full bg-white '>
        <div
          className=' text-customOrange font-extrabold 
          text-2xl uppercase p-4'
        >
          Marketplaces
        </div>
        <div className='flex mt-2 flex-col gap-4'>
          <SelectMarketplace />
          <SearchFilter />
        </div>
      </div>
      <div
        className='bottom-20 mt-4 h-[320px] 2xl:h-[450px] shadow-drop rounded-2xl 
          w-full  overflow-y-auto  '
        style={{ scrollbarWidth: 'none' }}
      >
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
