import { useAppStore } from '../store';

export const useCart = () => {
  const { totalProductsInCart, orderCart, _getCart, _addProduct, getGuestToken } =
    useAppStore();

  return {
    totalProductsInCart,
    orderCart,
    getGuestToken,
    _getCart,
    _addProduct,
  };
};
