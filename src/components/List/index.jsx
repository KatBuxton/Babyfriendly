import React from 'react';
import './style.css';
import { ListItem } from '../ListItem';

export const List = ({ filteredItems, setSelectedLocation, setListViewVisible }) => {
  const handleClick = (place) => {
    setSelectedLocation(place);
    setListViewVisible(false);
  };

  return (
    <div className="list">
      {filteredItems.map((place) => (
        <ListItem
          name={place.name}
          address={place.address}
          key={place.index}
          category={place.category}
          preview={place.preview}
          handleClick={() => handleClick(place)}
        />
      ))}
    </div>
  );
};
