import { ProductCard, ProductCardProps } from '../product-card/product-card';

interface ProductListProps {
  products: ProductCardProps[];
  columns?: 2 | 3 | 4;
}

export async function ProductList(props: ProductListProps) {
  const { products, columns } = props;
  const grid = {
    2: 'col-6 col-md-4 col-lg-6',
    3: 'col-6 col-md-4 col-lg-4',
    4: 'col-6 col-md-4 col-lg-3',
  };
  const gridClass = columns ? grid[columns] : grid[4];
  return (
    <div className="products row">
      {products.map((product, index) => (
        <div className={`product-item ${gridClass}`} key={index}>
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
