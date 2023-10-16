import { useAppStore } from '../store';

export const useUser = () => {
  const {
    getUserId,
    getUserToken,
    _getCurrentUser,
    currentUser,
    _login,
    _register,
    _logout,
    _getAddressesUser,
    _getUserOrders
  } = useAppStore();

  return {
    currentUser,
    getUserId,
    getUserToken,
    _getCurrentUser,
    _login,
    _register,
    _logout,
    _getAddressesUser,
    _getUserOrders
  };
};
