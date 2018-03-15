import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import TextField from './common/TextField';

ReactDOM.render(
  <TextField />, 
  document.getElementById('root')
);
registerServiceWorker();
