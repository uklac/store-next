import { loginAccount } from 'apis/account-api';
import { cookies } from 'next/headers';

export async function GET(request: Request) {
  const body  = request.body;
  const cookieStore = cookies();
  console.log(body);
  const { user } = await loginAccount({
    email: 'carmen@gmail.com',
    password: 'carmen@gmail.com'
  });
  console.log('resp: ', user);
  
  //@ts-ignore
  // const token = cookieStore.set('user_token', 'carmen');
  console.log('cookies:  ', cookieStore.getAll());

  return new Response(`Hello, ${user.email}`, {
    status: 200,
    // headers: { 'Set-Cookie': `token=${token.value}` },
  });
}
