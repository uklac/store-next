import { OrderData } from 'interfaces';
import { AddressOverview } from '../address-overview/address-overview';
import { OrderItems } from '../order-items/order-items';
import { OrderShipments } from '../order-shipments/order-shipments';
import { PaymentInfo } from '../payment-info/payment-info';
import styles from './order-details.module.scss';

interface OrderDetailsProps {
  order: OrderData;
}

export function OrderDetails(props: OrderDetailsProps) {
  const {order} = props;;

  return (
    <div className={`${styles['order-details']}`}>
      <div className={`${styles['order-details__info']}`}>
        <AddressOverview address={order.ship_address}/> 
        <OrderShipments shipments={order.shipments}/>
        <AddressOverview address={order.ship_address}/>
        <PaymentInfo orderPayments={order.payments}/> 
      </div>
      <div className={`${styles['order-items']}`}>
        <OrderItems orderItems={order}/>
      </div>
    </div>
  );
}
