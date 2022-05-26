import React, { useState } from 'react';
import "./style.css";

export const ListItem = () => {

  return (
    <div className="list-item">
      <div className="list-item__info">
        <h2>Nazev mista</h2>
        <h3>Ulice cislo popisne, mesto, PSC</h3>
      </div>
    </div>
  )
}