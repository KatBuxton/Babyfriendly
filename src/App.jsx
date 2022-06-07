import React, { useEffect, useState } from 'react';
import './App.css';
import { Map } from "./components/Map";
import { Logo } from './components/Logo';
import { ViewSwitch } from './components/ViewSwitch';
import { List } from './components/List';
import { Filters } from './components/Filters';
import { FilterSwitch } from './components/FilterSwitch';
import data from './data.js';
import { SearchBar } from './components/SearchBar';


function App() {
  const [listViewVisible, setListViewVisible] = useState(false)
  const [filtersVisible, setFiltersVisible] = useState(false)
  const [selectedLocation, setSelectedLocation] = useState(null)
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredItems, setFilteredItems] = useState(data)
  const [searchBarActive, setSearchBarActive] = useState(false)
  const [isDesktop, setDesktop] = useState(window.innerWidth > 768);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 768);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  let mobileView = ""
  if (filtersVisible === true) {
    mobileView = "container mobile-filters"
  } else if (filtersVisible === false && listViewVisible === false) {
    mobileView = "container list-view-mobile-hidden"
  } else {
    mobileView = "container"
  }

  console.log(mobileView, "mobileView")
  console.log(filtersVisible, "filtersVisible")
  console.log(listViewVisible, "listViewVisible")
  console.log(isDesktop, "isDesktop")


  // const filteredItems = data.filter((place) => {
  //   if (selectedFilters.length === 0) {
  //     return true
  //   }
  //   place.filters.forEach((filter) => selectedFilters.includes(filter))
  // })
  useEffect(() => {
    const newItems = selectedFilters.length === 0 ? data : data.filter((place) => {

      const placesCategory = ["cafe", "restaurant", "outdoors", "playroom", "babysitting", "other"]
      const categorySelected = selectedFilters.some(filter => placesCategory.includes(filter));
      const placeType = categorySelected ? selectedFilters.includes(place.category) : true;

      // const filteredSelectedItems = selectedFilters.filter(filter => filter !== "cafe" && filter !== "restaurant" && filter !== "outdoors" && filter !== "playroom" && filter !== "babysitting" && filter !== "other")
      const filteredSelectedItems = selectedFilters.filter(filter => !placesCategory.includes(filter))
      const containsAll = filteredSelectedItems.every(filter => {
        return place.filters.includes(filter);
      });
      if (placeType && containsAll) {
        return true;
      }
      return false;
    })
    setFilteredItems(newItems)
  }, [selectedFilters]);




  return (
    <div className="App">
      <div className={mobileView}>
        <div className='sidebar'>
          {isDesktop
            ? <>
              <Logo />
              <SearchBar
                setFilteredItems={setFilteredItems}
                setSearchBarActive={setSearchBarActive}
                searchBarActive={searchBarActive}
                setListViewVisible={setListViewVisible}
                setFiltersVisible={setFiltersVisible} />
            </>
            : <div className="header">
              <Logo />
              <SearchBar
                setFilteredItems={setFilteredItems}
                setSearchBarActive={setSearchBarActive}
                searchBarActive={searchBarActive}
                setListViewVisible={setListViewVisible}
                setFiltersVisible={setFiltersVisible} />
            </div>}
          {!filtersVisible &&
            <FilterSwitch
              filtersVisible={filtersVisible}
              setFiltersVisible={setFiltersVisible} />
          }
          <ViewSwitch
            listViewVisible={listViewVisible}
            setListViewVisible={setListViewVisible} />
          {!searchBarActive &&
            <Filters
              selectedFilters={selectedFilters}
              setSelectedFilters={setSelectedFilters}
              setFiltersVisible={setFiltersVisible}
              filteredItems={filteredItems} />}
          <List
            setSelectedLocation={setSelectedLocation}
            filteredItems={filteredItems}
            setListViewVisible={setListViewVisible}
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
