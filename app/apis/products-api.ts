import { ListProducts, Product } from 'app/interfaces/product';
import { API_URL, HEADERS_REQUEST } from './constants';

export async function getProducts(): Promise<ListProducts> {
  const url = `${API_URL}/products`;
  const response = await fetch(url, {
    cache: 'no-cache',
    headers: HEADERS_REQUEST,
  });
  return await response.json();
}

export async function getProduct(productId: number): Promise<Product> {
  const url = `${API_URL}/products/${productId}`;
  const response = await fetch(url, {
    next: {
      revalidate: 3600
    },
    headers: HEADERS_REQUEST,
  });
  return await response.json();
}