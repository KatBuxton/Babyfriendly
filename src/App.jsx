import React from 'react';
import './App.css';
import { Sidebar } from './components/Sidebar';
// import { MapSection } from './components/MapSection';
import { Map } from "./components/Map";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Sidebar />
        <Map />
      </div>
    </div>
  );
}

export default App;
