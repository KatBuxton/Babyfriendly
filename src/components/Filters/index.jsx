import React, { useState } from 'react';
import "./style.css";
import filters from './filters';
import { FilterItem } from '../FilterItem';


export const Filters = ({ selectedFilters, setSelectedFilters, setFiltersVisible, filteredItems }) => {


  const handleChange = (isChecked, item) => {
    if (isChecked) {
      setSelectedFilters(prevState =>
        [...prevState, item.name]
      );
    } else {
      setSelectedFilters((prevState) => prevState.filter(name => name !== item.name))
    }
  }

  return (
    <div className='filter-list'>
      <ul>
        <div className="group-name">Typ místa</div>
        {filters.category.map((item) =>
          <FilterItem
            name={item.name}
            text={item.text}
            id={item.id}
            key={item.id}
            handleChange={(isChecked) => handleChange(isChecked, item)} />
        )}
        <div className="group-name">Vybavení</div>
        {filters.equipment.map((item) =>
          <FilterItem
            name={item.name}
            text={item.text}
            id={item.id}
            key={item.id}
            handleChange={(isChecked) => handleChange(isChecked, item)} />
        )}
        <div className="group-name">Cena</div>
        {filters.price.map((item) =>
          <FilterItem
            name={item.name}
            text={item.text}
            id={item.id}
            key={item.id}
            handleChange={(isChecked) => handleChange(isChecked, item)} />
        )}
        <div className="group-name">Podle počasí</div>
        {filters.weather.map((item) =>
          <FilterItem
            name={item.name}
            text={item.text}
            id={item.id}
            key={item.id}
            handleChange={(isChecked) => handleChange(isChecked, item)} />
        )}
      </ul>
      <div className={filteredItems.length === 0 ? "filter-error" : "filter-error-hidden"}>Zkus upravit filtry</div>
      <button
        className={filteredItems.length === 0 ? "btn-filters btn-disabled" : "btn-filters"}
        onClick={() => setFiltersVisible(false)}>
        Aplikovat filtry</button>
    </div>
  )
}