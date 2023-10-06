'use client';

import { useCallback, useEffect } from 'react';
import Link from 'next/link';
import { useCart } from 'store/hooks/cart-hook';

interface Props {}

export async function Cart(props: Props) {
  const { totalProductsInCart, _getCart } = useCart();

  const fetchOrder = useCallback(async () => {
    const { error } = await _getCart();
    if (error) {
      console.error('Error fetching cart:', error);
    }
  }, []);

  useEffect(() => {
    fetchOrder();
  }, []);

  return (
    <div className="dropdown cart-dropdown">
      <Link href="/cart" className="dropdown-toggle">
        <div className="icon">
          <i className="icon-shopping-cart"></i>
          {totalProductsInCart > 0 && (
            <span className="cart-count">{totalProductsInCart}</span>
          )}
        </div>
        <p>Cart</p>
      </Link>
    </div>
  );
}
