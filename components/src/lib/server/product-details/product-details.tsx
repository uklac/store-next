interface ProductDetailsProps {
  name: string;
  price: string;
  description: string;
}

export function ProductDetails(props: ProductDetailsProps) {
  const { name, price, description } = props;

  return (
    <div className="product-page__info product-details">
      <header className="product-header">
        <h1 className="product-title">{name}</h1>
        <h2 className="product-price" id="product-price">
          {price}
        </h2>
      </header>
      <div className="product-content">
        <div className="product-page__description">
          <p className="product-content">{description}</p>
        </div>
      </div>
    </div>
  );
}
