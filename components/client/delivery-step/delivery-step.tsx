'use client';

import { OrderData } from 'interfaces';
import styles from './delivery-step.module.scss';
import ShipmentItems from 'components/server/shipment-items/shipment-items';
import { useCart } from 'store/hooks/cart-hook';
import { useForm } from 'react-hook-form';

interface DeliveryStepProps {
  order: OrderData;
}

export async function DeliveryStep(props: DeliveryStepProps) {
  const { order } = props;
  const { _addDeliveryToOrder, orderCart } = useCart();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      selected_shipping_rate_id: '',
      special_instructions: orderCart?.special_instructions || '',
    },
  });
  return (
    <form
      className={`${styles['delivery-step']}`}
      onSubmit={handleSubmit(async (data) => {
        let selectedShippingRateId = parseInt(data.selected_shipping_rate_id);

        if (selectedShippingRateId) {
          const params = {
            id: order.shipments[0].id,
            selected_shipping_rate_id: selectedShippingRateId,
            // special_instructions: data.special_instructions
          };

          // const formattedParams = {
          //   shipments_attributes: [params],
          // };

          const resp = await _addDeliveryToOrder(params);
          console.log('resp: ', resp);
        }
      })}
    >
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
                <ul className={`${styles['shipping-methods']}`}>
                  {shipment.shipping_rates.map((rate, index) => (
                    <li key={index} className={`${styles['shipping-rate']}`}>
                      <label className={`${styles['spacing']}`}>
                        <input
                          {...register('selected_shipping_rate_id')}
                          type="radio"
                          value={rate.id}
                        />
                        {`${rate.name} ${rate.display_cost}`}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>

        <div className={`${styles['textarea-input']}`}>
          <label>Shipping Instructions:</label>
          <textarea
            {...register('special_instructions')}
            className="form-control"
          />
        </div>
      </fieldset>

      <button className="btn btn-primary btn-order" type="submit">
        Guardar y Continuar
      </button>
    </form>
  );
}
