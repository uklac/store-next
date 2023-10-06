'use client';

import { CheckoutSummary } from './checkout-summary/checkout-summary';
import { useCallback, useEffect, useState } from 'react';
import { OrderData } from 'interfaces';
import { getCart } from 'apis/cart-api';
import { DeliveryStep } from './delivery-step/delivery-step';
import { ConfirmStep } from './confirm-step/confirm-step';
import { AddressStep } from './address-step';
import { PaymentStep } from './payment-step/payment-step';

interface Props {}

export async function CheckoutContainer(props: Props) {
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
    <div className="checkout">
      <div className="container">
        <form action="#">
          <div className="row">
            <div className="col-lg-9">
              <AddressStep />
              {/* {order && <DeliveryStep order={order} />}
              {order && <PaymentStep payments={order.payment_methods} />}
              {order && <ConfirmStep order={order} />} */}
            </div>
            <aside className="col-lg-3">
              <CheckoutSummary />
            </aside>
          </div>
        </form>
      </div>
    </div>
  );
}
