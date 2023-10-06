'use client';

interface AddressStepProps {
  email?: string;
}

export async function AddressStep(props: AddressStepProps) {
  const { email } = props;

  return (
    <div>
      <h2 className="checkout-title">Detalles de facturación</h2>
      <label>Correo electrónico del cliente: *</label>
      <input value={email} type="email" className="form-control" />
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

      <button className="btn btn-primary btn-order" type="submit">
        Guardar y Continuar
      </button>

      {/* <label>Nota de Orden (opcional)</label>
      <textarea
        className="form-control"
        placeholder="Notes about your order, e.g. special notes for delivery"
      ></textarea> */}
    </div>
  );
}
