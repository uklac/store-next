'use client';
import { getItemsCart } from 'apis/cart-api';

export default async function Account() {
  const productsCart = await getItemsCart();
  console.log('Productos',productsCart);

  // const obtenerItemsDelCarrito = async () => {
  //   try {
  //     const items = await getItemsCart();
  //     console.log('Items del carrito:', items);
  //   } catch (error) {
  //     console.error('Error al obtener los items del carrito:', error);
  //   }
  // }

  return (
    <div className="page-content">
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
                  {productsCart.line_items.map((item, index) => (
                    <tr key={index}>
                      <td className="product-col">
                        <div className="product">
                          <figure className="product-media">
                            <a href="#">
                              <img
                                src={item.gallery_image.url}
                                alt="Product image"
                              />
                            </a>
                          </figure>

                          <h3 className="product-title">
                            <a href="#">{item.product.name}</a>
                          </h3>
                        </div>
                      </td>
                      <td className="price-col">
                        {item.product.display_amount}
                      </td>
                      <td className="quantity-col">
                        <div className="cart-product-quantity">
                          <input
                            type="number"
                            className="form-control"
                            value="1"
                            min="1"
                            max="10"
                            step="1"
                            data-decimals="0"
                            required
                          />
                        </div>
                      </td>
                      <td className="total-col">$84.00</td>
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
                      <td>$160.00</td>
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
                          <label className="custom-control-label">
                            Express:
                          </label>
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
                      <td>{productsCart.order.total}</td>
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
    </div>
  );
}
