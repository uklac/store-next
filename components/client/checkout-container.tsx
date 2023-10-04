'use client';

import { CheckoutSummary } from './checkout-summary/checkout-summary';

interface Props {}

export async function CheckoutContainer(props: Props) {

  return (
    <div className="checkout">
      <div className="container">
        <form action="#">
          <div className="row">
            {/* Aqui deseo renderizar las paginas de cada paso */}
            <aside className="col-lg-3">
              <CheckoutSummary />
            </aside>
          </div>
        </form>
      </div>
    </div>
  );
}
