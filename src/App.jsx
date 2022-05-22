import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Sidebar } from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
