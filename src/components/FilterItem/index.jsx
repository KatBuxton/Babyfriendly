import React from 'react';
import "./style.css";

export const FilterItem = ({ name, text, id }) => {


  return (
    <>
      <label className="filter-item" >
        {text}
        < input type="checkbox" value={name} />
        <span className='checkmark' key={id}></span>
      </label >
    </>
  )
}
