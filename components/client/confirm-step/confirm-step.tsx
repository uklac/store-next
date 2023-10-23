'use client';

import { OrderDetails } from 'components';
import styles from './confirm-step.module.scss';
import { OrderData } from 'interfaces';
import { useCart } from 'store/hooks/cart-hook';
import { useForm } from 'react-hook-form';

interface ConfirmStepProps {
  order: OrderData;
}
export async function ConfirmStep(props: ConfirmStepProps) {
  const { order } = props;
  const { _completeOrder, orderCart } = useCart();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      expected_total: '',
    },
  });

  return (
    <form
      className={`${styles['confirm-step']}`}
      onSubmit={handleSubmit(async () => {
        const expected_total = '';
        const resp = await _completeOrder(expected_total);
        console.log('resp: ', resp);
      })}
    >
      <fieldset className={`${styles['confirm-step__info']}`}>
        <legend>Confirmar</legend>
        {order && <OrderDetails order={order} />}
      </fieldset>
      <button className="btn btn-primary btn-order" type="submit">
        Guardar y Continuar
      </button>
    </form>
  );
}
