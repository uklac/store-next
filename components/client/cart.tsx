'use client';

import { getCart } from 'apis/cart-api';
import { OrderData } from 'interfaces';
import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';

interface Props {}

export async function Cart(props: Props) {
  const [order, setOrder] = useState<OrderData>();

  const fetchOrder = useCallback(async (orderNumber: string, token: string) => {
    try {
      const response = await getCart(orderNumber, token);
      setOrder(response);
    } catch (error) {
      console.error('Error fetching cart:', error);
    }
  }, []);

  useEffect(() => {
    const orderNumber = localStorage.getItem('order_number');
    const guestToken = localStorage.getItem('guest_token');
    if (orderNumber && guestToken) {
      fetchOrder(orderNumber, guestToken);
    }
  }, []);

  return (
    <div className="dropdown cart-dropdown">
      <Link href='/cart' className="dropdown-toggle">
        <div className="icon">
          <i className="icon-shopping-cart"></i>
          <span className="cart-count">{order?.line_items.length}</span>
        </div>
        <p>Cart</p>
      </Link>
    </div>
  );
}
