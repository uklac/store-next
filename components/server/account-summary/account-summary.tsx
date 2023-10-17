import { OrderData } from 'interfaces';
import styles from './account-summary.module.scss';

interface AccountSummaryProps {
  orders: OrderData[];
}

export function AccountSummary(props: AccountSummaryProps) {
  const { orders } = props;
  return (
    <div className={`${styles['account-summary__orders']}`}>
      <h3 className={`${styles['account-summary__profile']}`}>My orders</h3>
      {orders &&
        orders.map((order, index) => (
          <dl className={`${styles['account-order']}`} key={index}>
            <div className={`${styles['account-order__detail']}`}>
              <dt>Number</dt>
              <dd>
                <a href="">{order.number || "N/A"}</a>
              </dd>
            </div>
            <div className={`${styles['account-order__detail']}`}>
              <dt>Date</dt>
              <dd>{order.completed_at || "N/A"}</dd>
            </div>
            <div className={`${styles['account-order__detail']}`}>
              <dt>Status</dt>
              <dd>{order.state}</dd>
            </div>
            <div className={`${styles['account-order__detail']}`}>
              <dt>Payment State</dt>
              <dd>{order.payment_state || "N/A"}</dd>
            </div>
            <div className={`${styles['account-order__detail']}`}>
              <dt>Shipment State</dt>
              <dd>{order.shipment_state || "N/A"}</dd>
            </div>
            <div className={`${styles['account-order__detail']}`}>
              <dt>Total</dt>
              <dd>{order.display_total || "N/A"}</dd>
            </div>
          </dl>
        ))}
    </div>
  );
}
