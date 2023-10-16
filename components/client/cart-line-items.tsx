'use client';

import { LineItem, OrderData } from 'interfaces';
import React, { useCallback, useEffect, useState } from 'react';
import { CartLineItem } from './cart-line-item';
import { useCart } from 'store/hooks/cart-hook';
import Skeleton from './skeleton';

interface Props {
  order: OrderData;
  lineItems?: LineItem[];
  orderNumber?: string;
  onChange?: (id: number) => void;
}

export function CartLineItems(props: Props) {
  const { order } = props;
  // const orderCart = order;
  const { orderCart, _getCart } = useCart();
  // const [status, setStatus] = useState('idle');

  // const fetchOrder = useCallback(async () => {
  //   setStatus('pending');
  //   const { error } = await _getCart();
  //   if (error) {
  //     setStatus('rejected');
  //   } else {
  //     setStatus('successful');
  //   }
  // }, []);

  // useEffect(() => {
  //   fetchOrder();
  // }, []);

  // if (status === 'idle' || status === 'pending') {
  //   return (
  //     <>
  //       {[1, 2, 3].map((item, index) => (
  //         <Skeleton key={index} amount={3} />
  //       ))}
  //     </>
  //   );
  // }

  // if (status === 'rejected') {
  //   return <p>No se pudo cargar la orden, intenta refrescando</p>;
  // }

  return (
    <>
      {orderCart && orderCart.line_items ? (
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
            {orderCart.line_items.map((item, index) => (
              <CartLineItem item={item} key={index} onChange={() => {}} />
            ))}
          </tbody>
        </table>
      ) : (
        <p>No hay productos en tu carrito</p>
      )}
    </>
  );
}
