'use client';
import React from 'react';
import Link from 'next/link';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import { Button } from 'components';
import { useRef } from 'react';
import { createAccount } from 'apis/account-api';

interface Props {}

export function RegisterForm(props: Props) {
  const {} = props;
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordConfirmationRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async () => {
    // event?.preventDefault
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
          <div className="form-choice">
            <p className="text-center">or sign in with</p>
            <div className="row">
              <div className="col-sm-6">
                <Link href="/pages/login" className="btn btn-login btn-g">
                  <i className="icon-google"></i>
                  Login With Google
                </Link>
              </div>
              <div className="col-sm-6">
                <Link href="/pages/login" className="btn btn-login  btn-f">
                  <i className="icon-facebook-f"></i>
                  Login With Facebook
                </Link>
              </div>
            </div>
          </div>
        </TabPanel>
      </div>
    </Tabs>
  );
}

export default RegisterForm;
