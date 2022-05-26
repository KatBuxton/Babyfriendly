import React, { useState } from 'react';
import "./style.css";
import { ListItem } from '../ListItem';

export const List = () => {

  return (
    <div className="list">
      {<ListItem />}
      {<ListItem />}
      {<ListItem />}
      {<ListItem />}
    </div>
  )
}