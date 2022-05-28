import React, { useState } from 'react';
import "./style.css"
import { Logo } from '../Logo';
import { List } from '../List';
import { ViewSwitch } from '../ViewSwitch';

export const Column = () => {

  return (
    <div className="column">
      <Logo />
      <ViewSwitch />
      <List />
    </div>
  )
}