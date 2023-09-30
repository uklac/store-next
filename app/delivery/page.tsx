import { ShipmentItems, ShippingMethods } from 'components';
import styles from './page.module.scss';
import { getItemsCart } from 'apis/cart-api';
import { OrderData } from 'interfaces';

interface Delivery {
  order: OrderData;
}

export default async function Delivery(props: Delivery) {
  const { order } = props;

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

          <div className={`${styles['proposed-shipment']}`}>
            <h2 className={`${styles['proposed-shipment__title']}`}>
              package from default
            </h2>
            <ShipmentItems shipmentItems={order.line_items} />
            <h3 className={`${styles['proposed-shipment__secondary-title']}`}>
              Shipping Method:
            </h3>
            {order.shipments.map((shipment, index) => (
              <div key={index}>
                <ShippingMethods shippingRates={shipment.shipping_rates} />
              </div>
            ))}
          </div>

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
