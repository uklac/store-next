import { Payment } from 'interfaces/order';
import styles from './payment-info.module.scss';

interface PaymentInfoProps {
  orderPayments: Payment[];
}

export function PaymentInfo(props: PaymentInfoProps) {
  const { orderPayments } = props;
  return (
    <div className={`${styles['payment-info']}`}>
      <h3 className={`${styles['payment-info__title']}`}>
        Payment Information
      </h3>
      {orderPayments.map((payment, index) => (
        <ul key={index} className={`${styles['payment-info__info']}`}>
          <li>{payment.payment_method.name}</li>
          <li>
            <strong>{payment.display_amount}</strong>(
            <span>{payment.state}</span>)
          </li>
        </ul>
      ))}
    </div>
  );
}
