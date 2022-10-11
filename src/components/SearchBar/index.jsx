import React from 'react';
import './style.css';
import data from '../../data.js';
import ReactGA from 'react-ga';

const eventTracker = (category, action, label) => {
  ReactGA.event({
    category: category,
    action: action,
    label: label,
  });
};

export const SearchBar = ({
  setFilteredItems,
  setSearchBarActive,
  searchBarActive,
  searchInputValue,
  setSearchInputValue,
  setFiltersVisible,
  isDesktop,
}) => {
  const handleChange = (value) => {
    if (value) {
      setSearchBarActive(true);
      setFiltersVisible(false);
    }
    if (!value) {
      setSearchBarActive(false);
      isDesktop && setFiltersVisible(true);
    }

    setSearchInputValue(value);

    const lowercasedValue = value.toLowerCase();
    const searchResult = data.filter((place) => {
      const lowercasedName = place.name.toLowerCase();
      const lowercasedAddress = place.address.toLowerCase();

      if (lowercasedName.includes(lowercasedValue)) {
        return true;
      } else if (lowercasedAddress.includes(lowercasedValue)) {
        return true;
      } else {
        return false;
      }
    });
    setFilteredItems(searchResult);
  };

  return (
    <div className="search-wrapper">
      <input
        type="text"
        className="search-input"
        placeholder="Hledat podle názvu nebo adresy"
        value={searchInputValue}
        onChange={(e) => {
          handleChange(e.target.value);
          eventTracker('SearchBar', 'search input changed');
        }}
      />
      <button
        type="reset"
        className={searchBarActive ? 'close-button' : ' close-button close-button-hidden'}
        onClick={() => handleChange('')}
      ></button>
    </div>
  );
};
