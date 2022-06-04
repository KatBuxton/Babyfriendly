import React, { useState } from 'react';
import "./style.css";
import { ListItem } from '../ListItem';

export const List = ({ filteredItems, setSelectedLocation }) => {

  const handleClick = (place) => {
    setSelectedLocation(place)
  }

  return (
    <div className="list">
      {filteredItems.map((place) =>
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

