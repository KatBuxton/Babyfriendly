import React from 'react';
import "./style.css";

export const ListItem = ({ name, address, category, handleClick }) => {

  const styles = `${category} list-item`

  return (
    <div
      className={styles}
      onClick={handleClick}
    >
      <div className="list-item__info">
        <div className="list-item__name">{name}</div>
        <div className="list-item__address">{address}</div>
      </div>
    </div>
  )
}