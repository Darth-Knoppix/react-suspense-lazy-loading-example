import React from "react";
import Home from "./Home.jsx";
import Nav from "./Nav.jsx";
import { Router } from "@reach/router";

// Using React.lazy and React.Suspense to load components when requested
const Dashboard = React.lazy(() => import("./Dashboard.jsx"));
const Locales = React.lazy(() => import("./Locales.jsx"));
const Flow = React.lazy(() => import("./Flow.jsx"));

export default () => (
  <div>
    <Nav links={['Dashboard', 'Locales', 'Flow']} />
    <div className="container" style={{ paddingTop: '6rem'}}>
      {/* The fallback prop will show a component when loading */}
      <React.Suspense fallback={<p>Loading...</p>}>
        <Router>
          <Home path="/" />
          <Dashboard path="/dashboard" />
          <Locales path="/locales" />
          <Flow path="/flow" />
        </Router>
      </React.Suspense>
    </div>
  </div>
);
