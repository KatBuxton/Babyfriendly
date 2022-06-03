import React, { useState } from 'react';
import "./style.css";
import filters from './filters';

export const Filters = () => {
  const [handleCheck, setHandleCheck] = useState()



  return (
    <>
      <div className='filter-list'>
        <ul>
          <div className="group-name">Typ místa</div>
          {filters[0].category.map((c) => {
            return (
              <label className="filter-item">
                {c.text}
                <input type="checkbox" value={c.name} />
                <span className='checkmark' id={c.id}></span>
              </label>
            )
          })}
          <div className="group-name">Vybavení</div>
          {filters[0].equipment.map((c) => {
            return (
              <label className="filter-item">
                {c.text}
                <input type="checkbox" value={c.name} />
                <span className='checkmark' id={c.id}></span>
              </label>
            )
          })}
          <div className="group-name">Cena</div>
          {filters[0].price.map((c) => {
            return (
              <label className="filter-item">
                {c.text}
                <input type="checkbox" value={c.name} />
                <span className='checkmark' id={c.id}></span>
              </label>
            )
          })}
          <div className="group-name">Podle počasí</div>
          {filters[0].weather.map((c) => {
            return (
              <label className="filter-item">
                {c.text}
                <input type="checkbox" value={c.name} />
                <span className='checkmark' id={c.id}></span>
              </label>
            )
          })}
        </ul>
        <button className="btn-filters">Aplikovat filtry</button>
      </div>
    </>
  )
}