import React from 'react';
import './App.css';
import Header from './Header'
import Body from "./Body";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Header></Header>
          <Body></Body>
      </header>
    </div>
  );
}

export default App;
