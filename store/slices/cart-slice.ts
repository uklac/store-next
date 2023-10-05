import { StateCreator } from 'zustand';
import { StoreState } from '../store';
import { getCart } from 'apis/cart-api';
import { LineItem } from 'interfaces';

export type TResponse = {
  success: boolean;
  data?: any;
  error?: any;
};

export type CartSlice = {
  totalProductsInCart: number;
  _addProduct: () => void;
  _removeProduct: () => void;
  _getCart: () => Promise<TResponse>;
};

export const createCartSlice: StateCreator<StoreState, [], [], CartSlice> = (
  set,
  get
) => ({
  totalProductsInCart: 0,
  _getCart: async () => {
    try {
      const orderNumber = localStorage.getItem('order_number') || '';
      const guestToken = localStorage.getItem('guest_token') || '';
      const cart = await getCart(orderNumber, guestToken);
      const { line_items } = cart;
      const totalProducts = getTotalProductsInCart(line_items);
      set({ totalProductsInCart: totalProducts });
      return { success: true, data: cart };
    } catch (error) {
      return { success: false, error };
    }
  },
  _addProduct: () => {
    const totalProductsInCart = get().totalProductsInCart;
    set({ totalProductsInCart: totalProductsInCart + 1 });
  },
  _removeProduct: () => {
    const totalProductsInCart = get().totalProductsInCart;
    set({ totalProductsInCart: totalProductsInCart - 1 });
  },
});

function getTotalProductsInCart(items: LineItem[]) {
  const total = items.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.quantity;
  }, 0);
  return total;
}
