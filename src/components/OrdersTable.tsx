import React, { useState } from 'react';
import { Popover } from 'react-tiny-popover';
import Badge from './ui/Badge';
interface OrderOption {
  label: string;
  handler: string;
}

interface OrderDetails {
  ref1: string;
  ref2: string;
  zone: number;
  user: string;
  submittedBy: string;
  tracking: number;
  service: string;
  estDelivery: string;
  transFee: string;
  carrierFee: string;
  fuelSurcharge: string;
  total: string;
}

interface Order {
  status: {
    selected: boolean;
    status: string;
    badgeColor: string;
    orderNum: string;
    orderOpts: OrderOption[];
  };
  dateTime: {
    date: string;
    time: string;
  };
  service: {
    icon: string;
    type: string;
    numPkgs: number;
    tracking: string;
    fileIcon: string;
    estimate: string;
    details: OrderDetails;
  };
  fromAddress: {
    name: string;
    street: string;
    town: string;
    state: string;
    zip: string;
    country: string;
  };
  toAddress: {
    name: string;
    street: string;
    town: string;
    state: string;
    zip: string;
    country: string;
  };
}

interface MP_TABLE_DATA {
  headings: string[];
  rowNames: string[];
  orders: Order[];
}

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

  return (
    <table className='shadow-drop rounded-lg text-sm'>
      <thead>
        <tr className='bg-gray-100 text-customGray'>
          <th className='p-4'>
            <input
              type='checkbox'
              className='bg-white rounded-lg '
              checked={selectAll}
              onChange={toggleSelectAll}
            />
          </th>
          {headings.map((heading, index) => (
            <th key={index}>{heading}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {orders.map((order, index) => (
          <tr
            key={index}
            className={`${
              index % 2 === 0 ? 'bg-white' : 'bg-gray-100'
            } text-customGray`}
          >
            <td className='p-4'>
              <input
                type='checkbox'
                className=' ml-4'
                checked={selectedRows.includes(index)}
                onChange={() => toggleSelectRow(index)}
              />
            </td>
            {rowNames.map((rowName, rowIndex) => (
              <td key={rowIndex}>
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
  );
};

export default OrdersTable;
