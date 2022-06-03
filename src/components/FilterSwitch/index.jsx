import React from 'react';
import filterIconUrl from '../../img/filter.svg';
import closeIconUrl from '../../img/close.svg';
import "./style.css";

export const FilterSwitch = ({ filtersVisible, setFiltersVisible }) => {

  return (
    <div className='wrapper-fs'>
      <div className="filter-switch"
        onClick={() => setFiltersVisible(!filtersVisible)}
      >
        <img src={filtersVisible === true ? closeIconUrl : filterIconUrl} alt={filtersVisible === true ? "skrýt filtry" : "zobrazit filtry"} />
      </div >
    </div>
  )

}