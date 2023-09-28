import { ShipAddress } from 'interfaces';
import styles from './checkout-summary.module.scss';
import { OrderItems } from '../order-items/order-items';

interface CheckoutSummaryProps {
  // address: ShipAddress;
}

export function CheckoutSummary(props: CheckoutSummaryProps) {
  // const { address } = props;
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
          description: '120x150 vidrio anti reflejo y marco de madera',
          display_amount: '$50.00',
        },
        gallery_image: {
          url: 'https://magicalnightsky.eu/wp-content/uploads/2021/10/Product-Poet-Cover-1-1080x1080-2.jpg',
        },
        variant: {
          options_text: '120x140',
        },
      },
      {
        id: 102,
        variant_id: 202,
        quantity: 3,
        product: {
          id: 302,
          name: 'Product B',
          description: '120x150 vidrio anti reflejo y marco de madera',
          display_amount: '$30.00',
        },
        gallery_image: {
          url: 'https://magicalnightsky.eu/wp-content/uploads/2021/10/Product-Poet-Cover-1-1080x1080-2.jpg',
        },
        variant: {
          options_text: '120x140',
        },
      },
    ],
  };
  return (
    <div className="summary">
      <section
        className={`${styles['checkout-summary']}`}
        id="checkout-summary"
      >
        <h2 className={`${styles['checkout-summary__title']}`}>
          Order Summary
        </h2>
        <OrderItems orderItems={shipmentItemsData} />
      </section>
    </div>
  );
}
