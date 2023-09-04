import { ProductCard, ProductCardProps } from '../product-card/product-card';

interface ProductListProps {
  products: ProductCardProps[];
}

export async function ProductList(props: ProductListProps) {
  const { products } = props;
  return (
    <div className="products row">
      {products.map((product, index) => (
        <div
          className="product-item col-6 col-md-4 col-lg-3"
          key={index}
        >
          <ProductCard
            key={index}
            name={product.name}
            id={product.id}
            price={product.price}
            image={product.image}
          />
        </div>
      ))}
    </div>
  );
}
