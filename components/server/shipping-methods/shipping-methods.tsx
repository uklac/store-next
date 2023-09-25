import styles from './shipping-methods.module.scss';

interface ShippingRate {
  id: number;
  name: string;
  display_cost: string;
}

interface ShippingMethodsProps {
  shippingRates: ShippingRate[];
}

export function ShippingMethods(props: ShippingMethodsProps) {
  const { shippingRates } = props;

  return (
    <ul className={`${styles['shipping-methods']}`}>
      {shippingRates.map((rate) => (
        <li key={rate.id} className={`${styles['shipping-rate']}`}>
          <label className={`${styles['radio-input']}`}>
            <input
              type="radio"
              name="selected_shipping_rate_id"
              value={rate.id}
            />
            {`${rate.name} ${rate.display_cost}`}
          </label>
        </li>
      ))}
    </ul>
  );
}
