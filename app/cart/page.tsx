import { getCart } from 'apis/cart-api';
import { CartLineItems, CartOrderSummary } from 'components';
import { OrderData } from 'interfaces';
import { cookies } from 'next/headers'

export default async function Cart() {
  const cookieStore = cookies();
  const orderNumber = cookieStore.get('order_number')?.value || '';
  const guestToken = cookieStore.get('guest_token')?.value || '';
  let order = {} as OrderData;
  
  try {
    order = await getCart(orderNumber, guestToken);
  } catch (error) {
    console.log(error);
  }
  
  return (
    <div className="page-content">
      <div className="cart">
        <div className="container">
          { order.id ?
          <div className="row">
            <div className="col-lg-9">
              <h4>Tu carrito</h4>
              <CartLineItems order={order}/>
            </div>
            <div className="col-lg-3">
              <CartOrderSummary />
            </div>
          </div>
          :
          <>Carrito vacio</>
        }
        </div>
      </div>
    </div>
  );
}
