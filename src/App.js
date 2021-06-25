import React, { useState, } from "react";
import "./styles/index.scss";
import { LogoSpeedoc, } from './constants';

const Login = () => {
  const [email, setEmail] = useState('');
  const [speedocKey, setSpeedocKey] = useState('');
  const [password, setPassword] = useState('');

  const OnPressHandler = () => {
    console.log('requesting');
  }

  return (
    <div className="login-container">
      <img src={LogoSpeedoc}>
      </img>

      <div className="input-container">
        <p>Enter Your Email Address</p>
        <input onChange={(e) => {
          setEmail(e.target.value)
        }} value={email} className="InputLogin" type="text" placeholder="Your email address" />
      </div>

      <div className="input-container">
        <p>Enter Your Secret Speedoc key</p>
        <input onChange={(e) => {
          setSpeedocKey(e.target.value)
        }}
          value={speedocKey} className="InputLogin" type="text" placeholder="Your secret key" />
      </div>

      <div className="input-container">
        <p>Enter Your Password</p>
        <input onChange={(e) => {
          setPassword(e.target.value)
        }}
          value={password} className="InputLogin" type="password" placeholder="" />
      </div>

      <div className="input-container">
        <input className="CheckboxLogin" type="checkbox"/>
        <span>Remember Me</span>
      </div>

      <div className="input-container">
        <button onClick={OnPressHandler}>Login</button>
      </div>
    </div>
  )
}

function App() {
  return (
    <div id="app">
      <Login></Login>
    </div>
  );
}

export default App;
