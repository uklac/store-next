import { useAppStore } from '../store';

export const useCart = () => {
  const { getUserId, getUserToken, _getCurrentUser } = useAppStore();

  return {
    getUserId,
    getUserToken,
    _getCurrentUser,
  };
};
