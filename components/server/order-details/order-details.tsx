import { OrderInfo } from '../order-info/order-info';
import { OrderItems } from '../order-items/order-items';
import styles from './order-details.module.scss';

interface OrderDetailsProps {}

export function OrderDetails(props: OrderDetailsProps) {
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
    <div className={`${styles['order-details']}`}>
      <div className={`${styles['order-details__info']}`}>
        <OrderInfo title={'Pago'} name={'direccion'}/>
      </div>
      <div className={`${styles['order-items']}`}>
        <OrderItems orderItems={shipmentItemsData}/>
      </div>

    </div>
  );
}
