import { getItemsCart } from 'apis/cart-api';
import { CheckoutSummary } from 'components';
import { AddressStep } from 'components/client/address-step';

export default async function Checkout() {
  const order = await getItemsCart();

  return (
    <div className="page-content">
      <div className="checkout">
        <div className="container">
          <form action="#">
            <div className="row">
              <AddressStep />
              <aside className="col-lg-3">
                <CheckoutSummary order={order} />
              </aside>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
