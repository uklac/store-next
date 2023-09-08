import { ListProducts } from 'interfaces';
import { API_URL, HEADERS_REQUEST } from './constants';
import { ListTaxon } from 'interfaces';
const BASE_URL_TAXONS = `${API_URL}/taxons`;

export async function getTaxons(): Promise<ListTaxon> {
  const response = await fetch(BASE_URL_TAXONS, {
    headers: HEADERS_REQUEST,
  });
  return await response.json();
}

export async function getTaxonsProducts(id:number): Promise<ListProducts> {
  const response = await fetch(`${BASE_URL_TAXONS}/products?id=${id}`, {
    cache: 'no-cache',
    headers: HEADERS_REQUEST,
  });
  return await response.json();
}