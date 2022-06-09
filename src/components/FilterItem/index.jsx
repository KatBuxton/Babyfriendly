import React from 'react';

export const FilterItem = ({ name, text, id, handleChange, isChecked }) => {


  return (
    <>
      <label className="filter-item" >
        {text}
        < input
          type="checkbox"
          onChange={(e) => handleChange(e.target.checked)}
          checked={isChecked}
          value={name} />
        <span className='checkmark' key={id}></span>
      </label >
    </>
  )
}
