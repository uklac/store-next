import Link from 'next/link';
import { CartCounter } from './cart-counter';
import { Suspense } from 'react';

export async function Cart() {
  return (
    <div className="dropdown cart-dropdown">
      <Link href="/cart" className="dropdown-toggle">
        <Suspense>
          <CartCounter />
        </Suspense>
        <p>Cart</p>
      </Link>
    </div>
  );
}
