import React from 'react';
import { Auth0Provider } from "@auth0/auth0-react";
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain={process.env.REACT_APP_DOMAIN}
    clientId={process.env.REACT_APP_CLIENTID}
    redirectUri={window.location.origin}
    audience= {`https://${process.env.REACT_APP_DOMAIN}/api/v2/`}
    scope="read:current_user update:current_user_metadata"
  >
    <App />
  </Auth0Provider>
);