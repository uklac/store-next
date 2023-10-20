import { ListProducts } from 'interfaces';
import { API_URL, HEADERS_REQUEST } from './constants';
import { ListTaxon } from 'interfaces';
import { Taxonomies } from 'interfaces/taxonomies';
const BASE_URL_TAXONS = `${API_URL}/taxons`;
const BASE_URL_TAXONOMIES = `${API_URL}/taxonomies`;

export async function getTaxons(): Promise<ListTaxon> {
  const response = await fetch(BASE_URL_TAXONS, {
    cache: 'default',
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

export async function getTaxonomies(): Promise<Taxonomies> {
  const url = `${BASE_URL_TAXONOMIES}`;
  const response = await fetch(url, {
    cache: 'default',
    headers: HEADERS_REQUEST,
  });
  return await response.json();
}