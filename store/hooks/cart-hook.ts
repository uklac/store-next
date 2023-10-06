import { useAppStore } from '../store';

export const useCart = () => {
  const { totalProductsInCart, orderCart, _getCart, _addProduct, getGuestToken, getGuestOrderNumber } =
    useAppStore();

  return {
    totalProductsInCart,
    orderCart,
    getGuestToken,
    getGuestOrderNumber,
    _getCart,
    _addProduct,
  };
};
