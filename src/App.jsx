import React, { useState } from 'react';
import './App.css';
import { Column } from './components/Column';
// import { MapSection } from './components/MapSection';
import { Map } from "./components/Map";
import { Logo } from './components/Logo';
import { ViewSwitch } from './components/ViewSwitch';
import { List } from './components/List';
import { Filters } from './components/Filters';

function App() {
  const [listViewVisible, setListViewVisible] = useState(false)

  return (
    <div className="App">
      <div className={listViewVisible === true ? "container" : "container list-view-mobile-hidden"}>
        <div className='sidebar'>
          <Logo />
          <ViewSwitch
            listViewVisible={listViewVisible}
            setListViewVisible={setListViewVisible} />
          <Filters />
          <List />
        </div>
        <Map />
      </div>
    </div>
  );
}

export default App;
