import React from 'react';
import filterIconUrl from '../../img/filter.svg';
import closeIconUrl from '../../img/close.svg';
import './style.css';
import ReactGA from 'react-ga';

const eventTracker = (category, action, label) => {
  ReactGA.event({
    category: category,
    action: action,
    label: label,
  });
};

export const FilterSwitch = ({ filtersVisible, setFiltersVisible }) => {
  return (
    <div className="wrapper-fs">
      <div
        className="filter-switch"
        onClick={() => {
          setFiltersVisible(!filtersVisible);
          eventTracker('FilterSwitch', 'filter switch clicked', `${filtersVisible}`);
        }}
      >
        <img
          src={filtersVisible === true ? closeIconUrl : filterIconUrl}
          alt={filtersVisible === true ? 'skrýt filtry' : 'zobrazit filtry'}
        />
      </div>
    </div>
  );
};
