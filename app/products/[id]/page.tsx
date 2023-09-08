import React from 'react';
import { getProduct } from 'app/apis/products-api';
import PickImageProduct from 'components/src/lib/client/pick-image-product/pick-image-product';
import { ProductInformation } from 'components';
import { getOptionTypes } from 'app/apis/option-types';

export default async function ProductPage({ params }: { params: any }) {
  const product = await getProduct(params.id);
  const optionTypes = await getOptionTypes();

  return (
    <article className="product-page container mt-5">
      <div className="row">
        <PickImageProduct productImages={product.master.images} />
        <div className="product-page-row col-md-6">
          <div className="product-page__info product-details">
            <header className="product-header">
              <h1 className="product-title">{product.name}</h1>
              <h2 className="product-price" id="product-price">
                {product.display_price}
              </h2>
            </header>
            <div className="product-content">
              <div className="product-page__description">
                <p className="product-content">{product.description}</p>
              </div>
            </div>
          </div>
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
