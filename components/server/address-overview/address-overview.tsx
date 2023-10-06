import { Address } from 'interfaces';
import styles from './address-overview.module.scss';

interface AddressOverviewProps {
  address: Address;
}

export function AddressOverview(props: AddressOverviewProps) {
  const { address } = props;
  return (
    <div className={`${styles['address-overview']}`}>
      <h3 className={`${styles['address-overview__title']}`}>
        Shipping Address
      </h3>

      <ul className={`${styles['address-overview__info']}`}>
      {address.name && <li>{address.name}</li>}
        {address.company && <li>{address.company}</li>}
        {address.address1 && <li>{address.address1}</li>}
        {address.address2 && <li>{address.address2}</li>}
        <li>
          {address.city} {address.state_text} {address.zipcode}
        </li>
        {address.country && <li>{address.country.name}</li>}
        {address.phone && <li>Phone: {address.phone}</li>}
        {address.alternative_phone && (
          <li>Alternative Phone: {address.alternative_phone}</li>
        )}
      </ul>
    </div>
  );
}
