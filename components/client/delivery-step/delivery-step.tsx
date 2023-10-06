import { OrderData } from 'interfaces';
import styles from './delivery-step.module.scss';
import ShipmentItems from 'components/server/shipment-items/shipment-items';
import { ShippingMethods } from 'components/server/shipping-methods/shipping-methods';

interface DeliveryStepProps {
  order: OrderData;
}

export async function DeliveryStep(props: DeliveryStepProps) {
  const { order } = props;

  return (
    <div className={`${styles['delivery-step']}`}>
      <fieldset className={`${styles['delivery-step__delivery']}`}>
        <legend>Delivery</legend>
        <div className={`${styles['proposed-shipment']}`}>
          <h2 className={`${styles['proposed-shipment__title']}`}>
            package from default
          </h2>
          {order && <ShipmentItems shipmentItems={order.line_items} />}
          {order &&
            order.shipments.map((shipment, index) => (
              <div key={index}>
                <h3
                  className={`${styles['proposed-shipment__secondary-title']}`}
                >
                  Shipping Method:
                </h3>
                <ShippingMethods shippingRates={shipment.shipping_rates} />
              </div>
            ))}
        </div>

        {/* <div className={`${styles['textarea-input']}`}>
            <label>Shipping Instructions:</label>
            <textarea
              className="form-control"
              // onChange={() => console.log('s')}
            />
          </div> */}
      </fieldset>

      <button className="btn btn-primary btn-order" type="submit">
        Guardar y Continuar
      </button>
    </div>
  );
}
