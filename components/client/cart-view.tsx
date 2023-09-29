'use client';
import { getCart } from 'apis/cart-api';
import { useCallback, useEffect } from 'react';

export async function CartView() {
  
  const fetchOrder = useCallback(async (orderNumber: string, token: string) => {
    const response = await getCart(orderNumber, token);
    console.log('response: ', response);
  }, []);
  
  useEffect(() => {
    const orderNumber = localStorage.getItem('order_number');
    const guestToken = localStorage.getItem('guest_token');
    if (orderNumber && guestToken) {
      fetchOrder(orderNumber, guestToken)
    }
  }, [])
  
  // const order = await getCart(orderNumber);
  // console.log('order: ',order);
  return (
    <div>lenin</div>
  )
}
