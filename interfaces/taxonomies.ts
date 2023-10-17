export interface Taxonomies {
  count: number;
  current_page: number;
  pages: number;
  per_page: number;
  total_count: number;
  taxonomies: Taxonomy[];
}

export interface Taxonomy {
  id: number;
  name: string;
  root: Root;
}

export interface Root {
  id: number;
  name: string;
  parent_id: number;
  permalink: string;
  pretty_name: string;
  taxonomy_id: number;
  taxons: Taxon[];
}

export interface Taxon {
  id: number;
  name: string;
  parent_id: number;
  permalink: string;
  pretty_name: string;
  taxonomy_id: number;
  taxons: Taxon[];
}
