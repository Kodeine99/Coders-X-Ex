import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class MenuWithIcon extends Component {
  render() {
    return (
      <div className="MenuWithIcon">

        <div className="page">
          <nav>
            <ul className="menuItems">
              <li><a href='#' data-item='Home'><FontAwesomeIcon icon='home' />Home</a></li>
              <li><a href='#' data-item='Deals'><FontAwesomeIcon icon='gift' />Deals</a></li>
              <li><a href='#' data-item='Uploads'><FontAwesomeIcon icon='cloud-upload-alt' />Uploads</a></li>
              <li><a href='#' data-item='Work'><FontAwesomeIcon icon='coffee' />Work</a></li>
              <li><a href='#' data-item='Settings'><FontAwesomeIcon icon='cog' />Settings</a></li>
            </ul>
          </nav>
        </div>
      </div>
    )
  };
}

export default MenuWithIcon;
