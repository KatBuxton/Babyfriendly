import React, { useEffect, useState } from 'react';
import './App.css';
import { Map } from './components/Map';
import { Logo } from './components/Logo';
import { ViewSwitch } from './components/ViewSwitch';
import { List } from './components/List';
import { Filters } from './components/Filters';
import { FilterSwitch } from './components/FilterSwitch';
import { SearchBar } from './components/SearchBar';
import { ThemeSwitch } from './components/ThemeSwitch';
// import useLocalStorage from 'use-local-storage';
import data from './data.js';

function App() {
  const [listViewVisible, setListViewVisible] = useState(false);
  const [filtersVisible, setFiltersVisible] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredItems, setFilteredItems] = useState(data);
  const [searchBarActive, setSearchBarActive] = useState(false);
  const [isDesktop, setDesktop] = useState(window.innerWidth > 768);
  const [searchInputValue, setSearchInputValue] = useState('');
  const [invert, setInvert] = useState(false);
  const [theme, setTheme] = useState('light');

  // const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  // const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const updateMedia = () => {
    setDesktop(window.innerWidth > 768);
  };

  const handleFiltersVisible = (filtersVisible) => {
    setSearchInputValue('');
    setFiltersVisible(filtersVisible);
    setSearchBarActive(false);
  };

  useEffect(() => {
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  });

  let mobileView = '';
  if (filtersVisible === true) {
    mobileView = 'container mobile-filters';
  } else if (filtersVisible === false && listViewVisible === false) {
    mobileView = 'container list-view-mobile-hidden';
  } else {
    mobileView = 'container';
  }

  useEffect(() => {
    const newItems =
      selectedFilters.length === 0
        ? data
        : data.filter((place) => {
            const placesCategory = [
              'cafe',
              'restaurant',
              'outdoors',
              'playroom',
              'babysitting',
              'other',
            ];

            const categorySelected = selectedFilters.some((filter) =>
              placesCategory.includes(filter),
            );

            const placeType = categorySelected ? selectedFilters.includes(place.category) : true;

            const filteredSelectedItems = selectedFilters.filter(
              (filter) => !placesCategory.includes(filter),
            );

            const containsAll = filteredSelectedItems.every((filter) => {
              return place.filters.includes(filter);
            });
            if (placeType && containsAll) {
              return true;
            }
            return false;
          });
    setFilteredItems(newItems);
  }, [selectedFilters]);

  return (
    <div className="App" data-theme={theme}>
      <div className={mobileView}>
        <div className="sidebar">
          <ThemeSwitch invert={invert} setInvert={setInvert} theme={theme} setTheme={setTheme} />
          {isDesktop ? (
            <>
              <Logo />
              <SearchBar
                searchInputValue={searchInputValue}
                setSearchInputValue={setSearchInputValue}
                setFilteredItems={setFilteredItems}
                setSearchBarActive={setSearchBarActive}
                searchBarActive={searchBarActive}
                setListViewVisible={setListViewVisible}
                setFiltersVisible={setFiltersVisible}
                isDesktop={isDesktop}
              />
            </>
          ) : (
            <div className="header">
              <Logo />
              <SearchBar
                searchInputValue={searchInputValue}
                setSearchInputValue={setSearchInputValue}
                setFilteredItems={setFilteredItems}
                setSearchBarActive={setSearchBarActive}
                searchBarActive={searchBarActive}
                setListViewVisible={setListViewVisible}
                setFiltersVisible={setFiltersVisible}
                isDesktop={isDesktop}
              />
            </div>
          )}
          {!filtersVisible && (
            <FilterSwitch
              filtersVisible={filtersVisible}
              setFiltersVisible={handleFiltersVisible}
            />
          )}
          <ViewSwitch listViewVisible={listViewVisible} setListViewVisible={setListViewVisible} />
          {!searchBarActive && (
            <Filters
              selectedFilters={selectedFilters}
              setSelectedFilters={setSelectedFilters}
              setFiltersVisible={setFiltersVisible}
              filteredItems={filteredItems}
              setSelectedLocation={setSelectedLocation}
            />
          )}
          <List
            setSelectedLocation={setSelectedLocation}
            filteredItems={filteredItems}
            setListViewVisible={setListViewVisible}
          />
        </div>
        <Map
          invert={invert}
          selectedLocation={selectedLocation}
          setSelectedLocation={setSelectedLocation}
          filteredItems={filteredItems}
        />
      </div>
    </div>
  );
}

export default App;
