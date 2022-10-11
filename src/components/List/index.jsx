import React from 'react';
import './style.css';
import { ListItem } from '../ListItem';
import ReactGA from 'react-ga';

const eventTracker = (category, action, label) => {
  ReactGA.event({
    category: category,
    action: action,
    label: label,
  });
};

export const List = ({ filteredItems, setSelectedLocation, setListViewVisible }) => {
  const handleClick = (place) => {
    setSelectedLocation(place);
    setListViewVisible(false);
    eventTracker('List', 'list item clicked', `${place.name}`);
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
