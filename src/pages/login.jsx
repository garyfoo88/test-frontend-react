import React, { useState } from "react";
import { login } from "../services/authenticationService";
import "../styles/components/login.scss";
function Login(props) {
  const { onLoggedIn } = props;
  const [email, setEmail] = useState("");
  const [secretKey, setSecretKey] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    localStorage.setItem("key", secretKey);
    login({
      email,
      password,
      rememberMe,
    })
      .then(({ data }) => {
        setIsLoading(false);
        localStorage.setItem("jwt", data.jwt);
        onLoggedIn()
      })
      .catch((err) => {
        setIsLoading(false);
        alert("Error logging in, Please ensure your credentials are correct.");
      });
  };

  return (
    <div className="login-container">
      <form onSubmit={onLogin}>
        <div className="form-element">
          <div className="form-label">Enter your email address</div>
          <input
            required
            className="form-input"
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-element">
          <div className="form-label">Enter your secret Speedoc key</div>
          <input
            required
            className="form-input"
            type="text"
            placeholder="Your secret key"
            value={secretKey}
            onChange={(e) => setSecretKey(e.target.value)}
          />
        </div>
        <div className="form-element">
          <div className="form-label">Enter your password</div>
          <input
            required
            className="form-input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-element-checkbox" style={{ color: "dimgray" }}>
          <input
            className="login-checkbox"
            type="checkbox"
            checked={rememberMe}
            onChange={() => setRememberMe(!rememberMe)}
          />
          <div>
            Remember me
          </div>
        </div>
        <button disabled={isLoading} className="login-button" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
