'use client';

import { addAddressToOrder } from 'apis/cart-api';
import { useForm } from 'react-hook-form';
import { useCart } from 'store/hooks/cart-hook';

interface AddressStepProps {
  email?: string;
}

export async function AddressStep(props: AddressStepProps) {
  const { email } = props;
  const { register, handleSubmit } = useForm();
  const { _addAddressToOrder, orderCart } = useCart();
  
  return (
    <>
      { orderCart &&
        <form
          onSubmit={handleSubmit(async (data) => {
            const params = {...data, ...{
              country_id: 63,
              state_id: 790
            }}
            console.log('params: ', params);
            const resp = await _addAddressToOrder(params);
            console.log('resp: ', resp);
          })}
        >
          <h2 className="checkout-title">Dirección de envió</h2>
          <label>Correo electrónico del cliente: *</label>
          <input
            {...register('email')}
            value={orderCart.email}
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
      }
    </>
  );
}
