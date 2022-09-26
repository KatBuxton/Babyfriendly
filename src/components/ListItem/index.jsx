import React from 'react';
import './style.css';

export const ListItem = ({ name, address, category, handleClick, preview }) => {
  return (
    <div
      onClick={handleClick}
      style={{ backgroundImage: `url("${preview}")` }}
      className={`${category} list-item`}
    >
      <div className="list-item__info">
        <div className="list-item__name">{name}</div>
        <div className="list-item__address">{address}</div>
      </div>
    </div>
  );
};
