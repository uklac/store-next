export interface Item {
  variant_id: number, 
  quantity: number,
}

export interface ItemsCart {
  order: {
    id: number;
    total: string;
  };
  items: Array<{
    id: number;
    variant_id: number;
    quantity: number;
    product: {
      id: number;
      name: string;
      display_amount: string;
    };
    gallery_image: {
      url: string;
    };
  }>;
}