import { PaymentMethod } from 'interfaces';
import styles from './payment-step.module.scss';
interface PaymentStepProps {
  payments: PaymentMethod[];
}

export async function PaymentStep(props: PaymentStepProps) {
  const { payments } = props;
  return (
    <div className={`${styles['payment-step']}`}>
      <fieldset className={`${styles['payment-step__payment']}`}>
        <legend>PAYMENT INFORMATION</legend>
        <ul className={`${styles['payment-step__selector']}`}>
          {payments &&
            payments.map((payment, index) => (
              <li key={index}>
                <label className={`${styles['spacing']}`}>
                  <input
                    type="radio"
                    name="order[wallet_payment_source_id]"
                    value={1}
                    // defaultChecked={defaultPayment}
                    data-action="checkout-payment#paymentSelected"
                    data-checkout-payment-target="paymentRadio"
                    // data-fieldset-name={fieldsetName}
                  />
                  {payment.name}
                </label>
              </li>
            ))}
        </ul>
      </fieldset>
      <button className="btn btn-primary btn-order" type="submit">
        Guardar y Continuar
      </button>
    </div>
  );
}