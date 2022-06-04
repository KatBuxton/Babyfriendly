import React, { useState } from 'react';
import filters from './filters';
import { FilterItem } from '../FilterItem';


export const Filters = () => {
  console.log("mounted")

  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleChange = (isChecked, item) => {
    if (isChecked) {
      setSelectedFilters(prevState =>
        [...prevState, item.id]
      );
    } else {
      setSelectedFilters((prevState) => prevState.filter(id => id !== item.id))
    }
  }
  console.log(selectedFilters)

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
            key={item.id} />
        )}
        <div className="group-name">Cena</div>
        {filters.price.map((item) =>
          <FilterItem
            name={item.name}
            text={item.text}
            id={item.id}
            key={item.id} />
        )}
        <div className="group-name">Podle počasí</div>
        {filters.weather.map((item) =>
          <FilterItem
            name={item.name}
            text={item.text}
            id={item.id}
            key={item.id} />
        )}
      </ul>
      <button className="btn-filters">Aplikovat filtry</button>
    </div>
  )
}