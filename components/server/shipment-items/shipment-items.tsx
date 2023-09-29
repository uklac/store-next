import styles from './shipment-items.module.scss';

import { ItemsCart } from 'interfaces/cart';
import React from 'react';

interface ShipmentItemsProps {
  shipmentItems: ItemsCart;
}

export function ShipmentItems(props: ShipmentItemsProps) {
  const { shipmentItems } = props;

  return (
    <ul className={`${styles['shipment-items']}`}>
      {shipmentItems?.line_items?.map((shipmentItem, index) => (
        <li key={index}>
          <div className={`${styles['shipment-items__image']}`}>
            <img src={shipmentItem.gallery_image.url} alt="Product Image" />
          </div>
          <div className={`${styles['shipment-items__name']}`}>
            {shipmentItem.product.name}
          </div>
          <div className={`${styles['shipment-items__quantity']}`}>
            {shipmentItem.quantity}
          </div>
          <div className={`${styles['shipment-items__price']}`}>
            {shipmentItem.product.display_amount}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ShipmentItems;
