'use client';
import { getCart } from 'apis/cart-api';
import { OrderData } from 'interfaces';
import { useCallback, useEffect, useState } from 'react';

export async function CartView() {
  const [productsCart, setProductsCart] = useState<OrderData>();

  const fetchOrder = useCallback(async (orderNumber: string, token: string) => {
    try {
      const response = await getCart(orderNumber, token);
      setProductsCart(response);
      console.error('response:', response);
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
                {productsCart &&
                  productsCart.line_items.map((item, index) => (
                    <tr key={index}>
                      <td className="product-col">
                        <div className="product">
                          <figure className="product-media">
                            <a href="#">
                              <img
                                src={item.variant.images[0].product_url}
                                alt="Product image"
                              />
                            </a>
                          </figure>

                          <h3 className="product-title">
                            <a href="#">{item.variant.name}</a>
                          </h3>
                        </div>
                      </td>
                      <td className="price-col">{item.price}</td>
                      <td className="quantity-col">
                        <div className="cart-product-quantity">
                          <input
                            type="number"
                            className="form-control"
                            value={item.quantity}
                            onChange={() => console.log(item.quantity)}
                            min="1"
                            max="10"
                            step="1"
                            data-decimals="0"
                            required
                          />
                        </div>
                      </td>
                      <td className="total-col">{item.display_amount}</td>
                      <td className="remove-col">
                        <button className="btn-remove">
                          <i className="icon-close"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>

            <div className="cart-bottom">
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

              <a
                href="#"
                className="btn btn-outline-dark-2"
                // onClick={obtenerItemsDelCarrito}
              >
                <span>UPDATE CART</span>
                <i className="icon-refresh"></i>
              </a>
            </div>
          </div>
          <aside className="col-lg-3">
            <div className="summary summary-cart">
              <h3 className="summary-title">Cart Total</h3>

              <table className="table table-summary">
                <tbody>
                  <tr className="summary-subtotal">
                    <td>Subtotal:</td>
                    <td>{productsCart && productsCart.display_item_total}</td>
                  </tr>
                  <tr className="summary-shipping">
                    <td>Shipping:</td>
                    <td>&nbsp;</td>
                  </tr>

                  <tr className="summary-shipping-row">
                    <td>
                      <div className="custom-control custom-radio">
                        <input
                          type="radio"
                          id="free-shipping"
                          name="shipping"
                          className="custom-control-input"
                        />
                        <label className="custom-control-label">
                          Free Shipping
                        </label>
                      </div>
                    </td>
                    <td>$0.00</td>
                  </tr>

                  <tr className="summary-shipping-row">
                    <td>
                      <div className="custom-control custom-radio">
                        <input
                          type="radio"
                          id="standart-shipping"
                          name="shipping"
                          className="custom-control-input"
                        />
                        <label className="custom-control-label">
                          Standart:
                        </label>
                      </div>
                    </td>
                    <td>$10.00</td>
                  </tr>

                  <tr className="summary-shipping-row">
                    <td>
                      <div className="custom-control custom-radio">
                        <input
                          type="radio"
                          id="express-shipping"
                          name="shipping"
                          className="custom-control-input"
                        />
                        <label className="custom-control-label">Express:</label>
                      </div>
                    </td>
                    <td>$20.00</td>
                  </tr>

                  <tr className="summary-shipping-estimate">
                    <td>
                      Estimate for Your Country <br />{' '}
                      <a href="dashboard.html">Change address</a>
                    </td>
                    <td>&nbsp;</td>
                  </tr>

                  <tr className="summary-total">
                    <td>Total:</td>
                    <td>{productsCart && productsCart.total}</td>
                  </tr>
                </tbody>
              </table>

              <a
                href="/checkout"
                className="btn btn-outline-primary-2 btn-order btn-block"
              >
                PROCEED TO CHECKOUT
              </a>
            </div>

            <a
              href="category.html"
              className="btn btn-outline-dark-2 btn-block mb-3"
            >
              <span>CONTINUE SHOPPING</span>
              <i className="icon-refresh"></i>
            </a>
          </aside>
        </div>
      </div>
    </div>
  );
}
