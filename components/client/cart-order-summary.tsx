'use client';
import { OrderData } from 'interfaces';
import React from 'react';

interface CartOrderSummaryProps {
  order: OrderData;
}

export function CartOrderSummary(props: CartOrderSummaryProps) {
  const { order } = props;

  return (
    <div className="summary summary-cart">
      <h3 className="summary-title">Order Summary</h3>
      <table className="table table-summary">
        <tbody>
          <tr className="summary-subtotal">
            <td>Subtotal:</td>
            <td>{order.display_item_total}</td>
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
            <td>{order.total}</td>
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
      <a href={order.email ? '/checkout' : '/account'} className="btn btn-primary btn-order btn-block">
        PROCEED TO CHECKOUT
      </a>
    </div>
  );
}
