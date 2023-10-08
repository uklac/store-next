"use client"
import { CartLineItems, CartOrderSummary } from 'components';
import { useCart } from 'store/hooks/cart-hook';

export default async function Cart() {
  const { orderCart } = useCart();
  return (
    <div className="page-content">
      <div className="cart">
        <div className="container mt-3">
          <div className="row">
            <div className="col-lg-9">
              <h4>Bag</h4>
              { orderCart ? 
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
                    <CartLineItems />
                  </tbody>
                </table>
                :
                <p> No hay productos en tu carrito</p>
              }
            </div>
            <div className="col-lg-3">
              <CartOrderSummary />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
