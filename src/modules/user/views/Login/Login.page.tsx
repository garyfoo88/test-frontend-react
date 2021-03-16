//#region IMPORT
// IMPORT MODULE
import React, { useState } from "react";
import * as Yup from "yup";
import { Field, Formik, FieldProps } from "formik";

// IMPORT COMPONENT
import logo from "../../../../images/logo.png";

// IMPORT CONFIG
import { emailRegex, LoginFormValues, LoginResponse } from "../../entity";
import { login } from "../../../../services/authenticationService";
import { useHistory } from "react-router";
import { PATH } from "../../../wrapper/entity";
import "./Login.page.style.scss";
//#endregion

const Login: React.FC = () => {
  //#region GENERAL
  const history = useHistory();
  const [isLoading, setLoading] = useState(false);

  //#endregion

  //#region FORM
  const initialValues: LoginFormValues = {
    email: "",
    password: "",
    secretKey: ""
  };

  const formValidation = Yup.object().shape({
    email: Yup.string().matches(emailRegex, "Must be a valid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
    secretKey: Yup.string().required("Secret Key is required")
  });

  const handleSubmit = async (e: LoginFormValues) => {
    setLoading(prevLoading => !prevLoading);
    const res = await login(e);
    if (res.status === 200) {
      localStorage.setItem("userData", JSON.stringify(res.data));
      localStorage.setItem("key", e.secretKey);
      localStorage.setItem("jwt", (res.data as LoginResponse).jwt);
      history.replace(PATH.HOME);
    }
  };
  //#endregion
  return (
    <div className="login">
      <div className="login__header">
        <img src={logo} alt="login-img" className="login__header--image" />
      </div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={formValidation}>
        {({ handleSubmit, errors, isValid }): React.ReactElement => (
          <div className="login__form">
            <div className="login__form--field">
              <span className="form-label">Enter your email address</span>
              <Field
                name="email"
                render={({ field }: FieldProps) => (
                  <input
                    {...field}
                    className={`form-field${errors && errors.email ? "__error" : ""}`}
                    type="text"
                    placeholder="Your email address"
                  />
                )}
              />
              {errors && errors.email && <span className="form-error">{errors.email}</span>}
            </div>
            <div className="login__form--field">
              <span className="form-label">Enter your secret Speedoc key</span>
              <Field
                name="secretKey"
                render={({ field }: FieldProps) => (
                  <input
                    {...field}
                    className={`form-field${errors && errors.secretKey ? "__error" : ""}`}
                    type="text"
                    placeholder="Your secret key"
                  />
                )}
              />
              {errors && errors.secretKey && <span className="form-error">{errors.secretKey}</span>}
            </div>
            <div className="login__form--field">
              <span className="form-label">Enter your password</span>
              <Field
                name="password"
                placeholder="Your password"
                render={({ field }: FieldProps) => (
                  <input
                    className={`form-field${errors && errors.password ? "__error" : ""}`}
                    {...field}
                    type="password"
                    placeholder="Your password"
                  />
                )}
              />
              {errors && errors.password && <div className="form-error">{errors.password}</div>}
            </div>
            <div className="login__form--checkbox">
              <Field name="rememberMe" render={({ field }: FieldProps) => <input {...field} type="checkbox" />} />
              <span className="form-label-checkbox"> Remember me</span>
            </div>
            <div
              className={`login__form--action${isValid ? (isLoading ? "-loading" : "") : "-disabled"}`}
              onClick={() => {
                isValid && !isLoading && handleSubmit();
              }}>
              Login
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default Login;
