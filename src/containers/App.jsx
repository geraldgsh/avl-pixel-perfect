import React from 'react';
import Circle from '../components/circularBar';
import Content from '../components/content';
import '../assets/App.css';

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 col-xs-1 d-flex justify-content-center one-third">
            <Circle />
          </div>
          <div className="col-md-9 col-xs-1 three-quarter">
            <Content />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
