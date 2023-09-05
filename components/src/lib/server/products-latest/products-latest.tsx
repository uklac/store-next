import { getProducts } from '../../../../../app/apis/products-api';
import { ProductCard } from '../product-card/product-card';

export default async function ProductsLatest() {
  const { products } = await getProducts();
  const productsList = products.map((product) => {
    return {
      name: product.name,
      id: product.id,
      price: product.display_price,
      image: product.master.images[0],
    };
  });
  return (
    <>
      <h3 className="text-center mb-3 mt-3">Últimos Productos</h3>
      <div className="products row">
        {productsList.map((product, index) => (
          <div className={`product-item col-6 col-md-4 col-lg-3`} key={index}>
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
    </>
  );
}
