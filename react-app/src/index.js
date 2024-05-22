import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router } from 'react-router-dom';
import Menu from './comp/Menu';

import { Provider } from 'react-redux';
import { configureStore} from '@reduxjs/toolkit';

import contadorReducer from './comp-redux/features/contador';
import prodBReducer  from './comp-redux/features/prodB';


const store =configureStore({
  reducer:{
    contador:contadorReducer,
    producto_bodega:prodBReducer
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Menu />
      </Router>
    </Provider>
  </React.StrictMode>
);


