import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Toolbar.module.css';

const toolbar = (props) => (
  <div className={classes.Toolbar}>
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/posts">Add</NavLink>
      </li>
    </ul>
  </div>
);

export default toolbar;
