export interface OrderData {
  additional_tax_total: string;
  adjustment_total: string;
  adjustments: Adjustment[];
  bill_address: Address;
  canceler_id: number;
  channel: string;
  checkout_steps: string[];
  completed_at: string;
  covered_by_store_credit: boolean;
  created_at: string;
  credit_cards: CreditCard[];
  currency: string;
  display_additional_tax_total: string;
  display_included_tax_total: string;
  display_item_total: string;
  display_order_total_after_store_credit: string;
  display_ship_total: string;
  display_store_credit_remaining_after_capture: string;
  display_tax_total: string;
  display_total: string;
  display_total_applicable_store_credit: string;
  display_total_available_store_credit: string;
  email: string;
  id: number;
  included_tax_total: string;
  item_total: string;
  line_items: LineItem[];
  number: string;
  order_total_after_store_credit: string;
  payment_methods: PaymentMethod[];
  payment_state: string;
  payment_total: string;
  payments: Payment[];
  permissions: {
    can_update: boolean;
  };
  ship_address: Address;
  ship_total: string;
  shipment_state: string;
  shipments: Shipment[];
  special_instructions: string;
  state: string;
  tax_total: string;
  token: string;
  total: string;
  total_applicable_store_credit: string;
  total_quantity: number;
  updated_at: string;
  user_id: number;
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

export interface Address {
  address1: string;
  address2: string;
  alternative_phone: string;
  city: string;
  company: string;
  country: Country;
  country_id: number;
  country_iso: string;
  id: number;
  name: string;
  phone: string;
  state: State;
  state_id: number;
  state_name: string;
  state_text: string;
  zipcode: string;
}

export interface Country {
  id: number;
  iso: string;
  iso3: string;
  iso_name: string;
  name: string;
  numcode: number;
}

export interface State {
  abbr: string;
  country_id: number;
  id: number;
  name: string;
}

export interface CreditCard {
  address: null;
  cc_type: string;
  id: number;
  last_digits: string;
  month: string;
  name: string;
  year: string;
}

export interface LineItem {
  adjustments: Adjustment[];
  display_amount: string;
  id: number;
  price: string;
  quantity: number;
  single_display_amount: string;
  total: string;
  variant: Variant;
  variant_id: number;
}

export interface Variant {
  cost_price: string;
  depth: string;
  description: string;
  display_price: string;
  height: string;
  id: number;
  images: Image[];
  in_stock: boolean;
  is_backorderable: boolean;
  is_destroyed: boolean;
  is_master: boolean;
  name: string;
  option_values: OptionValue[];
  options_text: string;
  price: string;
  sku: string;
  slug: string;
  total_on_hand: number;
  track_inventory: boolean;
  weight: string;
  width: string;
}

export interface Image {
  alt: string;
  attachment_content_type: string;
  attachment_file_name: string;
  attachment_height: number;
  attachment_updated_at: string;
  attachment_width: number;
  id: number;
  large_url: string;
  mini_url: string;
  position: number;
  product_url: string;
  small_url: string;
  type: string;
  viewable_id: number;
  viewable_type: string;
}

export interface OptionValue {
  id: number;
  name: string;
  option_type_id: number;
  option_type_name: string;
  option_type_presentation: string;
  presentation: string;
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
  source: Source;
  source_id: number;
  source_type: number;
  state: string;
  updated_at: string;
}

export interface Source {
  cc_type: string;
  gateway_customer_profile_id: string;
  gateway_payment_profile_id: string;
  id: number;
  last_digits: string;
  month: string;
  name: string;
  year: string;
}

export interface Shipment {
  adjustments: Adjustment[];
  cost: string;
  id: number;
  manifest: Manifest[][];
  number: string;
  order_id: string;
  selected_shipping_rate: SelectedShippingRate;
  shipped_at: string;
  shipping_methods: ShippingMethod[];
  // shipping_rates: ShippingRate[];
  state: string;
  stock_location_name: string;
  tracking: string;
  tracking_url: string;
}

export interface Manifest {
  quantity: number;
  states: {
    on_hand: number;
  };
  variant_id: number;
}

export interface SelectedShippingRate {
  cost: string;
  display_cost: string;
  id: number;
  name: string;
  selected: boolean;
  shipping_method_code: string;
  shipping_method_id: number;
}

export interface ShippingMethod {
  code: string;
  id: number;
  name: string;
  shipping_categories: ShippingCategory[];
  zones: Zone[];
}

export interface ShippingCategory {
  id: number;
  name: string;
}

export interface Zone {
  description: string;
  id: number;
  name: string;
}

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

// export interface Shipment {
//   selected_shipping_rate: {
//     cost: string;
//     display_cost: string;
//     id: number;
//     name: string;
//     selected: boolean;
//     shipping_method_code: string;
//     shipping_method_id: number;
//   };
//   shipped_at: string;
//   shipping_methods: {
//     code: string;
//     id: number;
//     name: string;
//     shipping_categories: {
//       id: number;
//       name: string;
//     }[];
//     zones: {
//       description: string;
//       id: number;
//       name: string;
//     }[];
//   }[];
//   shipping_rates: {
//     cost: string;
//     display_cost: string;
//     id: number;
//     name: string;
//     selected: boolean;
//     shipping_method_code: string;
//     shipping_method_id: number;
//   }[];
//   state: string;
//   stock_location_name: string;
//   tracking: string;
//   tracking_url: string;
// }

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

// export interface PaymentMethod {
//   id: number;
//   method_type: string;
//   name: string;
//   partial_name: string;
// }

// export interface Payment {
//   amount: string;
//   avs_response: string;
//   created_at: string;
//   display_amount: string;
//   id: number;
//   payment_method: PaymentMethod;
//   payment_method_id: number;
//   source_id: number;
//   source_type: number;
//   state: string;
//   updated_at: string;
// }

// export interface Adjustment {
//   adjustable_id: number;
//   adjustable_type: string;
//   amount: string;
//   created_at: string;
//   display_amount: string;
//   eligible: boolean;
//   finalized: boolean;
//   id: number;
//   label: string;
//   promotion_code_id: number;
//   source_id: number;
//   source_type: string;
//   updated_at: string;
// }

