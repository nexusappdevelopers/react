import  { useState } from "react";
import { useForm } from "react-hook-form";
import { LoginFormModel } from "../../model/loginModel";
import { Link } from "react-router-dom";
import FormFieldError from "../../components/formFieldError";
import * as AppConstants from "../../utilities/constants";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormModel>();
  const handleSignIn = (data: LoginFormModel) => {
    const payload = {
      email: data.email,
      password: data.password,
    };
    console.log(payload)
  };
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="container-fluid bg-dark-background ">
      <div className="min-vh-100 ">
        <div className="row p-5 gap-0">
          <div className="col-7 p-0">
            <img
              src="/static/img/login-img.svg"
              alt=""
              className="img-fluid w-100"
            />
          </div>
          <div className="col-md-5 col-12 bg-light rounded-end-3 shadow">
            <div className="d-flex flex-column p-5">
              <h2 className="fw-bold dark-primary fs-32 mt-3 ">
                Login to your Account
              </h2>
              <form
                className="mt-3 pt-md-3 pt-2"
                onSubmit={handleSubmit(handleSignIn)}
              >
                <div className="mb-3">
                  <label
                    htmlFor="email"
                    className="form-label fs-14 fw-semibold light-primary-color"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    {...register("email", {
                      required: true,
                      pattern:
                        /^(?!.*\.com\.com)(?!.*\.\.)(?!.*\.\.)(?!^[._%+-])[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                    })}
                    type="text"
                    className="form-control shadow-none py-2 rounded-3  border-grey box-shadow focus-shadow"
                  />
                  {errors.email?.type === "required" && (
                    <FormFieldError message={AppConstants.requiredField} />
                  )}
                  {errors.email?.type === "pattern" && (
                    <FormFieldError message={AppConstants.notValidEmail} />
                  )}
                </div>

                <div className="position-relative">
                  <label
                    htmlFor="password"
                    className="form-label fs-14 fw-semibold light-primary-color"
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    {...register("password", {
                      required: true,
                    })}
                    type={showPassword ? "text" : "password"}
                    className="form-control shadow-none rounded-3 border-grey py-2 box-shadow focus-shadow"
                  />
                  {errors.password?.type === "required" && (
                    <FormFieldError message={AppConstants.requiredField} />
                  )}
                  <div
                    className="position-absolute end-0 me-3 cursor"
                    style={{ top: "40px" }}
                    onClick={() => handleTogglePassword()}
                  >
                    <img
                      src={`/static/img/${!showPassword ? "eye" : "u_eye"}.svg`}
                      alt="..."
                    />
                  </div>
                </div>

                <div className="my-4 text-end">
                  <Link
                    to={"/forgot-password"}
                    className="fs-14 fw-semibold text-decoration-none primary-text "
                  >
                    Forgot Password
                  </Link>
                </div>

                <div>
                  <button
                    className="btn fw-semibold py-10
                      w-100 rounded-1 shadow bg-dark-background text-light "
                    type="submit"
                  >
                    Sign in
                  </button>
                </div>
              </form>
              <div className="text-center mt-4 d-flex align-items-center">
                <div className="w-50 borderOr me-2"></div> <span>or</span>
                <div className="w-50 borderOr ms-2"></div>
              </div>
              <div>
                <div>
                  <button className="fs-16 fw-semibold  w-100 py-3 px-2 bg-light google-button mt-3 rounded-3">
                    <img
                      src="/static/img/Google-button.svg"
                      alt=""
                      className="me-2"
                    />
                    Sign up with Google
                  </button>
                  <div className="fs-14 paragraph-text mt-2 pt-md-3 pt-2 text-center fs-14 fw-semibold">
                    Don’t have an account?&nbsp;
                    <Link
                      to={"/sign-up"}
                      className="fs-14 text-decoration-none primary-text fw-semibold"
                    >
                      Register
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
