import { Classification } from "./classification";
import { ImageAttribute } from "./image";
import { OptionValue } from "./option-value";

export interface Product {
  available_on: string;
  classifications: Classification[];
  description: string;
  display_price: string;
  has_variants: boolean;
  id: number;
  master: {
    cost_price: string;
    depth: string;
    description: string;
    display_price: string;
    height: string;
    id: number;
    images: ImageAttribute[];
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
  };
  meta_description: string;
  meta_keywords: string;
  meta_title: string;
  name: string;
  option_types: {
    id: number;
    name: string;
    option_values: any[];
    position: number;
    presentation: string;
  }[];
  price: string;
  product_properties: ProductProperty[];
  shipping_category_id: number;
  slug: string;
  taxon_ids: number[];
  total_on_hand: number;
  variants: {
    cost_price: string;
    depth: string;
    description: string;
    display_price: string;
    height: string;
    id: number;
    images: ImageAttribute[];
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
  }[];
}

export interface ProductProperty {
  id: number;
  product_id: number;
  property_id: number;
  property_name: string;
  value: string;
}