import React from 'react';
import "./style.css";
import filters from './filters';
import { FilterItem } from '../FilterItem';


export const Filters = ({ setSelectedFilters, setFiltersVisible, filteredItems, setSelectedLocation, selectedFilters }) => {


  const handleChange = (isChecked, item) => {
    if (isChecked) {
      setSelectedFilters(prevState =>
        [...prevState, item.name]
      );
      setSelectedLocation(null);
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
            isChecked={selectedFilters.includes(item.name)}
            handleChange={(isChecked) => handleChange(isChecked, item)
            } />
        )}
        <div className="group-name">Vybavení</div>
        {filters.equipment.map((item) =>
          <FilterItem
            name={item.name}
            text={item.text}
            id={item.id}
            key={item.id}
            isChecked={selectedFilters.includes(item.name)}
            handleChange={(isChecked) => handleChange(isChecked, item)} />
        )}
        {/* <div className="group-name">Cena</div>
        {filters.price.map((item) =>
          <FilterItem
            name={item.name}
            text={item.text}
            id={item.id}
            key={item.id}
            handleChange={(isChecked) => handleChange(isChecked, item)} />
        )} */}
        <div className="group-name">Podle počasí</div>
        {filters.weather.map((item) =>
          <FilterItem
            name={item.name}
            text={item.text}
            id={item.id}
            key={item.id}
            isChecked={selectedFilters.includes(item.name)}
            handleChange={(isChecked) => handleChange(isChecked, item)} />
        )}
        {filteredItems.length === 0
          ? <div className="filter-error">Zkus upravit filtry</div>
          : <></>}
      </ul>
      <div className='filter-btns-wrapper'>
        {filteredItems.length === 0
          ? <button
            className="btn-filters btn-disabled"
            disabled>
            Zkus upravit filtry</button>
          : <button
            className="btn-filters"
            onClick={() => setFiltersVisible(false)}>
            Aplikovat filtry
          </button>}
        <button
          className="btn-filters btn-secondary"
          onClick={() => {
            setFiltersVisible(false)
            setSelectedFilters([])
          }}>
          Vymazat filtry
        </button>
      </div>
    </div>
  )
}