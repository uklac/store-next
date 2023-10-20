'use client';

import { PaymentMethod } from 'interfaces';
import styles from './payment-step.module.scss';
import { useCart } from 'store/hooks/cart-hook';
import { useForm } from 'react-hook-form';
interface PaymentStepProps {
  payments: PaymentMethod[];
}

export async function PaymentStep(props: PaymentStepProps) {
  const { payments } = props;
  console.log('payments: ', payments);
  const { _addPaymentToOrder, orderCart } = useCart();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      id: '',
    },
  });
  return (
    <form
      className={`${styles['payment-step']}`}
      onSubmit={handleSubmit(async (data) => {
        let selectedPaymentId = parseInt(data.id);

        if (selectedPaymentId) {
          const params = {
            payment_method_id: selectedPaymentId,
          };
          const resp = await _addPaymentToOrder(params);
          console.log('resp: ', resp);
        }
      })}
    >
      <fieldset className={`${styles['payment-step__payment']}`}>
        <legend>PAYMENT INFORMATION</legend>
        <ul className={`${styles['payment-step__selector']}`}>
          {payments &&
            payments.map((payment, index) => (
              <li key={index}>
                <label className={`${styles['spacing']}`}>
                  <input {...register('id')} type="radio" value={payment.id} />
                  {payment.name}
                </label>
              </li>
            ))}
        </ul>
      </fieldset>
      <button className="btn btn-primary btn-order" type="submit">
        Guardar y Continuar
      </button>
    </form>
  );
}
