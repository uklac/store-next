'use client';
import React from 'react';
import { Button } from './button/button';
import { useCart } from 'store/hooks/cart-hook';
import { useRouter } from 'next/navigation';

export function CartOrderSummary() {
  const { _checkoutCart, orderCart } = useCart();
  const router = useRouter();

  async function handleCheckout() {
    if (orderCart?.state === 'cart') {
      const { error } = await _checkoutCart();
      if (error) {
        console.log('e: ', error);
      } else {
        router.push('/checkout');
      }
    } else {
      router.push('/checkout');
    }
  }

  return (
    <div className="summary summary-cart">
      <h3 className="summary-title">Order Summary</h3>
      <table className="table table-summary">
        <tbody>
          <tr className="summary-subtotal">
            <td>Subtotal:</td>
            <td>{orderCart?.display_item_total}</td>
          </tr>
          <tr className="summary-subtotal">
            <td>Envio:</td>
            <td>N/A</td>
          </tr>
          <tr className="summary-subtotal">
            <td>Discount:</td>
            <td>$0.0</td>
          </tr>
          <tr className="summary-total">
            <td>Total:</td>
            <td>{orderCart?.total}</td>
          </tr>
        </tbody>
      </table>
      <div className="pb-3">
        <div className="cart-discount">
          <form action="#">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                required
                placeholder="coupon code"
              />
              <div className="input-group-append">
                <button className="btn btn-outline-primary-2" type="submit">
                  <i className="icon-long-arrow-right"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      {orderCart?.email ? (
        <Button onClick={handleCheckout}>PROCEED TO CHECKOUT</Button>
      ) : (
        <a href={'/account'} className="btn btn-primary btn-order btn-block">
          PROCEED TO CHECKOUTss
        </a>
      )}
    </div>
  );
}
