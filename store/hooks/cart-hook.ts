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
    _removeCartItem,
    _addAddressToOrder
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
    _removeCartItem,
    _addAddressToOrder
  };
};
