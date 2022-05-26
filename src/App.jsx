import React from 'react';
import './App.css';
import { Column } from './components/Column';
// import { MapSection } from './components/MapSection';
import { Map } from "./components/Map";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Column />
        <Map />
      </div>
    </div>
  );
}

export default App;
