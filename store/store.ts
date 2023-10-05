import create from 'zustand';
import { devtools } from 'zustand/middleware';
import { CartSlice, createCartSlice } from './slices/cart-slice';

export type StoreState = CartSlice;

export const useAppStore = create<StoreState>()(
  devtools((...a) => {
    return {
      ...createCartSlice(...a),
    };
  })
);
