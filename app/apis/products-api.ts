import { ListProducts, Product } from 'app/interfaces/product';
import { API_URL, HEADERS_REQUEST } from './constants';
const PRODUCTS_URL = `${API_URL}/products`;

export async function getProducts(page?: number, perPage?: number ): Promise<ListProducts> {
  const url = `${PRODUCTS_URL}?page=${page || 1}&per_page=${perPage || 12}`;
  const response = await fetch(url, {
    cache: 'no-cache',
    headers: HEADERS_REQUEST,
  });
  return await response.json();
}

export async function getProduct(productId: number): Promise<Product> {
  const url = `${PRODUCTS_URL}/${productId}`;
  const response = await fetch(url, {
    cache: 'no-cache',
    headers: HEADERS_REQUEST,
  });
  return await response.json();
}