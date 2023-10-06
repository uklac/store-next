import { User } from 'interfaces/user';

type UserParams = {
  userId: number;
  token: string;
};

export async function getUser(params: UserParams): Promise<User> {
  const { userId, token } = params;
  const url = `http://localhost:3000/api/users/${userId}`;
  const options = {
    method: 'GET',
    headers: { Accept: 'application/json', Authorization: `Bearer ${token}` },
  };
  const response = await fetch(url, options);
  return await response.json();
}
