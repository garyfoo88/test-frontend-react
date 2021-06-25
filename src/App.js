import React, { useState, } from "react";
import "./styles/index.scss";
import { LogoSpeedoc, } from './constants';
import { login, }  from './services/authenticationService';

const CustomButton = (props) => {
  return <button {...props} className="CustomButton">
  </button>
}

const Login = () => {
  const [payload, setPayload] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [email, setEmail] = useState('jarvis@speedoc.com');
  const [speedocKey, setSpeedocKey] = useState('');
  const [password, setPassword] = useState('speedocdemo');
  const [rememberMe, setRememberMe] = useState(false);

  const OnPressHandler = async () => {
    setPayload(null);
    setLoading(true);
    setError(null);

    let data = {
      email,
      password,
      rememberMe,
    };

    try {
      var resp = await login(data);
    } catch (e) {
      return setError(e)
    } finally {
      setLoading(false);
    }

    if (resp.data === null || resp.data === undefined) {
      return setError(new Error('ERR_NO_DATA'));
    }

    setPayload(JSON.stringify(resp.data))
  }

  return (
    <div className="login-container">
      {/* logo image */}
      <img src={LogoSpeedoc} alt="">
      </img>

      {/* input email address */}
      <div className="input-container">
        <p>Enter Your Email Address</p>
        <input onChange={(e) => {
          setEmail(e.target.value)
        }} value={email} className="InputLogin" type="text" placeholder="Your email address" />
      </div>

      {/* input secret code */}
      <div className="input-container">
        <p>Enter Your Secret Speedoc key</p>
        <input onChange={(e) => {
          setSpeedocKey(e.target.value)
        }}
          value={speedocKey} className="InputLogin" type="text" placeholder="Your secret key" />
      </div>

      {/* input password */}
      <div className="input-container">
        <p>Enter Your Password</p>
        <input onChange={(e) => {
          setPassword(e.target.value)
        }}
          value={password} className="InputLogin" type="password" placeholder="" />
      </div>

      {/* checkbox remember me */}
      <div className="input-container">
        <input onChange={(e) => {
          setRememberMe(e.target.checked)
        }}
          checked={rememberMe} className="CheckboxLogin" type="checkbox"/>
        <span>Remember Me</span>
      </div>

      {payload !== null && <textarea value={payload}>
                           </textarea>}

      {/* button login */}
      <div className="input-container">
        <CustomButton onClick={OnPressHandler}>{isLoading ? 'Loading...' : 'Login'}</CustomButton>
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
