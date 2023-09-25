import { ShippingMethods } from 'components';
import styles from './page.module.scss';

export default async function Delivery() {
  const shippingRates = [
    { id: 1, name: 'Envío Estándar', display_cost: '$10.00' },
    { id: 2, name: 'Envío Rápido', display_cost: '$20.00' },
    { id: 3, name: 'Envío Express', display_cost: '$30.00' },
  ];
  return (
    <div className="container">
      <div className={`${styles['delivery-step']}`}>
        <fieldset className={`${styles['delivery-step__delivery']}`}>
          <legend>Delivery</legend>

          <ShippingMethods shippingRates={shippingRates}/>
          
          <div className={`${styles['textarea-input']}`}>
            <label>Shipping Instructions:</label>
            <textarea
              className="form-control"
              // onChange={() => console.log('s')}
            />
          </div>
        </fieldset>

        <button className="btn btn-outline-primary-2 btn-order" type="submit">
          Save and Continue
        </button>
      </div>
    </div>
  );
}
