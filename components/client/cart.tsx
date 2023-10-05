'use client';

import { getCart } from 'apis/cart-api';
import { OrderData } from 'interfaces';
import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { useCart } from 'store/hooks/cart-hook';
// import { currentUser } from 'apis/account-api';

interface Props {}

export async function Cart(props: Props) {
  const [order, setOrder] = useState<OrderData>();
  const { totalProductsInCart, _getCart } = useCart();

  const fetchOrder = useCallback(async (orderNumber: string, token: string) => {
    try {
      const { success, data } = await _getCart();
      // const response = await getCart(orderNumber, token);
      setOrder(data);
    } catch (error) {
      console.error('Error fetching cart:', error);
    }
  }, []);

  useEffect(() => {
    fetchOrder('','');
    // const orderNumber = localStorage.getItem('order_number');
    // const guestToken = localStorage.getItem('guest_token');
    // if (orderNumber && guestToken) {
    //   fetchOrder(orderNumber, guestToken);
    // }
  }, []);

  return (
    <div className="dropdown cart-dropdown">
      <Link href='/cart' className="dropdown-toggle">
        <div className="icon">
          <i className="icon-shopping-cart"></i>
          {totalProductsInCart > 0 &&
            <span className="cart-count">{order?.line_items.length}</span>
          }
        </div>
        <p>Cart</p>
      </Link>
    </div>
  );
}
