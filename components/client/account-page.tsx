'use client';

import { useUser } from 'store/hooks/user-hook';
import RegisterForm from './register-form/register-form';

export function AccountPage() {
  const { currentUser } = useUser();

  return (
    <div>
      {currentUser.id ? <p>Aquí va la pagina de perfil</p> : <RegisterForm />}
    </div>
  );
}
