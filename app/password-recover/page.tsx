'use client';
import Button from 'components/src/lib/client/button/button';
import Link from 'next/link';

export default async function Account() {
  return (
    <div className="login-page pt-8 pb-8 pt-md-12 pb-md-12 pt-lg-17 pb-lg-17">
      <div className="container">
        <div className="form-box">
          <div className="form-tab">
            <div className="show">
              <h1 className="title mb-3">¿Has olvidado tu contraseña?</h1>
              <div className="tab-content">
                <div>
                  <div>
                    <form action="#">
                      <div className="form-group">
                        <label>Correo electrónico:</label>
                        <input
                          type="text"
                          className="form-control"
                          id="singin-email-2"
                          name="singin-email"
                          required
                        />
                      </div>
                      <div className="form-footer">
                        <Button
                          onClick={function (event?: any): void {
                            throw new Error('Function not implemented.');
                          }}
                          outline="primary"
                        >
                          <div>
                            <span>Restablecer mi contraseña</span>
                            <i className="icon-long-arrow-right"></i>
                          </div>
                        </Button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
