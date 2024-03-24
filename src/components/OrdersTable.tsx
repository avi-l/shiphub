import React, { useState } from 'react';
import { Popover } from 'react-tiny-popover';
import Badge from './ui/Badge';
import { MP_TABLE_DATA } from '../types';

const OrdersTable: React.FC<MP_TABLE_DATA> = ({
  headings,
  rowNames,
  orders,
}) => {
  const [selectAll, setSelectAll] = useState<boolean>(false);
  const [isPopoverOpen, setIsPopoverOpen] = useState<boolean>(false);
  const [selectedRows, setSelectedRows] = useState<number[]>([]);

  const toggleSelectAll = () => {
    setSelectAll((prev) => !prev);
    if (selectAll) {
      setSelectedRows([]);
    } else {
      setSelectedRows(orders.map((_, index) => index));
    }
  };

  const toggleSelectRow = (rowIndex: number) => {
    if (selectedRows.includes(rowIndex)) {
      setSelectedRows(selectedRows.filter((row) => row !== rowIndex));
    } else {
      setSelectedRows([...selectedRows, rowIndex]);
    }
  };
  if (!orders) return null;
  return (
    <>
      <table className='text-sm'>
        <thead className='w-full '>
          <tr className='text-customGray '>
            <th className='flex justify-center items-center h-20 pt-[18px]'>
              <div className='flex flex-col items-center'>
                <span className=' '>SELECT</span>
                <input
                  type='checkbox'
                  className='mt-1'
                  checked={selectAll}
                  onChange={toggleSelectAll}
                />
              </div>
            </th>
            {headings.map((heading, index) => (
              <th key={index} className='text-left'>
                {heading}
              </th>
            ))}
          </tr>
        </thead>
      </table>

      <table className='shadow-drop rounded-2xl text-sm overflow-hidden'>
        <tbody>
          {orders.map((order, index) => (
            <tr
              key={index}
              className={`${
                index % 2 === 0 ? 'bg-white' : 'bg-gray-100'
              } text-customGray`}
            >
              <td className='p-4 flex text-center flex-col justify-center items-center'>
                <div className='flex flex-col items-center'>
                  <input
                    type='checkbox'
                    className=' ml-3'
                    checked={selectedRows.includes(index)}
                    onChange={() => toggleSelectRow(index)}
                  />
                </div>
              </td>
              {rowNames.map((rowName, rowIndex) => (
                <td key={rowIndex} className='p-2'>
                  {rowName === 'status' ? (
                    <div>
                      <Badge
                        color={order.status.badgeColor}
                        text={order.status.status}
                      />
                      <p>Order: {order.status.orderNum}</p>
                      <ul>
                        {order.status.orderOpts.map((opt, optIndex) => (
                          <li key={optIndex}>
                            <button onClick={() => console.log(opt.handler)}>
                              <span className='underline'>{opt.label}</span>
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : rowName === 'dateTime' ? (
                    <>
                      <p>{`${order.dateTime.date}`}</p>
                      <p>{`${order.dateTime.time}`}</p>
                    </>
                  ) : rowName === 'service' ? (
                    <div>
                      <span className='flex items-center'>
                        <img
                          src={order.service.icon}
                          alt='Service Icon'
                          className='h-full mr-2'
                        />
                        <span className='mt-1'>{order.service.type}</span>
                      </span>
                      <p>{`${order.service.numPkgs} package`}</p>
                      <span className='flex  gap-2'>
                        <span className='font-bold'>Tracking: </span>
                        <span className='underline'>
                          {order.service.tracking}
                        </span>

                        <img src={order.service.fileIcon} alt='files icon' />
                      </span>

                      <span onClick={() => setIsPopoverOpen(!isPopoverOpen)}>
                        <span className='font-bold'>Estimate: </span>
                      </span>
                      {order.service.estimate}
                      <Popover
                        isOpen={isPopoverOpen}
                        positions={['top', 'bottom', 'left', 'right']}
                        content={
                          <div className='bg-white text-customGray'>
                            {JSON.stringify(order.service.details)}
                          </div>
                        }
                      >
                        <span className='underline ml-2'>View Details</span>
                      </Popover>
                    </div>
                  ) : rowName === 'fromAddress' || rowName === 'toAddress' ? (
                    <>
                      <p className='font-bold'>{order[rowName].name}</p>
                      <p>{order[rowName].street}</p>
                      <p>{order[rowName].town}</p>
                      <p> {order[rowName].country}</p>
                    </>
                  ) : (
                    ''
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default OrdersTable;
