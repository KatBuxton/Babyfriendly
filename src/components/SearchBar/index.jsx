import React, { useState } from 'react';
import "./style.css";
import data from '../../data.js';


export const SearchBar = ({ setFilteredItems, setSearchBarActive, searchBarActive, setListViewVisible, setFiltersVisible }) => {
  const [q, setQ] = useState("");
  // console.log(q)
  // const searchInput
  // data.filter((place) => {
  //   return place.some((newItem) => {
  //     return (
  //       place[newItem]
  //         .toString()
  //         .toLowerCase()
  //         .indexOf(q.toLowerCase()) > -1
  //     );
  //   });
  // });

  const handleChange = (value) => {

    if (value) {
      setSearchBarActive(true)
      setFiltersVisible(false)
    }
    if (!value) {
      setSearchBarActive(false)
      setFiltersVisible(true)
    }

    setQ(value)

    const lowercasedValue = value.toLowerCase()
    const searchResult = data.filter((place) => {
      const lowercasedName = place.name.toLowerCase()
      const lowercasedAddress = place.address.toLowerCase()


      if (lowercasedName.includes(lowercasedValue)) {
        return true
      } else if (lowercasedAddress.includes(lowercasedValue)) {
        return true
      } else {
        return false
      }
    })
    console.log(searchResult)
    setFilteredItems(searchResult)
  }


  return (
    <div className="search-wrapper">
      <input
        type="text"
        className="search-input"
        placeholder="Hledat podle názvu nebo adresy"
        value={q}
        onFocus={() => {
          // setSearchBarActive(true)
          // setFiltersVisible(false)
        }}
        onChange={(e) => handleChange(e.target.value)}
        onBlur={() => {
          // setSearchBarActive(false)
        }}
      />
      <button
        type="reset"
        className={searchBarActive ? "close-button" : " close-button close-button-hidden"}
        onClick={() => handleChange("")}>
      </button>
      {/* <div ><img src={closeIconUrl} className="close-button" alt="alt" /></div> */}
    </div>
  )

}