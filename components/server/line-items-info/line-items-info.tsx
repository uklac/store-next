import React from 'react';
import styles from './line-items-info.module.scss';
import { OrderData } from 'interfaces';

interface LineItemsInfoProps {
  order: OrderData;
}

export function LineItemsInfo(props: LineItemsInfoProps) {
  const { order } = props;
  return (
    <dl className={`${styles['line-items']}`} id="line-items">
      <div>
        <dt>Subtotal:</dt>
        <dd>{order.display_item_total}</dd>
      </div>
      {order.shipments &&
        order.shipments.map((shipment, index) => (
          <div key={index}>
            <dt>{shipment.selected_shipping_rate.name}:</dt>
            <dd>{shipment.cost}</dd>
          </div>
        ))}
      <div>
        <dt>Order Total:</dt>
        <dd>
          <strong>{order.display_order_total_after_store_credit}</strong>
        </dd>
      </div>
    </dl>
  );
}

export default LineItemsInfo;
