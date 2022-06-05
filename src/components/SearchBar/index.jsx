import React, { useState } from 'react';
import "./style.css";
import data from '../../data.js';
import filters from '../Filters/filters';


export const SearchBar = ({ setFilteredItems, setSearchBarActive, setListViewVisible, setFiltersVisible }) => {
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

    // if (!value) {
    //   setSearchBarActive(true)
    //   console.log()
    //   return
    // }
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
        type="search"
        className="search-input"
        value={q}
        onFocus={() => {
          setSearchBarActive(true)
          setFiltersVisible(false)
        }}
        onChange={(e) => handleChange(e.target.value)}
        onBlur={() => {
          setSearchBarActive(false)
        }}
      />
    </div>
  )

}