import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import FullnameField from './fullname/FullnameField';
import TextField from './common/TextField';

ReactDOM.render(
  <FullnameField />,
  document.getElementById('root')
);
registerServiceWorker();
