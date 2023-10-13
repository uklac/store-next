import { StateCreator } from 'zustand';
import { StoreState } from '../store';
import { CurrentUser, User } from 'interfaces/user';
import { getUser } from 'apis/user-api';
import { createAccount, getAddresses, loginAccount } from 'apis/account-api';
import { Address } from 'interfaces';

export type TResponse = {
  success: boolean;
  data?: any;
  error?: any;
};

export type AddressUser = {
  data?: Address[];
};

export type UserSlice = {
  currentUser: User | null;
  getUserId: () => number;
  getUserToken: () => string;
  setUserId: (id: number) => void;
  setUserToken: (token: string) => void;
  _getCurrentUser: () => Promise<TResponse>;
  _getAddressesUser: () => Promise<AddressUser>;
  _login: (email: string, password: string) => Promise<TResponse>;
  _register: (
    email: string,
    password: string,
    password_confirmation: string
  ) => Promise<TResponse>;
  _logout: () => Promise<TResponse>;
};

export const createUserSlice: StateCreator<StoreState, [], [], UserSlice> = (
  set,
  get
) => ({
  addressUser : null,
  currentUser: null,
  getUserId: () => {
    const id = localStorage.getItem('user_id');
    return id ? parseInt(id) : 0;
  },
  getUserToken: () => {
    return localStorage.getItem('user_token') || '';
  },
  setUserId: (id: number) => {
    const userId = id.toString();
    localStorage.setItem('user_id', userId);
  },
  setUserToken: (token: string) => {
    localStorage.setItem('user_token', token);
  },
  _getCurrentUser: async () => {
    try {
      const userToken = get().getUserToken();
      const userId = get().getUserId();
      const user = await getUser({ userId, token: userToken });
      console.log('user: ', user);
      set({ currentUser: user });
      return { success: true, data: user };
    } catch (error) {
      return { success: true, error };
    }
  },
  _getAddressesUser: async () => {
    try {
      const userToken = get().getUserToken();
      const userId = get().getUserId();
      const address = await getAddresses(userId, userToken);
      console.log('address: ', address);
      return { success: true, data: address };
    } catch (error) {
      return { success: true, error };
    }
  },
  _login: async (email, password) => {
    try {
      const guestOrderNumber = get().getGuestOrderNumber();
      const guestToken = get().getGuestToken();
      const { user } = await loginAccount({
        email,
        password,
        order_number: guestOrderNumber,
        guest_token: guestToken,
      });
      get().setUserId(user.id);
      get().setUserToken(user.spree_api_key);
      set({ currentUser: user });
      return { success: true, data: user };
    } catch (error) {
      return { success: true, error };
    }
  },
  _register: async (email, password, password_confirmation) => {
    try {
      const guestOrderNumber = get().getGuestOrderNumber();
      const guestToken = get().getGuestToken();
      const { user } = await createAccount({
        email,
        password,
        password_confirmation,
        order_number: guestOrderNumber,
        guest_token: guestToken,
      });
      get().setUserId(user.id);
      get().setUserToken(user.spree_api_key);
      set({ currentUser: user });
      return { success: true, data: user };
    } catch (error) {
      return { success: true, error };
    }
  },
  _logout: async () => {
    try {
      await localStorage.clear();
      set({ orderCart: null, currentUser: null, totalProductsInCart: 0 })
      return { success: true, data: {} };
    } catch (error) {
      return { success: false, error };
    }
  },
});
