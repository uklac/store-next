import { Product } from "app/interfaces/product";
import { API_URL, GET_HEADERS_REQUEST } from "./constants";

export async function getProduct(productId: number): Promise<Product> {
  const url = `${API_URL}/products/${productId}`;
  const response = await fetch(url, GET_HEADERS_REQUEST);
  return await response.json();
}