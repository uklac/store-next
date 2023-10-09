'use client';

import Link from 'next/link';
import { useUser } from 'store/hooks/user-hook';
import LoginModal from './login-modal';
import { useCallback, useEffect } from 'react';

export async function AccountIcon() {
  const { _getCurrentUser, currentUser, getUserId } = useUser();

  const fetchCurrentUser = useCallback(async () => {
    const { error } = await _getCurrentUser();
    if (error) {
      console.error('Error fetching account:', error);
    }
  }, []);

  useEffect(() => {
    if (getUserId() > 0) {
      fetchCurrentUser();
    }
  }, []);

  return (
    <div className="account">
      {currentUser ? (
        <Link href="/account">
          <p>My Account</p>
        </Link>
      ) : (
        <LoginModal>
          Iniciar Session / Registrarse
        </LoginModal>
      )}
    </div>
  );
}
