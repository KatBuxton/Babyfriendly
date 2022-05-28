import React, { useState } from 'react';
import mapIconUrl from '../../img/map.svg';
import listIconUrl from '../../img/list.svg';
import "./style.css";


export const ViewSwitch = () => {
  const [listView, setListView] = useState(false)

  return (
    <div
      className="view-switch"
      onClick={() => listView === true ? setListView(false) : setListView(true)}
    >
      <img src={listView === true ? mapIconUrl : listIconUrl} alt={listView === true ? "ikona seznamu" : "ikona mapy"} />
    </div >
  )
}

