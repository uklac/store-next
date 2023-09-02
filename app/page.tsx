import Product from './components/Product';

export default async function Index() {
  const myApiKey = process.env.API_TOKEN_AUTH;
  const url = 'http://localhost:3000/api/products';
  const options = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${myApiKey}`,
    },
  };

  const response = await fetch(url, options);
  const data = await response.json();
  const products = data.products;

  return (
    <div className="container">
      <div className="products row">
        {products.map((product: any, index: number) => (
          <div
            className="product-item furniture col-6 col-md-4 col-lg-3"
            key={index}
          >
            <Product
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
