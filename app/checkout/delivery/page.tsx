import { ShipmentItems, ShippingMethods } from 'components';
import styles from './page.module.scss';
import { OrderData } from 'interfaces';

interface Delivery {
  order: OrderData;
}

export default async function Delivery(props: Delivery) {
  const { order } = props;

  return (
    <div className="container">
      <div className={`${styles['delivery-step']}`}>
        <fieldset className={`${styles['delivery-step__delivery']}`}>
          <legend>Delivery</legend>
          <div className={`${styles['proposed-shipment']}`}>
            <h2 className={`${styles['proposed-shipment__title']}`}>
              package from default
            </h2>
            {order && <ShipmentItems shipmentItems={order.line_items} />}
            <h3 className={`${styles['proposed-shipment__secondary-title']}`}>
              Shipping Method:
            </h3>
            {order &&
              order.shipments.map((shipment, index) => (
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
