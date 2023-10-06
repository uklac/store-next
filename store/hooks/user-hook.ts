import { useAppStore } from '../store';

export const useUser = () => {
  const {
    getUserId,
    getUserToken,
    _getCurrentUser,
    currentUser,
    _login,
    _register,
  } = useAppStore();

  return {
    currentUser,
    getUserId,
    getUserToken,
    _getCurrentUser,
    _login,
    _register,
  };
};
