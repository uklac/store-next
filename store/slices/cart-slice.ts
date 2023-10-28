import { StateCreator } from 'zustand';
import { StoreState } from '../store';
import {
  getCart,
  addItemToOrderAndCreate,
  addItemToOrder,
  checkoutCart,
  updateLineItem,
  removeLineItem,
  addAddressToOrder,
  nextCheckoutStep,
  addPaymentToOrder,
  addDeliveryToOrder,
  completeStep,
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
  _getCurrentOrder: () => Promise<TResponse>;
  _checkoutCart: () => Promise<TResponse>;
  _updateAmountItem: (id: number, quantity: number) => Promise<TResponse>;
  _removeCartItem: (id: number) => Promise<TResponse>;
  _addAddressToOrder: (addressParams: any) => Promise<TResponse>;
  _addPaymentToOrder: (payment_method_id: any) => Promise<TResponse>;
  _completeOrder: (total: string) => Promise<TResponse>; 
  _addDeliveryToOrder: (deliveryParams: any) => Promise<TResponse>;
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
      const currentUser = get().currentUser;
      const methodAddItem = guestToken.length
        ? addItemToOrder
        : addItemToOrderAndCreate;
      const result = await methodAddItem({
        item: {
          variant_id: variantId,
          quantity: quantity,
        },
        email: currentUser?.email,
        userId: currentUser?.id,
        token: guestToken || '',
        orderNumber: orderNumber || '',
      });
      if (result.order) {
        localStorage.setItem('order_number', result.order.number);
        localStorage.setItem('guest_token', result.order.guest_token);
        const totalProductsInCart = get().totalProductsInCart;
        set({ totalProductsInCart: totalProductsInCart + 1, orderCart: result.order});
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
  _checkoutCart: async () => {
    const token = get().getGuestToken();
    const orderNumber = get().getGuestOrderNumber();
    try {
      const resp = await checkoutCart(token, orderNumber);
      return { success: true, data: resp };
    } catch (error) {
      return { success: false, error };
    }
  },
  _updateAmountItem: async (id, quantity) => {
    const token = get().getGuestToken();
    const orderNumber = get().getGuestOrderNumber();
    try {
      const resp = await updateLineItem({
        itemId: id,
        quantity: quantity,
        token: token,
        orderNumber: orderNumber,
      });
      return { success: true, data: resp };
    } catch (error) {
      return { success: false, error };
    }
  },
  _removeCartItem: async (id) => {
    const token = get().getGuestToken();
    const orderNumber = get().getGuestOrderNumber();
    try {
      const resp = await removeLineItem({
        itemId: id,
        token: token,
        orderNumber: orderNumber,
      });
      return { success: true, data: resp };
    } catch (error) {
      return { success: false, error };
    }
  },
  _addAddressToOrder: async (params) => {
    const token = get().getGuestToken();
    const orderNumber = get().getGuestOrderNumber();
    try {
      const resp = await addAddressToOrder(token, orderNumber, params);
      const nextStep = await nextCheckoutStep(token, orderNumber);
      console.log('nextStep: ', nextStep);
      return { success: true, data: resp };
    } catch (error) {
      return { success: false, error };
    }
  },
  _addPaymentToOrder: async (params) => {
    const token = get().getGuestToken();
    const orderNumber = get().getGuestOrderNumber();
    try {
      const resp = await addPaymentToOrder(token, orderNumber, params);
      // const nextStep = await nextCheckoutStep(token, orderNumber);
      // console.log('nextStep: ', nextStep);
      return { success: true, data: resp };
    } catch (error) {
      return { success: false, error };
    }
  },
  _addDeliveryToOrder: async (params) => {
    const token = get().getGuestToken();
    const orderNumber = get().getGuestOrderNumber();
    try {
      const resp = await addDeliveryToOrder(token, orderNumber, params);
      // const nextStep = await nextCheckoutStep(token, orderNumber);
      // console.log('nextStep: ', nextStep);
      return { success: true, data: resp };
    } catch (error) {
      return { success: false, error };
    }
  },
  _completeOrder: async (total) => {
    const token = get().getGuestToken();
    const orderNumber = get().getGuestOrderNumber();
    try {
      const resp = await completeStep(token, orderNumber, total);
      await localStorage.removeItem('order_number'); 
      await localStorage.removeItem('guest_token'); 
      // const nextStep = await nextCheckoutStep(token, orderNumber);
      // console.log('nextStep: ', nextStep);
      return { success: true, data: resp };
    } catch (error) {
      return { success: false, error };
    }
  },
  _getCurrentOrder: async () => {
    try {
      const userToken = get().getUserToken();
      if (userToken) {
        const cart = await getCurrentOrder(userToken);
        set({ orderCart: cart });
        localStorage.setItem('order_number', cart.number);
        localStorage.setItem('guest_token', cart.token);
        return { success: true, data: cart };
      } else {
        return { success: true, data: null };
      }
    } catch (error) {
      return { success: false, error };
    }
  },
});

function getTotalProductsInCart(items: LineItem[]) {
  const total = items.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.quantity;
  }, 0);
  return total;
}
