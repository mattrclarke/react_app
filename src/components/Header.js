import React, { Component } from 'react';
import '../css/Header.css'

class Header extends Component {
  render() {
    return(
      <div>
        <div className="MainHeading">
          <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect className="RectSvg" x="-122" y="27" width="54" height="2" transform="rotate(-45 0 0)" fill="#01D277"/>
            <rect className="RectSvg" x="-64" y="-32" width="40" height="2" transform="rotate(-45 0 0)" fill="#01D277"/>
            <rect className="RectSvg" x="-54" y="-40" width="30" height="2" transform="rotate(-45 0 0)" fill="#01D277"/>
            <rect className="RectSvg" x="90" y="90" width="30" height="2" rx="2" transform="rotate(-45 0 48.5513)" fill="#01D277"/>
            <rect className="RectSvg" x="82" y="99" width="43" height="2" rx="2" transform="rotate(-45 0 48.5513)" fill="#01D277"/>
            <rect className="RectSvg" y="179" x="59" width="70" height="2" rx="2" transform="rotate(-45 0 48.5513)" fill="#01D277"/>
          </svg>
          <img className="Logo" src="https://www.themoviedb.org/assets/2/v4/logos/primary-green-d70eebe18a5eb5b166d5c1ef0796715b8d1a2cbc698f96d311d62f894ae87085.svg" alt=""/>
        </div>
      </div>
    )
  }
}

export default Header;
