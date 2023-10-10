'use client';

import { useForm } from 'react-hook-form';

interface AddressStepProps {
  email?: string;
}

export async function AddressStep(props: AddressStepProps) {
  const { email } = props;
  const { register, handleSubmit } = useForm();
  return (
    <form
      onSubmit={handleSubmit((data) => {
        console.log('data: ', data);
      })}
    >
      <h2 className="checkout-title">Dirección de envió</h2>
      <label>Correo electrónico del cliente: *</label>
      <input
        {...register('email')}
        value={email}
        type="email"
        className="form-control"
      />
      <label>Nombre *</label>
      <input
        {...register('name')}
        type="text"
        className="form-control"
        required
      />
      <label>Dirección *</label>
      <input
        {...register('address1')}
        type="text"
        className="form-control"
        placeholder="Número de casa y nombre de la calle"
        required
      />
      <input
        {...register('address2')}
        type="text"
        className="form-control"
        placeholder="Apartamentos, suite, unidad etc..."
        required
      />

      <label>País *</label>
      <input
        {...register('country')}
        type="text"
        className="form-control"
        required
      />

      <div className="row">
        <div className="col-sm-6">
          <label>Ciudad *</label>
          <input
            {...register('city')}
            type="text"
            className="form-control"
            required
          />
        </div>

        <div className="col-sm-6">
          <label>Estado *</label>
          <input
            {...register('state')}
            type="text"
            className="form-control"
            required
          />
        </div>
      </div>

      <div className="row">
        <div className="col-sm-6">
          <label>Código postal / ZIP *</label>
          <input
            {...register('zipcode')}
            type="text"
            className="form-control"
            required
          />
        </div>

        <div className="col-sm-6">
          <label>Teléfono *</label>
          <input
            {...register('phone')}
            type="tel"
            className="form-control"
            required
          />
        </div>
      </div>

      <button className="btn btn-primary btn-order" type="submit">
        Guardar y Continuar
      </button>
    </form>
  );
}
