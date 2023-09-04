import { ProductList } from 'components/server';
import { getProducts } from './apis/products-api';

export default async function Index() {
  const { products } = await getProducts();
  const productsList = products.map((product)=>{
    return {
      name: product.name,
      id: product.id,
      price: product.display_price,
      image: product.master.images[0]
    }
  })

  return (
    <div className="container">
      <ProductList products={productsList} />
    </div>
  );
}
