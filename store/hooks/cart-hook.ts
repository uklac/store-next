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
    _updateAmountItem,
    _removeCartItem
  } = useAppStore();

  return {
    totalProductsInCart,
    orderCart,
    getGuestToken,
    getGuestOrderNumber,
    _getCart,
    _addProduct,
    _checkoutCart,
    _updateAmountItem,
    _removeCartItem
  };
};
