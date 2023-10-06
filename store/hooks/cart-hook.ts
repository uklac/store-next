import { useAppStore } from '../store';

export const useCart = () => {
  const { totalProductsInCart, orderCart, _getCart, _addProduct } =
    useAppStore();

  return {
    totalProductsInCart,
    orderCart,
    _getCart,
    _addProduct,
  };
};
