import { LineItem } from 'interfaces';
import styles from './shipment-items.module.scss';
import React from 'react';

interface ShipmentItemsProps {
  shipmentItems: LineItem[];
}

export function ShipmentItems(props: ShipmentItemsProps) {
  const { shipmentItems } = props;

  return (
    <ul className={`${styles['shipment-items']}`}>
      {shipmentItems.map((shipmentItem, index) => (
        <li key={index}>
          <div className={`${styles['shipment-items__image']}`}>
            <img
              src={shipmentItem.variant.images[0].product_url}
              alt="Product Image"
            />
          </div>
          <div className={`${styles['shipment-items__name']}`}>
            {shipmentItem.variant.name}
          </div>
          <div className={`${styles['shipment-items__quantity']}`}>
            {shipmentItem.quantity}
          </div>
          <div className={`${styles['shipment-items__price']}`}>
            {shipmentItem.display_amount}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ShipmentItems;
