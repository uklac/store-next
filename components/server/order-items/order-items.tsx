import styles from './order-items.module.scss';
import { ItemInfo } from '../item-info/item-info';
import { OrderData } from 'interfaces';

interface OrderItemsProps {
  orderItems: OrderData;
}

export function OrderItems(props: OrderItemsProps) {
  const { orderItems } = props;
  return (
    <section className={`${styles['order-items--summary']}`}>
      {orderItems &&
        orderItems.line_items.map((item, index) => (
          <article className={`${styles['order-item']}`} key={index}>
            <div className={`${styles['order-item__image']}`}>
              <img
                src={item.variant.images[0].product_url}
                alt={item.variant.images[0].alt}
              />
            </div>
            <ItemInfo
              name={item.variant.name}
              options_text={item.variant.options_text}
              // description={item.variant.description}
            />
            <div className={`${styles['order-item__price-single']}`}>
              {item.price}
            </div>
            <div className={`${styles['order-item__quantity']}`}>
              X {item.quantity}
            </div>
            <div className={`${styles['order-item__price']}`}>
              <strong>{item.display_amount}</strong>
            </div>
          </article>
        ))}
      <dl>
        <div className={`${styles['item-entry']}`} id="item-total">
          <dt>Item Total</dt>
          <dd>{orderItems.display_item_total}</dd>
        </div>
        <div className={`${styles['item-total']}`} id="item-total">
          <dt>Order Total</dt>
          <dd>{orderItems.display_order_total_after_store_credit}</dd>
        </div>
      </dl>
    </section>
  );
}
