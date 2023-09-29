export interface BillAddress {
  address1: string;
  address2: string;
  alternative_phone: string;
  city: string;
  company: string;
  country: {
    id: number;
    iso: string;
    iso3: string;
    iso_name: string;
    name: string;
    numcode: number;
  };
}

export interface Shipment {
  selected_shipping_rate: {
    cost: string;
    display_cost: string;
    id: number;
    name: string;
    selected: boolean;
    shipping_method_code: string;
    shipping_method_id: number;
  };
  shipped_at: string;
  shipping_methods: {
    code: string;
    id: number;
    name: string;
    shipping_categories: {
      id: number;
      name: string;
    }[];
    zones: {
      description: string;
      id: number;
      name: string;
    }[];
  }[];
  shipping_rates: {
    cost: string;
    display_cost: string;
    id: number;
    name: string;
    selected: boolean;
    shipping_method_code: string;
    shipping_method_id: number;
  }[];
  state: string;
  stock_location_name: string;
  tracking: string;
  tracking_url: string;
}

export interface ShipAddress {
  address1: string;
  address2: string;
  alternative_phone: string;
  city: string;
  company: string;
  country: {
    id: number;
    iso: string;
    iso3: string;
    iso_name: string;
    name: string;
    numcode: number;
  };
  country_id: number;
  country_iso: string;
  id: number;
  name: string;
  phone: string;
  state: {
    abbr: string;
    country_id: number;
    id: number;
    name: string;
  };
  state_id: number;
  state_name: string;
  state_text: string;
  zipcode: string;
}

export interface PaymentMethod {
  id: number;
  method_type: string;
  name: string;
  partial_name: string;
}

export interface Payment {
  amount: string;
  avs_response: string;
  created_at: string;
  display_amount: string;
  id: number;
  payment_method: PaymentMethod;
  payment_method_id: number;
  source_id: number;
  source_type: number;
  state: string;
  updated_at: string;
}

export interface Adjustment {
  adjustable_id: number;
  adjustable_type: string;
  amount: string;
  created_at: string;
  display_amount: string;
  eligible: boolean;
  finalized: boolean;
  id: number;
  label: string;
  promotion_code_id: number;
  source_id: number;
  source_type: string;
  updated_at: string;
}


