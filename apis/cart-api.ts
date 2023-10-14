import { OrderData } from 'interfaces';
import { Item, ItemsCart } from 'interfaces/cart';

type AddItemToOrder = {
  item: Item;
  orderNumber?: string;
  token?: string;
  email?: string;
  userId?: number;
};

type UpdateLineItemParams = {
  itemId: number;
  orderNumber: string;
  quantity: number;
  token: string;
};

type RemoveLineItemParams = {
  itemId: number;
  orderNumber: string;
  token: string;
};

const ADD_ITEM_URL = 'http://localhost:3000/api/cart/add_item';
const ADD_ITEM_URL1 = 'http://localhost:3000/api/cart';

export async function getCartProducts(): Promise<OrderData> {
  const response = await fetch('/api/cart', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  });
  return await response.json();
}

export async function addItemToCart(item: {
  item: {
    variant_id: number;
    quantity: number;
  }
}): Promise<any> {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(item),
  };
  const response = await fetch('/api/cart/add_item', options);
  return await response.json();
}

export async function addItemAndSetOrder(
  url: string,
  params: {
    item: {
      variant_id: number;
      quantity: number;
    };
    email?: string | null;
    userId?: string | null;
  }
): Promise<any> {
  const { item, email, userId } = params;
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      variant_id: item.variant_id,
      quantity: item.quantity,
      email: email,
      user_id: userId,
    }),
  };
  const response = await fetch(url, options);
  return await response.json();
}

export async function addItemCart(
  url: string,
  params: { token: string; item: { variant_id: number; quantity: number } }
): Promise<any> {
  const { item, token } = params;
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'X-Spree-Order-Token': token,
    },
    body: JSON.stringify({
      line_item: {
        variant_id: item.variant_id,
        quantity: item.quantity,
      },
    }),
  };
  const response = await fetch(url, options);
  return await response.json();
}

export async function addItemToOrderAndCreate(
  params: AddItemToOrder
): Promise<any> {
  const { item, email, userId } = params;
  const url = `${ADD_ITEM_URL}`;
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      // Authorization: 'Bearer undefined',
    },
    body: JSON.stringify({
      variant_id: item.variant_id,
      quantity: item.quantity,
      email: email,
      user_id: userId,
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
      'X-Spree-Order-Token': token || '',
    },
    body: JSON.stringify({
      line_item: {
        variant_id: item.variant_id,
        quantity: item.quantity,
      },
    }),
  };
  const response = await fetch(url, options);
  return await response.json();
}

export async function updateLineItem(
  params: UpdateLineItemParams
): Promise<any> {
  const { quantity, itemId, orderNumber, token } = params;
  const url = `http://localhost:3000/api/orders/${orderNumber}/line_items/${itemId}`;
  const options = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'X-Spree-Order-Token': token,
    },
    body: JSON.stringify({
      line_item: {
        quantity: quantity,
      },
    }),
  };
  const response = await fetch(url, options);
  return await response.json();
}

export async function removeLineItem(
  params: RemoveLineItemParams
): Promise<any> {
  const { itemId, orderNumber, token } = params;
  const url = `http://localhost:3000/api/orders/${orderNumber}/line_items/${itemId}`;
  const options = {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'X-Spree-Order-Token': token,
    },
  };
  //rails not return anything
  await fetch(url, options);
  return 'ok';
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

export async function addUserToOrder(
  email: string,
  userId: number,
  orderNumber: string,
  token: string
): Promise<OrderData> {
  const url = `http://localhost:3000/api/orders/${orderNumber}`;
  const response = await fetch(url, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'X-Spree-Order-Token': token,
    },
    body: JSON.stringify({
      email,
      user_id: userId,
    }),
  });
  return await response.json();
}

export async function getCurrentOrder(token: string): Promise<OrderData> {
  const url = `http://localhost:3000/api/orders/current`;
  const response = await fetch(url, {
    method: 'GET',
    headers: { Accept: 'application/json', Authorization: `Bearer ${token}` },
  });
  return await response.json();
}

export async function checkoutCart(
  token: string,
  orderNumber: string
): Promise<OrderData> {
  const url = `http://localhost:3000/api/cart/checkout`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'X-Spree-Order-Token': token,
    },
    body: JSON.stringify({
      order_number: orderNumber,
    }),
  });
  return await response.json();
}

export async function addAddressToOrder(
  token: string,
  orderNumber: string,
  addressParams: any
): Promise<OrderData> {
  const url = `http://localhost:3000/api/orders/${orderNumber}`;
  const response = await fetch(url, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'X-Spree-Order-Token': token,
    },
    body: JSON.stringify({
      use_billing: true,
      ship_address_attributes: addressParams,
    }),
  });
  return await response.json();
}

export async function nextCheckoutStep(
  token: string,
  orderNumber: string
): Promise<OrderData> {
  const url = `http://localhost:3000/api/checkouts/${orderNumber}`;
  const response = await fetch(url, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'X-Spree-Order-Token': token,
    },
    body: JSON.stringify({}),
  });
  return await response.json();
}
