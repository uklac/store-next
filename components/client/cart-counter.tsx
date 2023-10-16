'use client';

import React, { useCallback, useEffect } from 'react';
import { useCart } from 'store/hooks/cart-hook';

export function CartCounter() {
  const { totalProductsInCart, _getCart } = useCart();

  const fetchOrder = useCallback(async () => {
    const { error } = await _getCart();
    if (error) {
      console.error('Error fetching cart:', error);
    }
  }, []);

  useEffect(() => {
    // fetchOrder();
  }, []);

  return (
    <div className="icon">
      <i className="icon-shopping-cart"></i>
      {totalProductsInCart > 0 && (
        <span className="cart-count">{totalProductsInCart}</span>
      )}
    </div>
  );
}
