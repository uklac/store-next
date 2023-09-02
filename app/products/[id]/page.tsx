import React from 'react';

export default async function ProductPage({ params }: { params: any }) {
  const myApiKey = process.env.API_TOKEN_AUTH;
  const url = `http://localhost:3000/api/products/${params.id}`;
  const options = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${myApiKey}`,
    },
  };

  const response = await fetch(url, options);
  const product = await response.json();

  return (
    <article className="product-page container mt-5">
      <div className="row">
        <div className="product-page-row col-md-6">
          <div className="product-page__images product-gallery product-gallery-vertical">
            <div className="row">
              <div className="product-main-image ml-5">
                <picture className="product-image">
                  <img src={product.master.images[0].product_url} />
                </picture>
              </div>
              <div className="product-zoom-gallery">
                <ul className="product-thumbnails">
                  {product.master.images.map((image: any, index: number) => (
                    <li className="product-thumbnails__all" key={index}>
                      <a href={image.product_url}>
                        <img src={image.mini_url} />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
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
                <p className="product-content">
                  Cuadro de illustracion mascotas en invierno coleccion n32
                </p>
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
                value="1"
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
        <div className="product-details-tab">
          <ul className="nav nav-pills justify-content-center" role="tablist">
            <li className="nav-item">
              <a
                className="nav-link active"
                id="product-info-link"
                data-toggle="tab"
                href="#product-info-tab"
                role="tab"
                aria-controls="product-info-tab"
                aria-selected="false"
              >
                Additional information
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="product-shipping-link"
                data-toggle="tab"
                href="#product-shipping-tab"
                role="tab"
                aria-controls="product-shipping-tab"
                aria-selected="false"
              >
                Shipping &amp; Returns
              </a>
            </li>
          </ul>
          <div className="tab-content container">
            <div
              className="tab-pane fade show active"
              id="product-info-tab"
              role="tabpanel"
              aria-labelledby="product-info-link"
            >
              <div className="product-desc-content">
                <div className="product-page__details">
                  <div className="product-properties">
                    <h2 className="product-properties__title">
                      Property Types
                    </h2>

                    <table className="product-properties__table">
                      <tbody>
                        <tr>
                          <td>Material</td>
                          <td>Paper Banner</td>
                        </tr>
                        <tr>
                          <td>Impresora</td>
                          <td>Epson 2400</td>
                        </tr>
                        <tr>
                          <td>Marco</td>
                          <td>Madera Laurel</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="product-shipping-tab"
              role="tabpanel"
              aria-labelledby="product-shipping-link"
            >
              <div className="product-desc-content">
                <h3>Delivery &amp; returns</h3>
                <p>
                  We deliver to over 100 countries around the world. For full
                  details of the delivery options we offer, please view our
                  <a href="#">Delivery information</a>
                  We hope you’ll love every purchase, but if you ever need to
                  return an item you can do so within a month of receipt. For
                  full details of how to make a return, please view our
                  <a href="#">Returns information</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
