import { CheckoutSummary } from 'components';
import { AddressStep } from 'components/client/address-step';

export default async function Checkout() {
  return (
    <div className="page-content">
      <div className="checkout">
        <div className="container">
          <form action="#">
            <div className="row">
              <AddressStep />
              <aside className="col-lg-3">
                <CheckoutSummary />
              </aside>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
