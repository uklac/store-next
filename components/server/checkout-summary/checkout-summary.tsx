import { ItemsCart, ShipAddress } from 'interfaces';
import styles from './checkout-summary.module.scss';
import { OrderItems } from '../order-items/order-items';

interface CheckoutSummaryProps {
  order: ItemsCart;
}

export function CheckoutSummary(props: CheckoutSummaryProps) {
  const { order } = props;
  
  return (
    <div className="summary">
      <section
        className={`${styles['checkout-summary']}`}
        id="checkout-summary"
      >
        <h2 className={`${styles['checkout-summary__title']}`}>
          Order Summary
        </h2>
        <OrderItems orderItems={order} />
      </section>
    </div>
  );
}
