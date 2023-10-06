import { useAppStore } from '../store';

export const useUser = () => {
  const { getUserId, getUserToken, _getCurrentUser, currentUser } =
    useAppStore();

  return {
    currentUser,
    getUserId,
    getUserToken,
    _getCurrentUser,
  };
};
