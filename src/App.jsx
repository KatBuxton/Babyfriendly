import React, { useState } from 'react';
import './App.css';
import { Column } from './components/Column';
// import { MapSection } from './components/MapSection';
import { Map } from "./components/Map";
import { Logo } from './components/Logo';
import { ViewSwitch } from './components/ViewSwitch';
import { List } from './components/List';
import { Filters } from './components/Filters';
import { FilterSwitch } from './components/FilterSwitch';
import data from './data.js';


function App() {
  const [listViewVisible, setListViewVisible] = useState(false)
  const [filtersVisible, setFiltersVisible] = useState(false)
  const [selectedLocation, setSelectedLocation] = useState(null)
  const [selectedFilters, setSelectedFilters] = useState([]);


  let mobileView = ""
  if (filtersVisible === true) {
    mobileView = "container mobile-filters"
  } else if (filtersVisible === false && listViewVisible === false) {
    mobileView = "container list-view-mobile-hidden"
  } else {
    mobileView = "container"
  }

  const filteredItems = data.filter((place) => {
    if (selectedFilters.length === 0) {
      return true
    }
    const containsAll = selectedFilters.every(filter => {
      return place.filters.includes(filter);
    });
    return containsAll
  })


  console.log(filteredItems)

  return (
    <div className="App">
      <div className={mobileView}>
        <div className='sidebar'>
          <Logo />
          <FilterSwitch
            filtersVisible={filtersVisible}
            setFiltersVisible={setFiltersVisible} />
          <ViewSwitch
            listViewVisible={listViewVisible}
            setListViewVisible={setListViewVisible} />
          <Filters
            selectedFilters={selectedFilters}
            setSelectedFilters={setSelectedFilters}
            setFiltersVisible={setFiltersVisible} />
          <List
            setSelectedLocation={setSelectedLocation}
            filteredItems={filteredItems}
          />
        </div>
        <Map
          selectedLocation={selectedLocation}
          setSelectedLocation={setSelectedLocation}
          filteredItems={filteredItems} />
      </div>
    </div>
  );
}

export default App;
