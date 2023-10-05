import { useAppStore } from '../store';

export const useCart = () => {
  const { totalProductsInCart, _getCart } = useAppStore();

  return {
    totalProductsInCart,
    _getCart,
  };
};
