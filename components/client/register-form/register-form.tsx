'use client';
import React from 'react';
import Link from 'next/link';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import { Button } from 'components';
import { useRef } from 'react';
import { useUser } from 'store/hooks/user-hook';
import { useRouter } from 'next/navigation';
import { useCart } from 'store/hooks/cart-hook';

interface Props {
  onSubmit: () => void;
}

export function RegisterForm(props: Props) {
  const { onSubmit } = props;
  const router = useRouter();
  const emailLoginRef = useRef<HTMLInputElement>(null);
  const passwordLoginRef = useRef<HTMLInputElement>(null);

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordConfirmationRef = useRef<HTMLInputElement>(null);

  const { _login, _register } = useUser();
  const { orderCart } = useCart();

  const registerSubmit = async () => {
    const email = emailRef.current?.value || '';
    const password = passwordRef.current?.value || '';
    const password_confirmation = passwordConfirmationRef.current?.value || '';
    const { error } = await _register(email, password, password_confirmation);
    if (error) {
      console.log('e: ', error);
    } else {
      onSubmit();
      orderCart ? router.push('/checkout') : router.push('/') ;
    }
  };

  const loginSubmit = async () => {
    const email = emailLoginRef.current?.value || '';
    const password = passwordLoginRef.current?.value || '';
    const { error } = await _login(email, password);
    if (error) {
      console.log('e: ', error);
    } else {
      onSubmit();
      orderCart ? router.push('/checkout') : router.push('/') ;
    }
  };
  return (
    <div className="form-box">
      <div className="form-tab">
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
                  <Button onClick={loginSubmit} outline="primary">
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
                    onSubmit={registerSubmit}
                    onClick={registerSubmit}
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
      </div>
    </div>
  );
}

export default RegisterForm;
