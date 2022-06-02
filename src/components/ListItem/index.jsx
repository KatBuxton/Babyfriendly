import React from 'react';
import "./style.css";

export const ListItem = ({ name, address, category, selectedLocation }) => {

  const styles = `${category} list-item`

  return (
    <div className={styles}>
      <div className="list-item__info">
        <div className="list-item__name">{name}</div>
        <div className="list-item__address">{address}</div>
      </div>
    </div>
  )
}