import { LineItem } from 'interfaces';
import React from 'react';
import { CartLineItem } from './cart-line-item';

interface Props {
  lineItems: LineItem[];
  orderNumber: string;
  token: string;
  onChange: (id: number) => void;
}

export function CartLineItems(props: Props) {
  const { lineItems, orderNumber, token, onChange } = props;

  return (
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
        {lineItems.map((item, index) => (
          <CartLineItem
            item={item}
            key={index}
            orderNumber={orderNumber}
            token={token}
            onChange={onChange}
          />
        ))}
      </tbody>
    </table>
  );
}
