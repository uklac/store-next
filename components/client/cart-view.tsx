'use client';
import { getCart } from 'apis/cart-api';
import { OrderData } from 'interfaces';
import { useCallback, useEffect, useState } from 'react';
import { CartOrderSummary } from './cart-order-summary';
import { CartLineItems } from './cart-line-items';

export async function CartView() {
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
    <div className="cart">
      <div className="container">
        <div className="row">
          {order && order.line_items.length > 0 ? (
            <>
              <div className="col-lg-9">
                <CartLineItems
                  lineItems={order.line_items}
                  orderNumber={order.number}
                  onChange={() => {
                    const storeOrderNumber =
                      localStorage.getItem('order_number');
                    const storeGuestToken = localStorage.getItem('guest_token');
                    if (storeOrderNumber && storeGuestToken) {
                      fetchOrder(storeOrderNumber, storeGuestToken);
                    }
                  }}
                />
              </div>
              <aside className="col-lg-3">
                <CartOrderSummary order={order} />
              </aside>
            </>
          ) : (
            <h4>Tu carrito esta vació</h4>
          )}
        </div>
      </div>
    </div>
  );
}
