import { AddressStep } from 'components';

interface AddressProps {}

export default async function Address(props: AddressProps) {
  return (
    <div className="container">
      <AddressStep />;
    </div>
  );
}
