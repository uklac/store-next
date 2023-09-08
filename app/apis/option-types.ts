import { OptionType } from 'app/interfaces/product';
import { API_URL, HEADERS_REQUEST } from './constants';
const OPTION_TYPES_URL = `${API_URL}/option_types`;

export async function getOptionTypes(): Promise<OptionType[]> {
  const response = await fetch(OPTION_TYPES_URL, {
    headers: HEADERS_REQUEST,
  });
  return await response.json();
}