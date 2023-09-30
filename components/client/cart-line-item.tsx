import { removeLineItem, updateLineItem } from 'apis/cart-api';
import { LineItem } from 'interfaces';
import Link from 'next/link';
import React from 'react';

interface Props {
  item: LineItem;
  orderNumber: string;
  token: string;
  onRemove: (id: number) => void;
}

export function CartLineItem(props: Props) {
  const { item, orderNumber, token, onRemove } = props;

  async function updateQuantityProduct(id: number, quantity: number) {
    const response = await updateLineItem({
      itemId: id,
      quantity: quantity,
      token: token,
      orderNumber: orderNumber,
    });
    console.log('response: ', response);
  }

  async function removeProduct(id: number) {
    const response = await removeLineItem({
      itemId: id,
      token: token,
      orderNumber: orderNumber,
    });
    console.log('response: ', response);
    onRemove(id);
  }

  return (
    <tr>
      <td className="product-col">
        <div className="product">
          <figure className="product-media">
            <img
              src={item.variant.images[0].product_url}
              alt={item.variant.images[0].alt}
            />
          </figure>
          <div className="">
            <h3 className="product-title">
              <Link href={`products/${item.variant.product_id}`}>
                {item.variant.name}
              </Link>
            </h3>
            <h6>{item.variant.options_text}</h6>
          </div>
        </div>
      </td>
      <td className="price-col">{item.price}</td>
      <td className="quantity-col">
        <div className="cart-product-quantity">
          <select
            className="form-control"
            onChange={(ev: any) => {
              const quantity = ev.target.value || item.quantity;
              updateQuantityProduct(item.id, quantity);
            }}
          >
            <option value={1} selected={item.quantity === 1}>
              1
            </option>
            <option value={2} selected={item.quantity === 2}>
              2
            </option>
            <option value={3} selected={item.quantity === 3}>
              3
            </option>
            <option value={4} selected={item.quantity === 4}>
              4
            </option>
            <option value={5} selected={item.quantity === 5}>
              5
            </option>
            <option value={6} selected={item.quantity === 6}>
              6
            </option>
            <option value={7} selected={item.quantity === 7}>
              7
            </option>
            <option value={8} selected={item.quantity === 8}>
              8
            </option>
          </select>
        </div>
      </td>
      <td className="total-col">{item.display_amount}</td>
      <td className="remove-col">
        <button className="btn-remove">
          <i
            className="icon-close"
            onClick={() => {
              removeProduct(item.id);
            }}
          ></i>
        </button>
      </td>
    </tr>
  );
}
