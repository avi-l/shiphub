import React from 'react';

interface OrdersTableProps {
  headings: string[];
  rowNames: string[];
  data: Record<string, string>[];
}

const OrdersTable: React.FC<OrdersTableProps> = ({
  headings,
  rowNames,
  data,
}) => {
  return (
    <table className='shadow-drop rounded-lg'>
      <thead>
        <tr className='bg-gray-100 text-customGray'>
          {headings.map((heading, index) => (
            <th key={index}>{heading}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((rowData, rowIndex) => (
          <tr
            key={rowIndex}
            className={`${
              rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-100'
            } text-customGray`}
          >
            {rowNames.map((rowName, index) => (
              <td key={index}>{rowData[rowName]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default OrdersTable;
