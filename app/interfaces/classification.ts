import { Taxon } from "./taxon";

export interface Classification {
  position: number;
  taxon: Taxon;
  taxon_id: number;
}