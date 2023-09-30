'use client';
import { getCart, updateLineItem, removeLineItem } from 'apis/cart-api';
import { OrderData } from 'interfaces';
import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import { CartOrderSummary } from './cart-order-summary';
import { CartLineItem } from './cart-line-item';

export async function CartView() {
  const [order, setOrder] = useState<OrderData>();
  const [guestToken, setGuestToken] = useState<string>('');

  const fetchOrder = useCallback(async (orderNumber: string, token: string) => {
    try {
      const response = await getCart(orderNumber, token);
      setOrder(response);
      console.error('response:', response);
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
          <div className="col-lg-9">
            <table className="table table-cart table-mobile">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {order &&
                  order.line_items.map((item, index) => (
                    <CartLineItem
                      item={item}
                      key={index}
                      orderNumber={order.number}
                      token={guestToken}
                    />
                  ))}
              </tbody>
            </table>
          </div>
          {order && (
            <aside className="col-lg-3">
              <CartOrderSummary order={order} />
            </aside>
          )}
        </div>
      </div>
    </div>
  );
}
