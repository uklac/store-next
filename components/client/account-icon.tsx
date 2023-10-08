'use client';

import Link from 'next/link';
import { useUser } from 'store/hooks/user-hook';
import LoginModal from './login-modal';

export async function AccountIcon() {
  const { currentUser } = useUser();

  return (
    <div className="account">
      {currentUser ? (
        <Link href="/account">
          <div className="icon">
            <i className="icon-user"></i>
          </div>
          <p>{currentUser?.email ? currentUser.email : 'Account'}</p>
        </Link>
      ) : (
        <LoginModal>
          <a href='#'>
            <div className="icon">
              <i className="icon-user"></i>
            </div>
            <p>Mi Cuenta</p>
          </a>
        </LoginModal>
      )}
    </div>
  );
}
