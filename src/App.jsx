import React from 'react';
import './App.css';
import { Sidebar } from './components/Sidebar';
import { MapSection } from './components/MapSection';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Sidebar />
        <MapSection />
      </div>
    </div>
  );
}

export default App;
