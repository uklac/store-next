const ACCOUNT_URL = 'http://localhost:3000/api/sign_up';
type Account = {
  email: string, 
  password: string,
  password_confirmation: string,
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
