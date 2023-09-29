import { ItemsCart } from 'interfaces';
import { AddressOverview } from '../address-overview/address-overview';
import { OrderItems } from '../order-items/order-items';
import { OrderShipments } from '../order-shipments/order-shipments';
import { PaymentInfo } from '../payment-info/payment-info';
import styles from './order-details.module.scss';

interface OrderDetailsProps {
  order: ItemsCart;
}

export function OrderDetails(props: OrderDetailsProps) {
  const {order} = props;;

  return (
    <div className={`${styles['order-details']}`}>
      <div className={`${styles['order-details__info']}`}>
        {/* <AddressOverview address={undefined}/>
        <OrderShipments shipment={undefined}/>
        <AddressOverview address={undefined}/>
        <PaymentInfo orderPayments={undefined}/> */}
      </div>
      <div className={`${styles['order-items']}`}>
        <OrderItems orderItems={order}/>
      </div>

    </div>
  );
}
