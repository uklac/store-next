import { useAppStore } from '../store';

export const useUser = () => {
  const { getUserId, getUserToken, _getCurrentUser, currentUser, _login } =
    useAppStore();

  return {
    currentUser,
    getUserId,
    getUserToken,
    _getCurrentUser,
    _login,
  };
};
