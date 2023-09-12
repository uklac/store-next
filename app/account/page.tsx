import { RegisterForm } from "components";

export default async function Account() {
  return (
    <div
      className="login-page bg-image pt-8 pb-8 pt-md-12 pb-md-12 pt-lg-17 pb-lg-17"
    >
      <div className="container">
        <div className="form-box">
          <div className="form-tab">
            <RegisterForm />
          </div>
        </div>
      </div>
    </div>
  );
}
