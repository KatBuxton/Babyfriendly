import React from 'react';
import filterIconUrl from '../../img/filter.svg';
import "./style.css";

export const FilterSwitch = ({ filtersVisible, setFiltersVisible }) => {

  return (
    <div className='container'>
      <div className="filter-switch"
        onClick={() => setFiltersVisible(true)}
      >
        <img src={filterIconUrl} alt="zobrazit filtry" />
      </div >
    </div>
  )

}