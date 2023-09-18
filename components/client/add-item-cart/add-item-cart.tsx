'use client';
import { addItemCart } from 'apis/cart-api';
import { Variant } from 'interfaces';
import React, { ReactElement, useRef, useState } from 'react';

interface AddItemCartProps {
  variants: Variant[];
}

export function AddItemCart(props: AddItemCartProps) {
  const { variants } = props;
  const quantityRef = useRef<HTMLInputElement>(null);

  const [selectedVariant, setSelectedVariant] = useState<number>(0);

  const handleAddToCart = async () => {
    const quantity = quantityRef.current?.valueAsNumber || 0;
    try {
      const result = await addItemCart({
        variant_id: selectedVariant,
        quantity: quantity,
      });
      console.log('Agregado al carrito:', result);
    } catch (error) {
      console.error('Error al agregar el ítem al carrito:', error);
    }
  };

  const handleVariantChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = parseInt(event.target.value, 10);
    setSelectedVariant(value);
  };

  return (
    <div>
      <select onChange={handleVariantChange} value={selectedVariant}>
        <option value="">Seleccione una variante</option>
        {variants.map((variant, index) => (
          <option value={variant.id} key={index}>
            {variant.options_text}
          </option>
        ))}
      </select>
      <div className="details-filter-row details-row-size">
        <label>Qty:</label>
        <div className="product-details-quantity">
          <input
            type="number"
            // id="quantity"
            // ref={quantityRef}
            className="form-control"
            min="1"
            max="10"
            step="1"
            style={{ display: 'none' }}
            required
          />
          <div className="input-group  input-spinner">
            <div className="input-group-prepend">
              <button
                style={{ minWidth: '26px' }}
                className="btn btn-decrement btn-spinner"
                type="button"
              >
                <i className="icon-minus"></i>
              </button>
            </div>
            <input
              type="number"
              id="quantity"
              ref={quantityRef}
              defaultValue="1"
              style={{ textAlign: 'center' }}
              className="form-control "
              required
              placeholder=""
            />
            <div className="input-group-append">
              <button
                style={{ minWidth: '26px' }}
                className="btn btn-increment btn-spinner"
                type="button"
              >
                <i className="icon-plus"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="product-details-action">
        <a href="#" className="btn-product btn-cart" onClick={handleAddToCart}>
          <span>add to cart</span>
        </a>
        <div className="details-action-wrapper">
          <a href="#" className="btn-product btn-wishlist" title="Wishlist">
            <span>Add to Wishlist</span>
          </a>
          <a href="#" className="btn-product btn-compare" title="Compare">
            <span>Add to Compare</span>
          </a>
        </div>
      </div>
    </div>
  );
}
