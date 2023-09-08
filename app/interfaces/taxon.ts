export interface Taxon {
  id: number;
  name: string;
  parent_id: number;
  permalink: string;
  pretty_name: string;
  taxonomy_id: number;
  taxons: any[];
}

export interface ListTaxon {
  count: number;
  current_page: number;
  pages: number;
  per_page: number;
  total_count: number;
  taxons: Taxon[];
}