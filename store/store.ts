import create from 'zustand';
import { devtools } from 'zustand/middleware';
import { CartSlice, createCartSlice } from './slices/cart-slice';
import { UserSlice, createUserSlice } from './slices/user-slice';

export type StoreState = CartSlice & UserSlice;

export const useAppStore = create<StoreState>()(
  devtools((...a) => {
    return {
      ...createCartSlice(...a),
      ...createUserSlice(...a),
    };
  })
);
