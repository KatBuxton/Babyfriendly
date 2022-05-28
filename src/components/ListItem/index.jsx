import React, { useState } from 'react';
import "./style.css";

export const ListItem = ({ name, address }) => {

  return (
    <div className="list-item">
      <div className="list-item__info">
        <h2>{name}</h2>
        <h3>{address}</h3>
      </div>
    </div>
  )
}