import { StateCreator } from 'zustand';
import { StoreState } from '../store';
import {
  getCart,
  addItemToOrderAndCreate,
  addItemToOrder,
  getCurrentOrder,
} from 'apis/cart-api';
import { LineItem, OrderData } from 'interfaces';

export type TResponse = {
  success: boolean;
  data?: any;
  error?: any;
};

export type CartSlice = {
  orderCart: OrderData | null;
  totalProductsInCart: number;
  getGuestOrderNumber: () => string;
  getGuestToken: () => string;
  _addProduct: (variantId: number, quantity: number) => Promise<TResponse>;
  _removeProduct: () => void;
  _getCart: () => Promise<TResponse>;
};

export const createCartSlice: StateCreator<StoreState, [], [], CartSlice> = (
  set,
  get
) => ({
  orderCart: null,
  totalProductsInCart: 0,
  getGuestOrderNumber: () => {
    return localStorage.getItem('order_number') || '';
  },
  getGuestToken: () => {
    return localStorage.getItem('guest_token') || '';
  },
  _getCart: async () => {
    try {
      const orderNumber = get().getGuestOrderNumber();
      const guestToken = get().getGuestToken();
      if (orderNumber && guestToken) {
        const cart = await getCart(orderNumber, guestToken);
        const { line_items } = cart;
        const totalProducts = getTotalProductsInCart(line_items);
        set({ totalProductsInCart: totalProducts, orderCart: cart });
        return { success: true, data: cart };
      } else {
        return { success: true, data: null };
      }
    } catch (error) {
      return { success: false, error };
    }
  },
  _addProduct: async (variantId, quantity) => {
    try {
      const orderNumber = get().getGuestOrderNumber();
      const guestToken = get().getGuestToken();
      const methodAddItem = guestToken
        ? addItemToOrder
        : addItemToOrderAndCreate;
      const result = await methodAddItem({
        item: {
          variant_id: variantId,
          quantity: quantity,
        },
        token: guestToken || '',
        orderNumber: orderNumber || '',
      });
      console.log('Agregado al carrito:', result);
      if (result.order) {
        localStorage.setItem('order_number', result.order.number);
        localStorage.setItem('guest_token', result.order.guest_token);
      } else {
        const totalProductsInCart = get().totalProductsInCart;
        set({ totalProductsInCart: totalProductsInCart + result.quantity });
      }
      return { success: true, data: result };
    } catch (error) {
      return { success: false, error };
    }
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
