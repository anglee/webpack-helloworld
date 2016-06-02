import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';
import MyComponent from './component.jsx';
require('./index.less');

console.log(`lodash version = ${_.VERSION}`);

ReactDOM.render(
  <MyComponent />,
  document.getElementById('root')
);
