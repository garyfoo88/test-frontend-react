import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Homepage from "./pages/homepage";
import Login from "./pages/login";
import "./styles/index.scss";

function App() {
const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const tokenExists = localStorage.getItem("jwt");
    setIsLoggedIn(tokenExists);
  }, []);

  const onLoggedIn = () => {
    setIsLoggedIn(true);
  };
  return (
  <div>
    <Header />
    {isLoggedIn ? <Homepage /> : <Login onLoggedIn={onLoggedIn} />}
  </div>
  )
  
}

export default App;
