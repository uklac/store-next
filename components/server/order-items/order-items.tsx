import { ItemsCart } from 'interfaces/cart';
import styles from './order-items.module.scss';
import { ItemInfo } from '../item-info/item-info';

interface OrderItemsProps {
  orderItems: ItemsCart;
}

export function OrderItems(props: OrderItemsProps) {
  const { orderItems } = props;
  return (
    <section className={`${styles['order-items--summary']}`} >
      {orderItems?.line_items?.map((item, index) => (
        <article className={`${styles['order-item']}`} key={index}>
          <div className={`${styles['order-item__image']}`}>
            <img src={item.gallery_image.url} alt="Product Image" />
          </div>
          <ItemInfo
            name={item.product.name}
            options_text={item.variant.options_text}
            description={item.product.description}
          />
          <div className={`${styles['order-item__price-single']}`}>
            {item.product.display_amount}
          </div>
          <div className={`${styles['order-item__quantity']}`}>
            X {item.quantity}
          </div>
          <div className={`${styles['order-item__price']}`}>
            <strong>{orderItems.order.total}</strong>
          </div>
        </article>
      ))}
    </section>
  );
}
