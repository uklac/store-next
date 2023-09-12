import { CreateAccount } from 'interfaces/user';
import { API_URL } from './constants';
const OPTION_TYPES_URL = `${API_URL}/api/users`;

export async function registerUser(account: CreateAccount): Promise<any> {
  const response = await fetch(OPTION_TYPES_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${process.env.API_TOKEN_AUTH}`
    },  
    body: JSON.stringify({
      email: account.email,
      password: account.password,
      password_confirmation: account.password_confirmation
    })
  });
  try {
    return await response.json();
  } catch (error) {
    return error;
  }
}