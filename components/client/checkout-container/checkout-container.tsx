'use client';

import { CheckoutSummary } from '../checkout-summary/checkout-summary';
import { useCallback, useEffect } from 'react';
import { DeliveryStep } from '../delivery-step/delivery-step';
import { ConfirmStep } from '../confirm-step/confirm-step';
import { AddressStep } from '../address-step';
import { PaymentStep } from '../payment-step/payment-step';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import { useCart } from 'store/hooks/cart-hook';
import styles from './checkout-container.module.scss';

interface Props {}

export async function CheckoutContainer(props: Props) {
  const { orderCart, _getCart } = useCart();

  const fetchOrder = useCallback(async () => {
    await _getCart();
  }, []);

  useEffect(() => {
    fetchOrder();
  }, []);

  return (
    <div className="checkout">
      <div className="container">
        <h1 className={`${styles['checkout-title']}`}>Checkout</h1>
        {orderCart && (
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
            <div>
              <div className="row">
                <div className="col-lg-9">
                  <TabPanel className={`${styles['tab-step']}`}>
                    <AddressStep />
                  </TabPanel>
                  <TabPanel>
                    <DeliveryStep order={orderCart} />
                  </TabPanel>
                  <TabPanel>
                    <PaymentStep payments={orderCart.payment_methods} />
                  </TabPanel>
                  <TabPanel>
                    <ConfirmStep order={orderCart} />
                  </TabPanel>
                </div>
                <aside className="col-lg-3">
                  <CheckoutSummary order={orderCart} />
                </aside>
              </div>
            </div>
          </Tabs>
        )}
      </div>
    </div>
  );
}
