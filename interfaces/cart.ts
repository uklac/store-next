import { BillAddress } from "./order";

export interface Item {
  variant_id: number, 
  quantity: number,
}

export interface ItemsCart {
  order: {
    id: number;
    total: string;
  };
  billAddress: BillAddress;
  line_items: Array<{
    id: number;
    variant_id: number;
    quantity: number;
    product: {
      id: number;
      name: string;
      description: string;
      display_amount: string;
    };
    gallery_image: {
      url: string;
    };
    variant: {
      options_text: string;
    };
  }>;
}