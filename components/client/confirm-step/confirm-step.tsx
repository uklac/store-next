import { OrderDetails } from 'components';
import styles from './confirm-step.module.scss';
import { OrderData } from 'interfaces';

interface ConfirmStepProps {
  order: OrderData;
}
export async function ConfirmStep(props: ConfirmStepProps) {
  const { order } = props;

  return (
    <div className={`${styles['confirm-step']}`}>
      <fieldset className={`${styles['confirm-step__info']}`}>
        <legend>Confirmar</legend>
        {order && <OrderDetails order={order} />}
      </fieldset>
      <button className="btn btn-primary btn-order" type="submit">
        Guardar y Continuar
      </button>
    </div>
  );
}
