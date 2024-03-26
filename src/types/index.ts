export type COLORS =
  | 'red'
  | 'yellow'
  | 'green'
  | 'blue'
  | 'indigo'
  | 'purple'
  | 'pink';

export interface OrderOption {
  label: string;
  handler: string;
}

export interface OrderDetails {
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

export interface Order {
  status: {
    selected: boolean;
    status: string;
    badgeColor: COLORS;
    orderNum: string;
    orderOpts: OrderOption[];
  };
  dateTime: {
    date: string;
    time: string;
  };
  service: {
    icon: string;
    fileIcon: string;
    type: string;
    numPkgs: number;
    tracking: string;
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

export interface MP_TABLE_DATA {
  headings: string[];
  rowNames: string[];
  orders: Order[];
}
