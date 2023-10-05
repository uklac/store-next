import { useAppStore } from "../store";

export const useCart = () => {
  const {
    totalProductsInCart
  } = useAppStore();

  return {
    totalProductsInCart
  }
}
