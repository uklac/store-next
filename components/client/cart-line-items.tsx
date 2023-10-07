'use client';

import { LineItem } from 'interfaces';
import React, { useCallback, useEffect, useState } from 'react';
import { CartLineItem } from './cart-line-item';
import { useCart } from 'store/hooks/cart-hook';
import Skeleton from './skeleton';

interface Props {
  lineItems?: LineItem[];
  orderNumber?: string;
  onChange?: (id: number) => void;
}

export function CartLineItems(props: Props) {
  const { orderCart, _getCart } = useCart();
  const [status, setStatus] = useState('idle');

  const fetchOrder = useCallback(async () => {
    setStatus('pending');
    const { error } = await _getCart();
    if (error) {
      setStatus('rejected');
    } else {
      setStatus('successful');
    }
  }, []);

  useEffect(() => {
    fetchOrder();
  }, []);

  const SkeletonItem = () => (
    <>
      <tr className="line-item-row">
        <td className="product-col">
          <Skeleton />
        </td>
        <td className="product-col">
          <Skeleton />
        </td>
        <td className="product-col">
          <Skeleton />
        </td>
        <td className="product-col">
          <Skeleton />
        </td>
        <td className="remove-col"></td>
      </tr>
    </>
  );

  if (status === 'idle' || status === 'pending') {
    return (
      <>
        {[1, 2, 3].map((item, index) => (
          <SkeletonItem key={index} />
        ))}
      </>
    );
  }

  if (status === 'rejected') {
    return <p>No se pudo cargar la orden, intenta refrescando</p>;
  }

  return (
    <>
      {orderCart &&
        orderCart.line_items.map((item, index) => (
          <CartLineItem
            item={item}
            key={index}
            onChange={() => {}}
          />
        ))}
    </>
  );
}
