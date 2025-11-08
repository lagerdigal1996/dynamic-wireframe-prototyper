import React from 'react';
import Wireframe from './Wireframe';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Dynamic Wireframe Prototyper</h1>
        <Wireframe />
      </div>
    </Router>
  );
}

export default App;
