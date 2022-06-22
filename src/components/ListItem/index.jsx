import React from 'react';
import './style.css';

export const ListItem = ({ name, address, category, handleClick, preview }) => {
  const styles = `${category} list-item`;

  return (
    <div className={styles} onClick={handleClick} style={{ backgroundImage: `url(${preview})` }}>
      <div className="list-item__info">
        <div className="list-item__name">{name}</div>
        <div className="list-item__address">{address}</div>
      </div>
    </div>
  );
};
