'use client';

import { getCart } from 'apis/cart-api';
import { OrderData } from 'interfaces';
import { useCallback, useEffect, useState } from 'react';

interface Props {}

export async function Cart(props: Props) {
  const [order, setOrder] = useState<OrderData>();

  const fetchOrder = useCallback(async (orderNumber: string, token: string) => {
    try {
      const response = await getCart(orderNumber, token);
      setOrder(response);
    } catch (error) {
      console.error('Error fetching cart:', error);
    }
  }, []);

  useEffect(() => {
    const orderNumber = localStorage.getItem('order_number');
    const guestToken = localStorage.getItem('guest_token');
    if (orderNumber && guestToken) {
      fetchOrder(orderNumber, guestToken);
    }
  }, []);

  return (
    <div className="dropdown cart-dropdown">
      <a
        href="/cart"
        className="dropdown-toggle"
        role="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        data-display="static"
      >
        <div className="icon">
          <i className="icon-shopping-cart"></i>
          <span className="cart-count">{order?.line_items.length}</span>
        </div>
        <p>Cart</p>
      </a>

      <div className="dropdown-menu dropdown-menu-right">
        <div className="dropdown-cart-products">
          <div className="product">
            <div className="product-cart-details">
              <h4 className="product-title">
                <a href="product.html">Beige knitted elastic runner shoes</a>
              </h4>

              <span className="cart-product-info">
                <span className="cart-product-qty">1</span>x $84.00
              </span>
            </div>

            <figure className="product-image-container">
              <a href="product.html" className="product-image">
                {/* <img src="assets/images/products/cart/product-1.jpg" alt="product"> */}
              </a>
            </figure>
            <a href="#" className="btn-remove" title="Remove Product">
              <i className="icon-close"></i>
            </a>
          </div>

          <div className="product">
            <div className="product-cart-details">
              <h4 className="product-title">
                <a href="product.html">Blue utility pinafore denim dress</a>
              </h4>

              <span className="cart-product-info">
                <span className="cart-product-qty">1</span>x $76.00
              </span>
            </div>

            <figure className="product-image-container">
              <a href="product.html" className="product-image">
                {/* <img src="assets/images/products/cart/product-2.jpg" alt="product"> */}
              </a>
            </figure>
            <a href="#" className="btn-remove" title="Remove Product">
              <i className="icon-close"></i>
            </a>
          </div>
        </div>

        <div className="dropdown-cart-total">
          <span>Total</span>

          <span className="cart-total-price">$160.00</span>
        </div>

        <div className="dropdown-cart-action">
          <a href="cart.html" className="btn btn-primary">
            View Cart
          </a>
          <a href="checkout.html" className="btn btn-outline-primary-2">
            <span>Checkout</span>
            <i className="icon-long-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
