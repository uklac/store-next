'use client';

import { LineItem } from 'interfaces';
import Link from 'next/link';
import React, { useState } from 'react';
import { useCart } from 'store/hooks/cart-hook';

interface Props {
  item: LineItem;
  onChange: (id: number) => void;
}

export function CartLineItem(props: Props) {
  const { item, onChange } = props;
  const [updating, setUpdating] = useState(false);
  const [deleted, setDeleted] = useState(false);
  const [total, setTotal] = useState(item.display_amount);
  const [quantity, setQuantity] = useState(item.quantity);
  const { _updateAmountItem, _removeCartItem } = useCart();

  async function updateQuantityProduct(id: number, quantity: number) {
    setUpdating(true);
    const { error, data } = await _updateAmountItem(id, quantity);
    setUpdating(false);
    if (error) {
      console.log('e: ', error);
    } else {
      setTotal(data.display_amount);
      setQuantity(data.quantity);
      onChange(id);
    }
  }

  async function removeProduct(id: number) {
    setUpdating(true);
    try {
      await _removeCartItem(id);
      setUpdating(false);
      setDeleted(true);
      onChange(id);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <tr
      className={`line-item-row ${updating ? 'spinner' : ''} ${
        deleted ? 'deleted' : ''
      }`}
    >
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
            value={quantity}
            className="form-control"
            onChange={(ev: any) => {
              const quantity = ev.target.value || item.quantity;
              updateQuantityProduct(item.id, quantity);
            }}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
            <option value={7}>7</option>
            <option value={8}>8</option>
          </select>
        </div>
      </td>
      <td className="total-col">{total}</td>
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
