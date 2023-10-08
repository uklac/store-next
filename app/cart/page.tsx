import { CartLineItems, CartOrderSummary } from 'components';

export default async function Cart() {
  return (
    <div className="page-content">
      <div className="cart">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <h4>Bag</h4>
              <CartLineItems />
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
