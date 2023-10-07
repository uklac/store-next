'use client';

import { CheckoutSummary } from '../checkout-summary/checkout-summary';
import { useCallback, useEffect, useState } from 'react';
import { OrderData } from 'interfaces';
import { getCart } from 'apis/cart-api';
import { DeliveryStep } from '../delivery-step/delivery-step';
import { ConfirmStep } from '../confirm-step/confirm-step';
import { AddressStep } from '../address-step';
import { PaymentStep } from '../payment-step/payment-step';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import styles from './checkout-container.module.scss';

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
        <h1 className={`${styles['checkout-title']}`}>Checkout</h1>
        <Tabs
          selectedTabClassName="show"
          selectedTabPanelClassName="active show"
        >
          <TabList className="nav nav-pills justify-content-start">
            <Tab className="nav-item">
              <span className="nav-link"> Address</span>
            </Tab>
            <Tab className="nav-item">
              <span className="nav-link"> Delivery</span>
            </Tab>
            <Tab className="nav-item">
              <span className="nav-link">Payment</span>
            </Tab>
            <Tab className="nav-item">
              <span className="nav-link">Confirm</span>
            </Tab>
          </TabList>
          <form action="#">
            <div className="row">
              <div className="col-lg-9">
                <TabPanel className={`${styles['tab-step']}`}>
                  <AddressStep />
                </TabPanel>
                <TabPanel>{order && <DeliveryStep order={order} />}</TabPanel>
                <TabPanel>
                  {order && <PaymentStep payments={order.payment_methods} />}
                </TabPanel>
                <TabPanel>{order && <ConfirmStep order={order} />}</TabPanel>
              </div>
              <aside className="col-lg-3">
                {order && <CheckoutSummary order={order} />}
              </aside>
            </div>
          </form>
        </Tabs>
      </div>
    </div>
  );
}
