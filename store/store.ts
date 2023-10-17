import create from 'zustand';
import { devtools } from 'zustand/middleware';
import { CartSlice, createCartSlice } from './slices/cart-slice';
import { UserSlice, createUserSlice } from './slices/user-slice';
import { AppSlice, createAppSlice } from './slices/app-slice';


export type StoreState = CartSlice & UserSlice & AppSlice;

export const useAppStore = create<StoreState>()(
  devtools((...a) => {
    return {
      ...createCartSlice(...a),
      ...createUserSlice(...a),
      ...createAppSlice(...a),
    };
  })
);
