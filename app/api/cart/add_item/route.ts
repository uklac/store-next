import { addItemAndSetOrder, addItemCart } from 'apis/cart-api';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

const URL_API_BACKEND = process.env.URL_API_BACKEND;

export async function POST(request: any) {
  const data = await request.json();
  const { item } = data;

  const cookieStore = cookies();
  const orderNumber = cookieStore.get('order_number')?.value;
  const token = cookieStore.get('guest_token')?.value;
  const userEmail = cookieStore.get('user_email')?.value;
  const userId = cookieStore.get('user_id')?.value;

  const ADD_ITEM_FIRST_TIME = `${URL_API_BACKEND}/cart/add_item`;
  const ADD_ITEM_TO_ORDER = `${URL_API_BACKEND}/orders/${orderNumber}/line_items`;

  if (orderNumber && token) {
    try {
      const response = await addItemCart(ADD_ITEM_TO_ORDER, { token, item });
      return NextResponse.json(response);
    } catch (error) {
      return NextResponse.error();
    }
  } else {
    try {
      const { order } = await addItemAndSetOrder(ADD_ITEM_FIRST_TIME, {
        item,
        email: userEmail,
        userId: userId,
      });
      //@ts-ignore
      cookieStore.set('guest_token', order.guest_token);
      //@ts-ignore
      cookieStore.set('order_number', order.number);
      return NextResponse.json(order);
    } catch (error) {
      return NextResponse.error();
    }
  }
  // const payload = orderNumber
  //   ? {
  //       line_item: {
  //         variant_id: item.variant_id,
  //         quantity: item.quantity,
  //       },
  //     }
  //   : {
  //       variant_id: item.variant_id,
  //       quantity: item.quantity,
  //     };

  // try {
  //   const resp = await addItemCart(url, payload);
  //   return NextResponse.json(resp);
  // } catch (error) {
  //   return NextResponse.error();
  // }

  // const headers = token ? {
  //   'Content-Type': 'application/json',
  //   Accept: 'application/json',
  //   'X-Spree-Order-Token': token,
  // } : {
  //   'Content-Type': 'application/json',
  //   Accept: 'application/json',

  // }

  // const options = {
  //   method: 'POST',
  //   headers: headers,
  //   body: JSON.stringify(payload),
  // };
  // const response = await fetch(url, options);
  // const { order } =  await response.json();

  // //@ts-ignore
  // cookieStore.set('guest_token', order.guest_token);
  // //@ts-ignore
  // cookieStore.set('order_number', order.number);
  // console.log('order: ', order);
  // return NextResponse.json(order);
}
