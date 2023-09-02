import React from 'react';

interface Product {
  name: string;
  displayPrice: string;
  image: {
    position: number;
    mini_url: string;
    small_url: string;
    product_url: string;
    large_url: string;
    alt: string;
  }
}

export default function Product(props: Product) {
  const { name, displayPrice, image } = props;
  
  return (
    <article className="product product-2">
      <figure className="product-media">
        <a href="/products/new-york-map">
          <img
            alt={image.alt}
            className="product-image"
            src={image.product_url}
          />
        </a>
        <div className="product-action-vertical">
          <a
            href="#"
            className="btn-product-icon btn-wishlist"
            title="Add to wishlist"
          >
            <span>add to wishlist</span>
          </a>
        </div>
        <div className="product-action product-action-transparent">
          <a href="#" className="btn-product btn-cart">
            <span>add to cart</span>
          </a>
        </div>
      </figure>
      <div className="product-body">
        <h3 className="product-title">
          <a className="info" title="Caos Art" href="/products/new-york-map">
            {name}
          </a>
        </h3>
        <div className="product-price">
          <section className="product-card_price">
            {displayPrice}
          </section>
        </div>
      </div>
    </article>
  );
}
