import { useAppStore } from '../store';

export const useCart = () => {
  const { totalProductsInCart, _getCart, _addProduct } = useAppStore();

  return {
    totalProductsInCart,
    _getCart,
    _addProduct,
  };
};
