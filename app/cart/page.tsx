import { CartLineItems, CartOrderSummary } from 'components';

export default async function Cart() {
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
                  <CartLineItems />
                </tbody>
              </table>
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
