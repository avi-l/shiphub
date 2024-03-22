export const sideMenuItems = [
  {
    label: 'SHIP',
    path: '',
  },
  {
    label: 'MARKETPLACES',
    path: '/marketplaces',
  },
  {
    label: 'BULK UPLOAD',
    path: '',
  },
  {
    label: 'SHIPMENT HISTORY',
    path: '',
  },
  {
    label: 'PICKUPS',
    path: '',
  },
  {
    label: 'ORDER SUPPLIES',
    path: '',
  },
  {
    label: 'BILLING HISTORY',
    path: '',
  },
  {
    label: 'BULK TRACKING',
    path: '',
  },
  {
    label: 'ADDRESS BOOK',
    path: '',
  },
  {
    label: 'REPORTS',
    path: '',
  },
  {
    label: 'MANAGE USERS',
    path: '',
  },
  {
    label: 'SETTINGS',
    path: '',
  },
  {
    label: 'HELP',
    path: '',
  },
];

export const mpBulkActions = [
  {
    label: 'Create Labels',
    action: () => {},
  },
  {
    label: 'Schedule a Pickup',
    action: () => {},
  },
  {
    label: 'Void Shipment',
    action: () => {},
  },
  {
    label: 'Quote Again',
    action: () => {},
  },
  {
    label: 'Change From Address',
    action: () => {},
  },
  {
    label: 'Change To Address',
    action: () => {},
  },
  {
    label: 'Change Carrier Service',
    action: () => {},
  },
  {
    label: 'Change Packing Type',
    action: () => {},
  },
];
export const filterByOptions = [
  {
    label: 'Ship Date (from-to)',
    action: () => {},
  },
  {
    label: 'Status',
    action: () => {},
  },
  {
    label: 'Tracking Number',
    action: () => {},
  },
];

export const customersOptions = [
  {
    label: 'Customers',
    action: () => {},
  },
  {
    label: 'Status',
    action: () => {},
  },
  {
    label: 'Address',
    action: () => {},
  },
];

export const billingEntityOptions = [
  {
    label: 'Billing Entity',
    action: () => {},
  },
  {
    label: 'Status',
    action: () => {},
  },
  {
    label: 'Address',
    action: () => {},
  },
];
export const userOptions = [
  {
    label: 'Name',
    action: () => {},
  },
  {
    label: 'Email',
    action: () => {},
  },
  {
    label: 'Phone',
    action: () => {},
  },
];
export const selectMPOptions = [
  {
    label: <div className='font-bold'>Platform</div>,
    store: 'Store name',
    action: () => {},
  },
  {
    label: <div className='font-bold'>Shopify</div>,
    store: 'Cookies Store',
    action: () => {},
  },
  {
    label: <div className='font-bold '>Shipstation</div>,
    store: 'Cookie Monster',
    action: () => {},
  },
];

export const mpTableData = {
  headings: [
    'STATUS/ORDER#',
    'DATE/TIME',
    'SERVICE/TRACKING/QUOTE',
    'FROM ADDRESS',
    'TO ADDRESS',
  ],
  rowNames: ['status', 'dateTime', 'service', 'fromAddress', 'toAddress'],
  data: [
    {
      status: 'Shipped',
      dateTime: '2024-03-25 10:00 AM',
      service: 'Express',
      fromAddress: '123 Main St, Anytown, USA',
      toAddress: '456 Oak St, Othertown, USA',
    },
    {
      status: 'Pending',
      dateTime: '2024-03-26 11:30 AM',
      service: 'Standard',
      fromAddress: '789 Elm St, Anycity, USA',
      toAddress: '101 Pine St, Anothercity, USA',
    },
    {
      status: 'Delivered',
      dateTime: '2024-03-27 1:00 PM',
      service: 'Express',
      fromAddress: '222 Maple St, Anystate, USA',
      toAddress: '333 Birch St, Anotherstate, USA',
    },
  ],
};
