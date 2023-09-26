import { Shipment } from 'interfaces';
import styles from './order-shipments.module.scss';

interface OrderShipmentsProps {
  shipment: Shipment;
}

export function OrderShipments(props: OrderShipmentsProps) {
  const { shipment } = props;
  return (
    <div className={`${styles['order-shipments']}`}>
      <h3 className="order-shipments__title">Shipments</h3>

      <ul className="order-shipments__info">
        <li>
          Shipment Details: {shipment.stock_location_name},{' '}
          {shipment.selected_shipping_rate.name}
          <div className="order-shipments__info__tracking">
            <h4>Tracking</h4>
            <p>{shipment.tracking}</p>
          </div>
        </li>
      </ul>
    </div>
  );
}
