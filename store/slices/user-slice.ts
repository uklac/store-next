import { StateCreator } from 'zustand';
import { StoreState } from '../store';
import { CurrentUser, User } from 'interfaces/user';
import { getUser } from 'apis/user-api';

export type TResponse = {
  success: boolean;
  data?: any;
  error?: any;
};

export type UserSlice = {
  currentUser: User;
  getUserId: () => number;
  getUserToken: () => string;
  _getCurrentUser: () => Promise<TResponse>;
};

export const createUserSlice: StateCreator<StoreState, [], [], UserSlice> = (
  set,
  get
) => ({
  currentUser: {} as User,
  getUserId: () => {
    const id = localStorage.getItem('user_id');
    return id ? parseInt(id) : 0;
  },
  getUserToken: () => {
    return localStorage.getItem('user_token') || '';
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
});
