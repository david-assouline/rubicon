import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { Authenticator } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import config from './amplifyconfiguration.json';
Amplify.configure(config);

import AuthLayout from "layouts/Auth.js";
import AdminLayout from "layouts/Admin.js";
import AdminPage from "./views/Dashboard/Administration";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={`/auth`} component={AuthLayout} />
        <Route path={`/admin`} component={AdminLayout} />
        <Route path={`/admin/administration`} component={AdminPage} />
        <Redirect from={`/`} to="/admin/dashboard" />
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
