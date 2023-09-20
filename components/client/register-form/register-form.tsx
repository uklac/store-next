'use client';
import React from 'react';
import Link from 'next/link';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import { Button } from 'components';
import { useRef } from 'react';
import { createAccount, loginAccount } from 'apis/account-api';

interface Props {}

export function RegisterForm(props: Props) {
  const {} = props;
  const emailLoginRef = useRef<HTMLInputElement>(null);
  const passwordLoginRef = useRef<HTMLInputElement>(null);

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordConfirmationRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async () => {
    const email = emailRef.current?.value || '';
    const password = passwordRef.current?.value || '';
    const password_confirmation = passwordConfirmationRef.current?.value || '';

    try {
      const newUser = await createAccount({
        email,
        password,
        password_confirmation,
      });
      console.log('Usuario registrado:', newUser);
    } catch (error) {
      console.error('Error al registrar usuario:', error);
    }
  };

    const loginSubmit = async () => {
    const email = emailLoginRef.current?.value || '';
    const password = passwordLoginRef.current?.value || '';

    try {
      const login = await loginAccount({
        email,
        password,
      });
      console.log('Inicio de sesión exitoso:', login);
    } catch (error) {
      console.error('No se pudo logear:', error);
    }
  };
  return (
    <Tabs selectedTabClassName="show" defaultIndex={0}>
      <TabList className="nav nav-pills nav-fill">
        <Tab className="nav-item">
          <span className="nav-link">Sign In</span>
        </Tab>

        <Tab className="nav-item">
          <span className="nav-link">Register</span>
        </Tab>
      </TabList>

      <div className="tab-content">
        <TabPanel style={{ paddingTop: '2rem' }}>
          <div>
            <form action="#">
              <div className="form-group">
                <label htmlFor="singin-email-2">
                  Username or email address *
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="singin-email-2"
                  ref={emailLoginRef}
                  name="singin-email"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="singin-password-2">Password *</label>
                <input
                  type="password"
                  className="form-control"
                  id="singin-password-2"
                  name="singin-password"
                  ref={passwordLoginRef}
                  required
                />
              </div>

              <div className="form-footer">
                <Button
                  onClick={loginSubmit}
                  outline="primary"
                >
                  <div>
                    <span>LOG IN</span>
                    <i className="icon-long-arrow-right"></i>
                  </div>
                </Button>

                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="signin-remember-2"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="signin-remember-2"
                  >
                    Remember Me
                  </label>
                </div>

                <Link href="/password-recover" className="forgot-link">
                  Forgot Your Password?
                </Link>
              </div>
            </form>
          </div>
        </TabPanel>
        <TabPanel>
          <div>
            <div className="form-group">
              <label htmlFor="email">Your email address *</label>
              <input
                type="email"
                className="form-control"
                id="email"
                ref={emailRef}
                name="register-email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password *</label>
              <input
                type="password"
                className="form-control"
                id="password"
                ref={passwordRef}
                name="register-password"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password_confirmation">
                Password Confirmation:
              </label>
              <input
                type="password"
                className="form-control"
                id="password_confirmation"
                name="register-password"
                ref={passwordConfirmationRef}
                required
              />
            </div>

            <div className="form-footer">
              <button
                onSubmit={handleSubmit}
                onClick={handleSubmit}
                type="submit"
              >
                <div>
                  <span>SIGN UP</span>
                  <i className="icon-long-arrow-right"></i>
                </div>
              </button>

              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="register-policy-2"
                  required
                />
                <label
                  className="custom-control-label"
                  htmlFor="register-policy-2"
                >
                  I agree to the privacy policy *
                </label>
              </div>
            </div>
          </div>
        </TabPanel>
      </div>
    </Tabs>
  );
}

export default RegisterForm;
