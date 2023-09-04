import { ProductCard } from 'components/server';
import { getProducts } from './apis/products-api';

export default async function Index() {
  const { products } = await getProducts();

  return (
    <div className="container">
      <div className="products row">
        {products.map((product: any, index: number) => (
          <div
            className="product-item furniture col-6 col-md-4 col-lg-3"
            key={index}
          >
            <ProductCard
              name={product.name}
              displayPrice={product.display_price}
              image={product.master.images[0]}
              id={product.id}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
