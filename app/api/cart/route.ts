import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

const URL_API_BACKEND = process.env.URL_API_BACKEND;

export async function GET() {
  const cookieStore = cookies();
  const orderNumber = cookieStore.get('order_number')?.value;
  const token = cookieStore.get('guest_token')?.value;
  const url = `${URL_API_BACKEND}/orders/${orderNumber}`;
  try {
    const response = await fetch(url, {
      method: 'GET',
      cache: 'default',
      //@ts-ignore
      headers: { Accept: 'application/json', 'X-Spree-Order-Token': token },
    });
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.error();
  }
}
