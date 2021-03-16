//#region IMPORT
// IMPORT MODULE
import React from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";

// IMPORT COMPONENT
import { Home } from "../../../main/views";
import { Login } from "../../../user/views";

// IMPORT CONFIG
import { PATH } from "../../entity";
import "./Wrapper.style.page.scss";
//#endregion

const Wrapper: React.FC = () => {
  return (
    <div className="wrapper">
      <Router>
        <Switch>
          <Route exact path={PATH.HOME} component={Home} />
          <Route exact path={PATH.LOGIN} component={Login} />
          <Redirect to={PATH.HOME} />
        </Switch>
      </Router>
    </div>
  );
};
export default Wrapper;
