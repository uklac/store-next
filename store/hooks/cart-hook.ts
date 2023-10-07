import { useAppStore } from '../store';

export const useCart = () => {
  const {
    totalProductsInCart,
    orderCart,
    getGuestToken,
    getGuestOrderNumber,
    _getCart,
    _addProduct,
    _checkoutCart,
  } = useAppStore();

  return {
    totalProductsInCart,
    orderCart,
    getGuestToken,
    getGuestOrderNumber,
    _getCart,
    _addProduct,
    _checkoutCart,
  };
};
