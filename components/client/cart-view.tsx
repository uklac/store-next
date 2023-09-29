'use client';
import { getCart } from 'apis/cart-api';
import { useCallback, useEffect } from 'react';

export async function CartView() {
  
  const fetchOrder = useCallback(async (orderNumber: string) => {
    const response = await getCart(orderNumber);
    console.log('response: ', response);
  }, []);
  
  useEffect(() => {
    const orderNumber = localStorage.getItem('order_number') || '';
    fetchOrder(orderNumber)
  }, [])
  
  // const order = await getCart(orderNumber);
  // console.log('order: ',order);
  return (
    <div>lenin</div>
  )
}
