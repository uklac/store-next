import { getTaxons, getTaxonsProducts } from "apis/taxons-api";
import { ProductList, Filters } from "components";

export default async function ProductsCategoryPage({ params }: { params: any }) {
  const { taxons } = await getTaxons();
  const taxon = taxons.find((taxon) => {
    const slugRoute = taxon.permalink.split('/').pop();
    return slugRoute == params.slug;
  });
  const taxonId = taxon ? taxon.id : 0
  const { products } = await getTaxonsProducts(taxonId);
  const productsList = products.map((product) => {
    return {
      name: product.name,
      id: product.id,
      price: product.display_price,
      image: product.master.images[0],
    };
  });
  
  return (
    <div className="container">
      <nav>Breadcrumbs here</nav>
      <div className="page-content">
        <div className="row">
          <aside className="col-lg-3">
            <Filters />
          </aside>
          <div className="col-lg-9">
            <ProductList products={productsList} columns={3}/>
          </div>
        </div>
      </div>
    </div>
  )
}

