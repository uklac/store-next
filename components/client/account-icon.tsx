'use client';

import Link from 'next/link';
import { useCallback, useEffect } from 'react';
import { useUser } from 'store/hooks/user-hook';

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
      <Link href='/account'>
        <div className="icon">
          <i className="icon-user"></i>
        </div>
        <p>{ currentUser?.email ? currentUser.email : 'Account'}</p>
      </Link>
    </div>
  );
}
