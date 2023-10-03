'use client';

interface AddressStepProps {}

export async function AddressStep(props: AddressStepProps) {

  return (
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
  );
}
