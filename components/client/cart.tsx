import Link from 'next/link';
import { CartCounter } from './cart-counter';

export async function Cart() {
  return (
    <div className="dropdown cart-dropdown">
      <Link href="/cart" className="dropdown-toggle">
        <CartCounter />
        <p>Cart</p>
      </Link>
    </div>
  );
}
