import { ShipmentItems, ShippingMethods } from 'components';
import styles from './page.module.scss';

export default async function Delivery() {
  const shippingRates = [
    { id: 1, name: 'Envío Estándar', display_cost: '$10.00' },
    { id: 2, name: 'Envío Rápido', display_cost: '$20.00' },
    { id: 3, name: 'Envío Express', display_cost: '$30.00' },
  ];
  const shipmentItemsData = {
    order: {
      id: 1,
      total: '100.00',
    },
    items: [
      {
        id: 101,
        variant_id: 201,
        quantity: 2,
        product: {
          id: 301,
          name: 'Product A',
          display_amount: '$50.00',
        },
        gallery_image: {
          url: 'https://magicalnightsky.eu/wp-content/uploads/2021/10/Product-Poet-Cover-1-1080x1080-2.jpg',
        },
      },
      {
        id: 102,
        variant_id: 202,
        quantity: 3,
        product: {
          id: 302,
          name: 'Product B',
          display_amount: '$30.00',
        },
        gallery_image: {
          url: 'https://magicalnightsky.eu/wp-content/uploads/2021/10/Product-Poet-Cover-1-1080x1080-2.jpg',
        },
      },
    ],
  };

  return (
    <div className="container">
      <div className={`${styles['delivery-step']}`}>
        <fieldset className={`${styles['delivery-step__delivery']}`}>
          <legend>Delivery</legend>

          <div className={`${styles['proposed-shipment']}`}>
            <h2 className={`${styles['proposed-shipment__title']}`}>
              package from default
            </h2>
            <ShipmentItems shipmentItems={shipmentItemsData} />
            <h3 className={`${styles['proposed-shipment__secondary-title']}`}>
              Shipping Method:
            </h3>
            <ShippingMethods shippingRates={shippingRates} />
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
