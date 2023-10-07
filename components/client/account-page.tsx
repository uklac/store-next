'use client';

import { useUser } from 'store/hooks/user-hook';
import RegisterForm from './register-form/register-form';
import { UserDashboard } from './user-dashboard';
import Link from 'next/link';

export function AccountPage() {
  const { currentUser } = useUser();

  return (
    <div className="main">
      <nav aria-label="breadcrumb" className="breadcrumb-nav mb-3">
        <div className="container">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link href="/">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link href="/products">Products</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              My Account
            </li>
          </ol>
        </div>
      </nav>
      {currentUser.id ? <UserDashboard /> : <RegisterForm />}
    </div>
  );
}
