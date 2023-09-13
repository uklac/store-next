
export default async function Checkout() {
  return (
    <div className="page-content">
      <div className="checkout">
        <div className="container">
          <form action="#">
            <div className="row">
              <div className="col-lg-9">
                <h2 className="checkout-title">Detalles de facturación</h2>
                <label>Correo electrónico del cliente: *</label>
                <input type="email" className="form-control" />

                <label>Nombre *</label>
                <input type="text" className="form-control" required />

                <label>Dirección *</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Número de casa y nombre de la calle"
                  required
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Apartamentos, suite, unidad etc..."
                  required
                />

                <label>País *</label>
                <input type="text" className="form-control" required />

                <div className="row">
                  <div className="col-sm-6">
                    <label>Ciudad *</label>
                    <input type="text" className="form-control" required />
                  </div>

                  <div className="col-sm-6">
                    <label>Estado *</label>
                    <input type="text" className="form-control" required />
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-6">
                    <label>Código postal / ZIP *</label>
                    <input type="text" className="form-control" required />
                  </div>

                  <div className="col-sm-6">
                    <label>Teléfono *</label>
                    <input type="tel" className="form-control" required />
                  </div>
                </div>

                <label>Nota de Orden (opcional)</label>
                <textarea
                  className="form-control"
                  placeholder="Notes about your order, e.g. special notes for delivery"
                ></textarea>
              </div>
              <aside className="col-lg-3">
                <div className="summary">
                  <h3 className="summary-title">Su pedido</h3>

                  <table className="table table-summary">
                    <thead>
                      <tr>
                        <th>Producto</th>
                        <th>Total</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>
                          <a href="#">Beige knitted elastic runner shoes</a>
                        </td>
                        <td>$84.00</td>
                      </tr>

                      <tr className="summary-subtotal">
                        <td>Subtotal:</td>
                        <td>$160.00</td>
                      </tr>
                      <tr>
                        <td>Envío:</td>
                        <td>Envío gratis</td>
                      </tr>
                      <tr className="summary-total">
                        <td>Total:</td>
                        <td>$160.00</td>
                      </tr>
                    </tbody>
                  </table>

                  <div className="accordion-summary" id="accordion-payment">
                    <div className="card">
                      <div className="card-header" id="heading-1">
                        <h2 className="card-title">
                          <a
                            role="button"
                            data-toggle="collapse"
                            href="#collapse-1"
                            aria-expanded="true"
                            aria-controls="collapse-1"
                          >
                            Transferencia bancaria directa
                          </a>
                        </h2>
                      </div>
                      <div
                        id="collapse-1"
                        className="collapse show"
                        aria-labelledby="heading-1"
                        data-parent="#accordion-payment"
                      >
                        <div className="card-body">
                          Realice su pago directamente en nuestra cuenta
                          bancaria. Utilice su ID de pedido como referencia de
                          pago. Su pedido no será enviado hasta que los fondos
                          se hayan liquidado en nuestra cuenta.
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-outline-primary-2 btn-order btn-block"
                  >
                    <span className="btn-text">Realizar pedido</span>
                    <span className="btn-hover-text">Proceder a Pagar</span>
                  </button>
                </div>
              </aside>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
