import { StateCreator } from 'zustand';
import { StoreState } from '../store';
import { getTaxonomies } from 'apis/taxons-api';
import { Taxonomies } from 'interfaces/taxonomies';

export type TResponse = {
  success: boolean;
  data?: any;
  error?: any;
};

export type Taxon = {
  success: boolean;
  data?: Taxonomies;
  error?: any;
};

export type AppSlice = {
  _getTaxonomies: () => Promise<Taxon>;
};

export const createAppSlice: StateCreator<StoreState, [], [], AppSlice> = (
  set,
  get
) => ({
  _getTaxonomies: async () => {
    try {
      const taxonomies = await getTaxonomies();
      console.log('taxonomies: ', taxonomies)
      return { success: true, data: taxonomies };
    } catch (error) {
      return { success: false, error };
    }
  },
});
