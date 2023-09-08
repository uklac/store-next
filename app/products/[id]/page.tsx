import React from 'react';
import { getProduct } from 'apis/products-api';
import { PickImageProduct, ProductDetails, ProductInformation, VariantsList } from 'components';

export default async function ProductPage({ params }: { params: any }) {
  const product = await getProduct(params.id);

  return (
    <article className="product-page container mt-5">
      <div className="row">
        <div className="product-page-row col-md-6">
          {product.master.images.length > 0 && (
            <PickImageProduct productImages={product.master.images} />
          )}
        </div>
        <div className="product-page-row col-md-6">
          <ProductDetails
            name={product.name}
            price={product.display_price}
            description={product.description}
            classifications={product.classifications}
          />
          {product.has_variants && (
            <VariantsList
              optionTypes={product.option_types}
              variants={product.variants}
            />
          )}
          <div className="details-filter-row details-row-size">
            <label>Qty:</label>
            <div className="product-details-quantity">
              <input
                type="number"
                id="qty"
                className="form-control"
                min="1"
                max="10"
                step="1"
                data-decimals="0"
                required
                style={{ display: 'none' }}
              />
              <div className="input-group  input-spinner">
                <div className="input-group-prepend">
                  <button
                    style={{ minWidth: '26px' }}
                    className="btn btn-decrement btn-spinner"
                    type="button"
                  >
                    <i className="icon-minus"></i>
                  </button>
                </div>
                <input
                  type="text"
                  style={{ textAlign: 'center' }}
                  className="form-control "
                  required
                  placeholder=""
                />
                <div className="input-group-append">
                  <button
                    style={{ minWidth: '26px' }}
                    className="btn btn-increment btn-spinner"
                    type="button"
                  >
                    <i className="icon-plus"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="product-details-action">
            <a href="#" className="btn-product btn-cart">
              <span>add to cart</span>
            </a>
            <div className="details-action-wrapper">
              <a href="#" className="btn-product btn-wishlist" title="Wishlist">
                <span>Add to Wishlist</span>
              </a>
              <a href="#" className="btn-product btn-compare" title="Compare">
                <span>Add to Compare</span>
              </a>
            </div>
          </div>
        </div>
        <ProductInformation />
      </div>
    </article>
  );
}
