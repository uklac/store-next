export interface Taxon {
  id: number;
  name: string;
  parent_id: number;
  permalink: string;
  pretty_name: string;
  taxonomy_id: number;
  taxons: any[];
}