import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { Authenticator } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import config from './amplifyconfiguration.json';
Amplify.configure(config);

import AuthLayout from "layouts/Auth.js";
import AdminLayout from "layouts/Admin.js";
import Policy from "./views/Main/Policy";
import ClientSearch from "./views/Main/ClientSearch";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={`/auth`} component={AuthLayout} />
        <Route path={`/admin`} component={AdminLayout} />
        <Route path={`/admin/policy`} component={Policy} />
        <Route path={`/admin/client/search`} component={ClientSearch} />
        <Redirect from={`/`} to="/admin/policy" />
      </Switch>
    </BrowserRouter>
   );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
