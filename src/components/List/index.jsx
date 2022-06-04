import React, { useState } from 'react';
import "./style.css";
import { ListItem } from '../ListItem';
import data from '../../data.js';

export const List = ({ selectedLocation, setSelectedLocation }) => {

  // const filterByCategory = () => {
  //   if handleCheck 
  // }

  const handleClick = (place) => {
    setSelectedLocation(place)
  }

  return (
    <div className="list">
      {data.map((place) =>
        <ListItem
          name={place.name}
          address={place.address}
          key={place.index}
          category={place.category}
          handleClick={() => handleClick(place)}
        />)}
    </div>
  )
}

