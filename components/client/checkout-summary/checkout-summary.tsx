'use client';

import { OrderData } from 'interfaces';
import styles from './checkout-summary.module.scss';
import { OrderItems } from '../../server/order-items/order-items';
import { useCallback, useEffect, useState } from 'react';
import { getCart } from 'apis/cart-api';

interface CheckoutSummaryProps {
  order: OrderData;
}

export function CheckoutSummary(props: CheckoutSummaryProps) {
  const { order } = props;

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
