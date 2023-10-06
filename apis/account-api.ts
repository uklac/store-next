const ACCOUNT_URL = 'http://localhost:3000/api/sign_up';
const LOGIN_URL = 'http://localhost:3000/api/sign_in';

type AccountRegister = {
  email: string, 
  password: string,
  password_confirmation: string,
  order_number?: string | null;
  guest_token?: string | null;
}

type AccountLogin = {
  email: string, 
  password: string,
}

export async function createAccount(params: AccountRegister): Promise<any> {
  const { email, password, password_confirmation, order_number, guest_token} = params;
  const url = `${ACCOUNT_URL}`;
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: 'Bearer undefined'
    },
    body: JSON.stringify({
      order_number,
      guest_token,
      user: {
        email,
        password,
        password_confirmation
      }
    })
  };
  const response = await fetch(url, options);
  return await response.json();
}

export async function loginAccount(params: AccountLogin): Promise<any> {
  const url = `${LOGIN_URL}`;
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: 'Bearer undefined'
    },
    body: JSON.stringify({
      spree_user: {
        email: params.email,
        password: params.password,
      }
    })
  };
  const response = await fetch(url, options);
  return await response.json();
}
