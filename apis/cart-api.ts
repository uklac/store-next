import { OrderData } from 'interfaces';
import { Item, ItemsCart } from 'interfaces/cart';

type AddItemToOrder = {
  item: Item,
  orderNumber?: string;
  token?: string;
}

const ADD_ITEM_URL = 'http://localhost:3000/api/cart/add_item';
const ADD_ITEM_URL1 = 'http://localhost:3000/api/cart';

export async function addItemCart(params: AddItemToOrder): Promise<any> {
  const { item } = params;
  const url = `${ADD_ITEM_URL}`;
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: 'Bearer undefined',
    },
    body: JSON.stringify({
      variant_id: item.variant_id,
      quantity: item.quantity,
    }),
  };
  const response = await fetch(url, options);
  return await response.json();
}

export async function addItemToOrder(params: AddItemToOrder): Promise<any> {
  const { item, token, orderNumber } = params;
  const url = `http://localhost:3000/api/orders/${orderNumber}/line_items`;
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'X-Spree-Order-Token': token || ''
    },
    body: JSON.stringify({
      line_item: {
        variant_id: item.variant_id,
        quantity: item.quantity,
      }
    }),
  };
  const response = await fetch(url, options);
  return await response.json();
}

export async function getItemsCart(): Promise<ItemsCart> {
  const url = `${ADD_ITEM_URL1}`;
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
