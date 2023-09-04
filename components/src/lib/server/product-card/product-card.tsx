import Link from 'next/link';

interface ProductCardProps {
  name: string;
  id: number;
  displayPrice: string;
  image: {
    position: number;
    mini_url: string;
    small_url: string;
    product_url: string;
    large_url: string;
    alt: string;
  };
}

export async function ProductCard(props: ProductCardProps) {
  const { name, displayPrice, image, id } = props;

  return (
    <article className="product product-2">
      <figure className="product-media">
        <Link href={`products/${id}`}>
          <img
            alt={image.alt}
            className="product-image"
            src={image.product_url}
          />
        </Link>
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
          <Link href={`products/${id}`}>{name}</Link>
        </h3>
        <div className="product-price">
          <section className="product-card_price">{displayPrice}</section>
        </div>
      </div>
    </article>
  );
}
