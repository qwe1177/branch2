import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Hello from './Hello.js'

ReactDOM.render((
  <BrowserRouter>
    <Hello/>
  </BrowserRouter>
), document.getElementById('app'))