import { OrderDetails } from 'components';
import styles from './page.module.scss';
import { getItemsCart } from 'apis/cart-api';

export default async function Confirm() {
  const order = await getItemsCart();

  return (
    <div className="container">
      <div className={`${styles['confirm-step']}`}>
        <fieldset className={`${styles['confirm-step__info']}`}>
          <legend>Confirmar</legend>
          <OrderDetails order={order}/>
        </fieldset>
      </div>
    </div>
  );
}
