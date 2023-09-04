import { ListProducts, Product } from 'app/interfaces/product';
import { API_URL, HEADERS_REQUEST } from './constants';
const PRODUCTS_URL = `${API_URL}/products`;

export async function getProducts(): Promise<ListProducts> {
  const response = await fetch(PRODUCTS_URL, {
    // cache: 'no-cache',
    next: {
      revalidate: 3600
    },
    headers: HEADERS_REQUEST,
  });
  return await response.json();
}

export async function getProduct(productId: number): Promise<Product> {
  const url = `${PRODUCTS_URL}/${productId}`;
  const response = await fetch(url, {
    next: {
      revalidate: 3600
    },
    headers: HEADERS_REQUEST,
  });
  return await response.json();
}