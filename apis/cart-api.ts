import { OrderData } from 'interfaces';
import { Item, ItemsCart } from 'interfaces/cart';

const ACCOUNT_URL = 'http://localhost:3000/api/cart/add_item';

const ACCOUNT_URL1 = 'http://localhost:3000/api/cart';

export async function addItemCart(params: Item): Promise<any> {
  const url = `${ACCOUNT_URL}`;
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: 'Bearer undefined',
    },
    body: JSON.stringify({
      variant_id: params.variant_id,
      quantity: params.quantity,
    }),
  };
  const response = await fetch(url, options);
  return await response.json();
}

export async function getItemsCart(): Promise<ItemsCart> {
  const url = `${ACCOUNT_URL1}`;
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: 'Bearer undefined',
    },
  });
  return await response.json();
}

export async function getCart(
  orderNumber: string,
  token: string
): Promise<OrderData> {
  const url = `http://localhost:3000/api/orders/${orderNumber}`;
  const response = await fetch(url, {
    method: 'GET',
    headers: { Accept: 'application/json', 'X-Spree-Order-Token': token },
  });
  return await response.json();
}
