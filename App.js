import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import CustomerAdd from './CustomerAdd';
import CustomerView from './CustomerView';
import CssBaseline from "@mui/material/CssBaseline";
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <CssBaseline />
      <div className="App">
        <h1>Redux Customer</h1>
        <CustomerAdd />
        <CustomerView />
      </div>
    </Provider>
  );
}

export default App;
