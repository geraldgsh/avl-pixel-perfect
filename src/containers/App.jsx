import React from 'react';
import logo from '../assets/images/logo.svg';
import { Button } from 'react-rainbow-components';
import '../assets/App.css';

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 col-xs-1 container">
            1 of 3
          </div>
          <div className="col-md-9 col-xs-1 container">
            2 of 3 (wider)
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
