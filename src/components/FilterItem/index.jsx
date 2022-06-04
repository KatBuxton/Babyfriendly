import React from 'react';
import "./style.css";

export const FilterItem = ({ name, text, id, handleChange }) => {


  return (
    <>
      <label className="filter-item" >
        {text}
        < input type="checkbox"
          onChange={(e) => handleChange(e.target.checked)}
          value={name} />
        <span className='checkmark' key={id}></span>
      </label >
    </>
  )
}
