const ACCOUNT_URL = 'http://localhost:3000/api/sign_up';
const LOGIN_URL = 'http://localhost:3000/api/sign_in';

type Account = {
  email: string, 
  password: string,
  password_confirmation: string,
}

type AccountLogin = {
  email: string, 
  password: string,
}

export async function createAccount(params: Account): Promise<any> {
  const url = `${ACCOUNT_URL}`;
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: 'Bearer undefined'
    },
    body: JSON.stringify({
      user: {
        email: params.email,
        password: params.password,
        password_confirmation: params.password
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
