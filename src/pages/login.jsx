import React from "react";
import { useState } from "react";
import { login } from "../services/authenticationService";

export default function Login() {

  const [email, setEmail] = useState("");
  const [secret, setSecret] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    localStorage.setItem("key", secret);

    const formData = {
      "password" : password,
      "email": email,
      "rememberMe": remember,
    }
    const res = await login(formData);
    console.log(res);

    localStorage.setItem("jwt", res.data.jwt);
    
  }

  return (
    <div id="login">
      <img src="https://public.speedoc.com/design/logo/logotype_black.svg" />
      <form onSubmit={handleSubmit}>
        <div className="formControl">
          <div>Enter your email address</div>
          <input
            type="email"
            className="input"
            placeholder="Your email address"
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
            required
          >
          </input>
        </div>

        <div className="formControl">
          <div>Enter your secret Speedoc key</div>
          <input
            type="text"
            className="input"
            placeholder="Your secret key"
            value={secret}
            onChange={(ev) => setSecret(ev.target.value)}
            required
          >
          </input>
        </div>

        <div className="formControl">
          <div>Enter your password</div>
          <input
            type="password"
            className="input"
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
            required
          ></input>
        </div>

        <div className="formControl">
          <input
            type="checkbox"
            value={remember} 
            onChange={(ev) => {
              setRemember(ev.target.checked)
            }}
          ></input>
          <span>Remember me</span>
        </div>

        <div className="formControl">
          <button className="button">Login</button>
        </div>
      </form>
    </div>
  );
}
