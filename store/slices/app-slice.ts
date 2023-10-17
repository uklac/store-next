import { StateCreator } from 'zustand';
import { StoreState } from '../store';
import { getTaxonomies } from 'apis/taxons-api';

export type TResponse = {
  success: boolean;
  data?: any;
  error?: any;
};

export type AppSlice = {
  _getTaxonomies: () => Promise<TResponse>;
};

export const createAppSlice: StateCreator<StoreState, [], [], AppSlice> = (
  set,
  get
) => ({
  _getTaxonomies: async () => {
    try {
      const token = '83ccb3a71fbcee24038ada56bacf53ca010395fda6e204ab';
      const taxonomies = await getTaxonomies(token);
      console.log('taxonomies: ', taxonomies)
      return { success: true, data: taxonomies };
    } catch (error) {
      return { success: false, error };
    }
  },
});
