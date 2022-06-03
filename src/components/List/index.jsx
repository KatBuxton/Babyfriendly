import React, { useState } from 'react';
import "./style.css";
import { ListItem } from '../ListItem';
import data from '../../data.js';

export const List = (selectedLocation, setSelectedLocation) => {

  // const filterByCategory = () => {
  //   if handleCheck 
  // }

  return (
    <div className="list">
      {data.map((place) =>
        <ListItem
          name={place.name}
          address={place.address}
          key={place.index}
          category={place.category}
          onClick={() => setSelectedLocation(place)}
        />)}
    </div>
  )
}