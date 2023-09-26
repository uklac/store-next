import styles from './order-info.module.scss';

interface OrderInfoProps {
  title: string;
  name: string;
}

export function OrderInfo(props: OrderInfoProps) {
  const { title, name } = props;
  return (
    <div className={`${styles['order-info']}`}>
      <h3 className={`${styles['order-info__title']}`}>{title}</h3>
      <ul className={`${styles['order-info__info']}`}>
        <li>{name}</li>
      </ul>
    </div>
  );
}
