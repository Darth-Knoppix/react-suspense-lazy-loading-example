import React from "react";
import Home from "./Home.jsx";
import Nav from "./Nav.jsx";
import { Router } from "@reach/router";

// Importing our components normally
import Dashboard from "./Dashboard.jsx";
import Locales from "./Locales.jsx";
import Flow from "./Flow.jsx";

export default () => (
  <div>
    <Nav links={['Dashboard', 'Locales', 'Flow']} />
    <div className="container" style={{ paddingTop: '6rem'}}>
      <Router>
        <Home path="/" />
        <Dashboard path="/dashboard" />
        <Locales path="/locales" />
        <Flow path="/flow" />
      </Router>
    </div>
  </div>
);
