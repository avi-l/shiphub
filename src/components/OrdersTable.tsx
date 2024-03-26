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
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const [selectedPopover, setSelectedPopover] = useState<number[]>([]);

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
  const toggleSelectPop = (rowIndex: number) => {
    if (selectedPopover.includes(rowIndex)) {
      setSelectedPopover(selectedPopover.filter((row) => row !== rowIndex));
    } else {
      setSelectedPopover([...selectedPopover, rowIndex]);
    }
  };
  if (!orders) return null;
  return (
    <>
      <table className='text-sm shadow-drop rounded-2xl overflow-hidden  '>
        <tbody className=''>
          <tr className='text-customGray align-top items-center text-center '>
            <th className=' flex justify-center items-center '>
              <td className=''>
                <div className='justify-center '>SELECT</div>
                <div>
                  <input
                    type='checkbox'
                    className='mt-2 w-4 h-4 mb-2 accent-customOrange'
                    checked={selectAll}
                    onChange={toggleSelectAll}
                  />
                </div>
              </td>
            </th>
            {headings.map((heading, index) => (
              <th key={index} className='text-left   pl-2 '>
                {heading}
              </th>
            ))}
          </tr>
        </tbody>
        {/* </table>

      <table className='shadow-drop rounded-2xl text-sm overflow-hidden'> */}
        <tbody>
          {orders.map((order, index) => (
            <tr
              key={index}
              className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}
         
                text-customGray`}
            >
              {' '}
              <div className=' align-middle  flex justify-center items-center  h-[100px] '>
                <td className='p-4 '>
                  <input
                    type='checkbox'
                    className='w-4 h-4 align-middle accent-customOrange'
                    checked={selectedRows.includes(index)}
                    onChange={() => toggleSelectRow(index)}
                  />
                </td>
              </div>
              {rowNames.map((rowName, rowIndex) => (
                <td key={rowIndex} className='p-2 align-top '>
                  {rowName === 'status' ? (
                    <div>
                      <Badge
                        color={order.status.badgeColor}
                        text={order.status.status}
                      />
                      <p className='mb-1 mt-1'>
                        Order: {order.status.orderNum}
                      </p>
                      <ul>
                        {order.status.orderOpts.map((opt, optIndex) => (
                          <li key={optIndex} className='mb-1'>
                            <button onClick={() => console.log(opt.handler)}>
                              <span className='underline'>{opt.label}</span>
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : rowName === 'dateTime' ? (
                    <div>
                      <p>{`${order.dateTime.date}`}</p>
                      <p>{`${order.dateTime.time}`}</p>
                    </div>
                  ) : rowName === 'service' ? (
                    <div>
                      <span className='flex items-center '>
                        <img
                          src={order.service.icon}
                          alt='Service Icon'
                          className='h-full mr-2'
                        />
                        <span className='mt-1'>{order.service.type}</span>
                      </span>
                      <p className='mb-1'>{`${order.service.numPkgs} package`}</p>
                      <span className='flex  gap-2'>
                        <span className='font-bold mb-1'>Tracking: </span>
                        <span className='underline mb-1'>
                          {order.service.tracking}
                        </span>

                        <img src={order.service.fileIcon} alt='files icon' />
                      </span>

                      <span>
                        <span className='font-bold'>Estimate: </span>
                      </span>
                      {order.service.estimate}
                      <Popover
                        isOpen={selectedPopover.includes(index)}
                        positions={['right']}
                        padding={10}
                        onClickOutside={() => toggleSelectPop(index)}
                        content={() => (
                          <div className='bg-white text-customGray p-4 rounded-2xl shadow-drop '>
                            <h3 className='text-lg font-bold mb-2 pl-5 text-customOrange'>
                              QUOTE DETAILS
                            </h3>
                            <ul className='list-disc pl-5'>
                              <div className='mt-2 font-bold'>
                                REF 1:{' '}
                                <span className='font-normal '>
                                  {order.service.details.ref1}
                                </span>
                              </div>
                              <div className='mt-2 font-bold'>
                                REF 2:{' '}
                                <span className='font-normal '>
                                  {order.service.details.ref2}
                                </span>
                              </div>
                              <div className='mt-2 font-bold'>
                                ZONE:{' '}
                                <span className='font-normal '>
                                  {order.service.details.zone}
                                </span>
                              </div>
                              <div className='mt-2 font-bold'>
                                USER:{' '}
                                <span className='font-normal '>
                                  {order.service.details.user}
                                </span>
                              </div>
                              <div className='mt-2 font-bold'>
                                SUBMITTED BY:{' '}
                                <span className='font-normal '>
                                  {order.service.details.submittedBy}
                                </span>
                              </div>
                              <div className='mt-2 font-bold'>
                                TRACKING:{' '}
                                <span className='font-normal '>
                                  {order.service.details.tracking}
                                </span>
                              </div>
                              <div className='mt-2 font-bold'>
                                SERVICE:{' '}
                                <span className='font-normal '>
                                  {order.service.details.service}
                                </span>
                              </div>
                              <div className='mt-2 font-bold'>
                                EST. DELIVERY DATE:{' '}
                                <span className='font-normal '>
                                  {order.service.details.estDelivery}
                                </span>
                              </div>
                              <div className='mt-2 font-bold'>
                                TRANSPORTATION:{' '}
                                <span className='font-normal '>
                                  {order.service.details.transFee}
                                </span>
                              </div>
                              <div className='mt-2 font-bold'>
                                CARRIER FEE(PEAK):{' '}
                                <span className='font-normal '>
                                  {order.service.details.carrierFee}
                                </span>
                              </div>
                              <div className='mt-2 font-bold'>
                                FUEL SURCHARGE:{' '}
                                <span className='font-normal '>
                                  {order.service.details.fuelSurcharge}
                                </span>
                              </div>
                              <div className='mt-2 font-bold'>
                                TOTAL:{' '}
                                <span className='font-normal '>
                                  {order.service.details.total}
                                </span>
                              </div>
                            </ul>
                          </div>
                        )}
                      >
                        <span
                          onClick={() => toggleSelectPop(index)}
                          className='underline ml-2 cursor-pointer'
                        >
                          View Details
                        </span>
                      </Popover>
                      {/* <Popover
                        isOpen={selectedPopover.includes(index)}

                        positions={['right']}
                        
                        content={
                          <div className='bg-white text-customGray p-4'>
                            <h3 className='text-lg font-bold mb-2'>
                              Order Details
                            </h3>
                            <ul className='list-disc pl-5'>
                              <li>Reference 1: {order.service.details.ref1}</li>
                              <li>Reference 2: {order.service.details.ref2}</li>
                              <li>Zone: {order.service.details.zone}</li>
                              <li>User: {order.service.details.user}</li>
                              <li>
                                Submitted By:{' '}
                                {order.service.details.submittedBy}
                              </li>
                              <li>
                                Tracking: {order.service.details.tracking}
                              </li>
                              <li>Service: {order.service.details.service}</li>
                              <li>
                                Estimated Delivery:{' '}
                                {order.service.details.estDelivery}
                              </li>
                              <li>
                                Transportation Fee:{' '}
                                {order.service.details.transFee}
                              </li>
                              <li>
                                Carrier Fee: {order.service.details.carrierFee}
                              </li>
                              <li>
                                Fuel Surcharge:{' '}
                                {order.service.details.fuelSurcharge}
                              </li>
                              <li>Total: {order.service.details.total}</li>
                            </ul>
                          </div>
                        }
                      >
                        <span
                          onClick={() => toggleSelectPop(index)}
                          className='underline ml-2 cursor-pointer'
                        >
                          View Details
                        </span>
                      </Popover> */}
                    </div>
                  ) : rowName === 'fromAddress' || rowName === 'toAddress' ? (
                    <>
                      <p className='font-bold mb-1'>{order[rowName].name}</p>
                      <p className='mb-1'>{order[rowName].street}</p>
                      <p className='mb-1'>
                        {order[rowName].town}, {order[rowName].state}{' '}
                        {order[rowName].zip}
                      </p>
                      <p className='mb-1'>{order[rowName].country}</p>
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
