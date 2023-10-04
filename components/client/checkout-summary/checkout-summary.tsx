'use client';

import { OrderData } from 'interfaces';
import styles from './checkout-summary.module.scss';
import { OrderItems } from '../../server/order-items/order-items';
import { useCallback, useEffect, useState } from 'react';
import { getCart } from 'apis/cart-api';

interface CheckoutSummaryProps {
  // order: OrderData;
}

export function CheckoutSummary(props: CheckoutSummaryProps) {
  // const { order } = props;

  const [order, setOrder] = useState<OrderData>();
  const [guestToken, setGuestToken] = useState<string>('');

  const fetchOrder = useCallback(async (orderNumber: string, token: string) => {
    try {
      const order = await getCart(orderNumber, token);
      setOrder(order);
      console.error('response:', order);
    } catch (error) {
      console.error('Error fetching cart:', error);
    }
  }, []);

  useEffect(() => {
    const storeOrderNumber = localStorage.getItem('order_number');
    const storeGuestToken = localStorage.getItem('guest_token');
    if (storeOrderNumber && storeGuestToken) {
      setGuestToken(storeGuestToken);
      fetchOrder(storeOrderNumber, storeGuestToken);
    }
  }, []);

  return (
    <div className="summary">
      <section
        className={`${styles['checkout-summary']}`}
        id="checkout-summary"
      >
        <h2 className={`${styles['checkout-summary__title']}`}>
          Order Summary
        </h2>
        {order && <OrderItems orderItems={order} />}
      </section>
    </div>
  );
}
