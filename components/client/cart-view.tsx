'use client';
import { getCart, updateLineItem, removeLineItem } from 'apis/cart-api';
import { OrderData } from 'interfaces';
import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';

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

  async function updateQuantityProduct(id: number, quantity: number) {
    if (order) {
      const response = await updateLineItem({
        itemId: id,
        quantity: quantity,
        token: guestToken,
        orderNumber: order.number,
      });
      console.log('response: ', response);
      fetchOrder(order.number, guestToken);
    }
  }

  async function removeProduct(id: number) {
    if (order) {
      const response = await removeLineItem({
        itemId: id,
        token: guestToken,
        orderNumber: order.number,
      });
      console.log('response: ', response);
      fetchOrder(order.number, guestToken);
    }
  }

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
                    <tr key={index}>
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
                              <Link
                                href={`products/${item.variant.product_id}`}
                              >
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
                  ))}
              </tbody>
            </table>
          </div>
          { order && 
            <aside className="col-lg-3">
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
                          <button
                            className="btn btn-outline-primary-2"
                            type="submit"
                          >
                            <i className="icon-long-arrow-right"></i>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <a
                  href="/checkout"
                  className="btn btn-primary btn-order btn-block"
                >
                  PROCEED TO CHECKOUT
                </a>
              </div>
            </aside>
          }
        </div>
      </div>
    </div>
  );
}
