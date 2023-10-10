import { Shipment } from 'interfaces';
import styles from './order-shipments.module.scss';

interface OrderShipmentsProps {
  shipments: Shipment[];
}

export function OrderShipments(props: OrderShipmentsProps) {
  const { shipments } = props;
  return (
    <div className={`${styles['order-shipments']}`}>
      <h3 className={`${styles['order-shipments__title']}`}>Shipments</h3>

      <ul className="order-shipments__info">
        {shipments.map((shipment, index) => (
          <li key={index}>
            Shipment Details: {shipment.stock_location_name},{' '}
            {shipment.selected_shipping_rate.name}
            {shipment.tracking && (
              <div className="order-shipments__info__tracking">
                <h4 className={`${styles['order-shipments__title']}`}>
                  Tracking
                </h4>
                <p>{shipment.tracking}</p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
