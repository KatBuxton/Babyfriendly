import React, { useState } from 'react';
import mapIconUrl from '/Users/katerina.tuckova/Desktop/daweb/babyfriendly/src/img/map.svg';
import listIconUrl from '/Users/katerina.tuckova/Desktop/daweb/babyfriendly/src/img/list.svg';


export const ViewSwitch = () => {
  const [listView, setListView] = useState(false)

  return (
    <div
      onClick={() => { listView === true ? setListView(false) : setListView(true) }}
      className="view-switch">
      <img src={listView === true ? mapIconUrl : listIconUrl} />
    </div>
  )

}