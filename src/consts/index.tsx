export const SIDE_MENU_ITEMS = [
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

export const MP_BULK_ACTIONS = [
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
export const FILTER_OPTIONS = [
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

export const CUSTOMERS_OPTIONS = [
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

export const BILLING_ENTITY_OPTIONS = [
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
export const USER_OPTIONS = [
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
export const SELECT_MP_PTIONS = [
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
import dhlSvg from '../assets/dhl.svg';
import filesSvg from '../assets/files.svg';
import { ColorClasses } from '../types';

export const colorClasses: ColorClasses = {
  gray: 'bg-gray-50 text-gray-600 ring-gray-500/10',
  red: 'bg-red-50 text-red-700 ring-red-600/10',
  yellow: 'bg-yellow-50 text-yellow-800 ring-yellow-600/20',
  green: 'bg-green-50 text-green-700 ring-green-600/20',
  blue: 'bg-blue-50 text-blue-700 ring-blue-700/10',
  indigo: 'bg-indigo-50 text-indigo-700 ring-indigo-700/10',
  purple: 'bg-purple-50 text-purple-700 ring-purple-700/10',
  pink: 'bg-pink-50 text-pink-700 ring-pink-700/10',
};

export const MP_TABLE_DATA = {
  headings: [
    'STATUS/ ORDER#',
    'DATE/TIME',
    'SERVICE/TRACKING/QUOTE',
    'FROM ADDRESS',
    'TO ADDRESS',
  ],
  rowNames: ['status', 'dateTime', 'service', 'fromAddress', 'toAddress'],
  orders: [
    {
      status: {
        selected: false,
        status: 'LABEL ISSUED',
        badgeColor: 'yellow',
        orderNum: '#4455994',
        orderOpts: [
          {
            label: 'Print Label',
            handler: 'printLabelHandler',
          },
          {
            label: 'Schedule a Pickup',
            handler: 'schedulePickupHandler',
          },
          {
            label: 'Void Label',
            handler: 'voidLabelHandler',
          },
        ],
      },
      dateTime: {
        date: '02/20/2023',
        time: '13:45',
      },
      service: {
        icon: dhlSvg,
        type: 'Express Worldwide',
        numPkgs: 1,
        tracking: '#344ddfg',
        fileIcon: filesSvg,
        estimate: '$15.09',
        details: {
          ref1: '#85767685',
          ref2: '#85767686',
          zone: 8,
          user: 'Adina Pinsker',
          submittedBy: 'Malkie',
          tracking: 3355566777,
          service: 'FedEx International Priority',
          estDelivery: '04/04/2023 16:30',
          transFee: '$110.09',
          carrierFee: '$21.60',
          fuelSurcharge: '$15.41',
          total: '$147.33',
        },
      },

      fromAddress: {
        name: 'Main Street Shopper',
        street: '1385 Broadway',
        town: 'New York',
        state: 'NY',
        zip: '10018',
        country: 'US',
      },
      toAddress: {
        name: 'Sandra Romm',
        street: '6816 Chippewa Dr.',
        town: 'Baltimore',
        state: 'Maryland',
        zip: '334433',
        country: 'US',
      },
    },
    {
      status: {
        selected: false,
        status: 'DELIVERED',
        badgeColor: 'green',
        orderNum: '#4455994',
        orderOpts: [],
      },
      dateTime: {
        date: '02/20/2023',
        time: '13:45',
      },
      service: {
        icon: dhlSvg,
        type: 'Express Worldwide',
        numPkgs: 1,
        tracking: '#344ddfg',
        fileIcon: filesSvg,
        estimate: '$15.09',
        details: {
          ref1: '#85767685',
          ref2: '#85767686',
          zone: 8,
          user: 'Adina Pinsker',
          submittedBy: 'Malkie',
          tracking: 3355566777,
          service: 'FedEx International Priority',
          estDelivery: '04/04/2023 16:30',
          transFee: '$110.09',
          carrierFee: '$21.60',
          fuelSurcharge: '$15.41',
          total: '$147.33',
        },
      },

      fromAddress: {
        name: 'Main Street Shopper',
        street: '1385 Broadway',
        town: 'New York',
        state: 'NY',
        zip: '10018',
        country: 'US',
      },
      toAddress: {
        name: 'Sandra Romm',
        street: '6816 Chippewa Dr.',
        town: 'Baltimore',
        state: 'Maryland',
        zip: '334433',
        country: 'US',
      },
    },
    {
      status: {
        selected: false,
        status: 'UNFULFILLED',
        badgeColor: 'blue',
        orderNum: '#4455994',
        orderOpts: [
          {
            label: 'Edit order info',
            handler: 'editOrderInfo',
          },
          {
            label: 'Create Lable',
            handler: 'createLabel',
          },
        ],
      },
      dateTime: {
        date: '02/20/2023',
        time: '13:45',
      },
      service: {
        icon: dhlSvg,
        type: 'Express Worldwide',
        numPkgs: 1,
        tracking: '#344ddfg',
        fileIcon: filesSvg,
        estimate: '$15.09',
        details: {
          ref1: '#85767685',
          ref2: '#85767686',
          zone: 8,
          user: 'Adina Pinsker',
          submittedBy: 'Malkie',
          tracking: 3355566777,
          service: 'FedEx International Priority',
          estDelivery: '04/04/2023 16:30',
          transFee: '$110.09',
          carrierFee: '$21.60',
          fuelSurcharge: '$15.41',
          total: '$147.33',
        },
      },

      fromAddress: {
        name: 'Main Street Shopper',
        street: '1385 Broadway',
        town: 'New York',
        state: 'NY',
        zip: '10018',
        country: 'US',
      },
      toAddress: {
        name: 'Sandra Romm',
        street: '6816 Chippewa Dr.',
        town: 'Baltimore',
        state: 'Maryland',
        zip: '334433',
        country: 'US',
      },
    },
    {
      status: {
        selected: false,
        status: 'CANCELLED',
        badgeColor: 'gray',
        orderNum: '#4455994',
        orderOpts: [
          {
            label: 'Edit order info',
            handler: 'editOrderInfo',
          },
          {
            label: 'Schedule a Pickup',
            handler: 'schedulePickupHandler',
          },
          {
            label: 'Void Label',
            handler: 'voidLabelHandler',
          },
        ],
      },
      dateTime: {
        date: '02/20/2023',
        time: '13:45',
      },
      service: {
        icon: dhlSvg,
        type: 'Express Worldwide',
        numPkgs: 1,
        tracking: '#344ddfg',
        fileIcon: filesSvg,
        estimate: '$15.09',
        details: {
          ref1: '#85767685',
          ref2: '#85767686',
          zone: 8,
          user: 'Adina Pinsker',
          submittedBy: 'Malkie',
          tracking: 3355566777,
          service: 'FedEx International Priority',
          estDelivery: '04/04/2023 16:30',
          transFee: '$110.09',
          carrierFee: '$21.60',
          fuelSurcharge: '$15.41',
          total: '$147.33',
        },
      },

      fromAddress: {
        name: 'Main Street Shopper',
        street: '1385 Broadway',
        town: 'New York',
        state: 'NY',
        zip: '10018',
        country: 'US',
      },
      toAddress: {
        name: 'Sandra Romm',
        street: '6816 Chippewa Dr.',
        town: 'Baltimore',
        state: 'Maryland',
        zip: '334433',
        country: 'US',
      },
    },
    {
      status: {
        selected: false,
        status: 'ERROR',
        badgeColor: 'red',
        orderNum: '#4455994',
        orderOpts: [
          {
            label: 'Fix Error',
            handler: 'fixError',
          },
        ],
      },
      dateTime: {
        date: '02/20/2023',
        time: '13:45',
      },
      service: {
        icon: dhlSvg,
        type: 'Express Worldwide',
        numPkgs: 1,
        tracking: '#344ddfg',
        fileIcon: filesSvg,
        estimate: '$15.09',
        details: {
          ref1: '#85767685',
          ref2: '#85767686',
          zone: 8,
          user: 'Adina Pinsker',
          submittedBy: 'Malkie',
          tracking: 3355566777,
          service: 'FedEx International Priority',
          estDelivery: '04/04/2023 16:30',
          transFee: '$110.09',
          carrierFee: '$21.60',
          fuelSurcharge: '$15.41',
          total: '$147.33',
        },
      },

      fromAddress: {
        name: 'Main Street Shopper',
        street: '1385 Broadway',
        town: 'New York',
        state: 'NY',
        zip: '10018',
        country: 'US',
      },
      toAddress: {
        name: 'Sandra Romm',
        street: '6816 Chippewa Dr.',
        town: 'Baltimore',
        state: 'Maryland',
        zip: '334433',
        country: 'US',
      },
    },
    {
      status: {
        selected: false,
        status: 'LABEL ISSUED',
        badgeColor: 'yellow',
        orderNum: '#4455994',
        orderOpts: [
          {
            label: 'Print Label',
            handler: 'printLabelHandler',
          },
          {
            label: 'Schedule a Pickup',
            handler: 'schedulePickupHandler',
          },
          {
            label: 'Void Label',
            handler: 'voidLabelHandler',
          },
        ],
      },
      dateTime: {
        date: '02/20/2023',
        time: '13:45',
      },
      service: {
        icon: dhlSvg,
        type: 'Express Worldwide',
        numPkgs: 1,
        tracking: '#344ddfg',
        fileIcon: filesSvg,
        estimate: '$15.09',
        details: {
          ref1: '#85767685',
          ref2: '#85767686',
          zone: 8,
          user: 'Adina Pinsker',
          submittedBy: 'Malkie',
          tracking: 3355566777,
          service: 'FedEx International Priority',
          estDelivery: '04/04/2023 16:30',
          transFee: '$110.09',
          carrierFee: '$21.60',
          fuelSurcharge: '$15.41',
          total: '$147.33',
        },
      },

      fromAddress: {
        name: 'Main Street Shopper',
        street: '1385 Broadway',
        town: 'New York',
        state: 'NY',
        zip: '10018',
        country: 'US',
      },
      toAddress: {
        name: 'Sandra Romm',
        street: '6816 Chippewa Dr.',
        town: 'Baltimore',
        state: 'Maryland',
        zip: '334433',
        country: 'US',
      },
    },
    {
      status: {
        selected: false,
        status: 'FULFILLED EXTERNALLY',
        badgeColor: 'green',
        orderNum: '#4455994',
        orderOpts: [],
      },
      dateTime: {
        date: '02/20/2023',
        time: '13:45',
      },
      service: {
        icon: dhlSvg,
        type: 'Express Worldwide',
        numPkgs: 1,
        tracking: '#344ddfg',
        fileIcon: filesSvg,
        estimate: '$15.09',
        details: {
          ref1: '#85767685',
          ref2: '#85767686',
          zone: 8,
          user: 'Adina Pinsker',
          submittedBy: 'Malkie',
          tracking: 3355566777,
          service: 'FedEx International Priority',
          estDelivery: '04/04/2023 16:30',
          transFee: '$110.09',
          carrierFee: '$21.60',
          fuelSurcharge: '$15.41',
          total: '$147.33',
        },
      },

      fromAddress: {
        name: 'Main Street Shopper',
        street: '1385 Broadway',
        town: 'New York',
        state: 'NY',
        zip: '10018',
        country: 'US',
      },
      toAddress: {
        name: 'Sandra Romm',
        street: '6816 Chippewa Dr.',
        town: 'Baltimore',
        state: 'Maryland',
        zip: '334433',
        country: 'US',
      },
    },
  ],
};

export const DUMMY_TEXT =
  'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has  been the industry’s standard dummy text ever since the 1500s, ';
