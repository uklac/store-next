import { OrderDetails } from 'components';
import styles from './page.module.scss';
import { OrderData } from 'interfaces';

interface ConfirmProps {
  order: OrderData;
}
export default async function Confirm(props: ConfirmProps) {
  const { order } = props;

  return (
    <div className="container">
      <div className={`${styles['confirm-step']}`}>
        <fieldset className={`${styles['confirm-step__info']}`}>
          <legend>Confirmar</legend>
          {order && <OrderDetails order={order} />}
        </fieldset>
      </div>
    </div>
  );
}
