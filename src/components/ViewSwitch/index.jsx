import React from 'react';
import mapIconUrl from '../../img/map.svg';
import listIconUrl from '../../img/list.svg';
import "./style.css";


export const ViewSwitch = ({ listViewVisible, setListViewVisible }) => {

  return (
    <div className='container'>
      <div className="view-switch"
        onClick={() => setListViewVisible(!listViewVisible)}
      >
        <img src={listViewVisible === true ? mapIconUrl : listIconUrl} alt={listViewVisible === true ? "ikona seznamu" : "ikona mapy"} />
      </div >
    </div>
  )
}

