import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";

import "./index.css";
import App from "./App";

const domain = "dev-dxbcxifuyfdukw3i.us.auth0.com";
const clientId = "Wsw0SsRe0Ovg7UkM7GZHWqZkSpl7fgnl";
console.log(domain);
console.log(clientId);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
