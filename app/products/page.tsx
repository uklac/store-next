import { getProducts } from 'apis/products-api';
import { Filters, Pagination, ProductList } from 'components';
import React from 'react';

const PRODUCTS_PER_PAGE = 12;

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: any;
}) {
  const { page } = searchParams;
  const { products, current_page, total_count, pages } = await getProducts(
    page,
    PRODUCTS_PER_PAGE
  );
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
            {productsList.length ? (
              <>
                <ProductList products={productsList} columns={3}/>
                {total_count > PRODUCTS_PER_PAGE && (
                  <Pagination currentPage={current_page} totalPages={pages} />
                )}
              </>
            ) : <div className='text-center'> No se encontraron resultados</div>}
          </div>
        </div>
      </div>
    </div>
  );
}
