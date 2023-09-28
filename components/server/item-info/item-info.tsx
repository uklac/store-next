import { ItemsCart } from 'interfaces/cart';
import styles from './item-info.module.scss';

interface ItemInfoProps {
  name: string;
  options_text: string;
  description: string;
}

export function ItemInfo(props: ItemInfoProps) {
  const { name, options_text, description } = props;
  return (
    <div className={`${styles['item-info']}`}>
      <h2 className={`${styles['item-info__name']}`}>
        <a href="">{name}</a>
      </h2>
      <p className={`${styles['item-info__options']}`}>{options_text}</p>

      {description ? (
        <p className={`${styles['item-info__description']}`}>{description}</p>
      ) : (
        <p className={`${styles['item-info__description']}`}>
          Este producto no tiene descripción
        </p>
      )}
    </div>
  );
}
