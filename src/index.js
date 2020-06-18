import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import * as serviceWorker from './serviceWorker';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGoogle, faLinkedinIn, faTwitter, faFacebookF } from '@fortawesome/free-brands-svg-icons'

library.add(faFacebookF, faGoogle, faTwitter, faLinkedinIn)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
