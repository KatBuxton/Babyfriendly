import React from 'react';
import "./style.css";
import filters from './filters';

export const Filters = () => {
  return (
    <div className='filter-list'>
      <ul>
        {filters.map((c) => {
          return (
            <label class="filter-item">
              {c.text}
              <input type="checkbox" />
              <span className='checkmark'></span>
            </label>
          )
        })}
      </ul>
    </div>
  )
}