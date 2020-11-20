import React from 'react';

const NavigationMenu = () => {
  return (
    <div className="nav-bar">
      <ul>
        <li className="active">
          <a href="#">Our Story</a>
        </li>
        <li>
          <span>|</span>
        </li>
        <li>
          <a href="#">Our Wedding Party</a>
        </li>
        <li>
          <span>|</span>
        </li>
        <li>
          <a href="#">Gift Registry</a>
        </li>
        <li>
          <span>|</span>
        </li>
        <li>
          <a href="#">Wedding Day Information</a>
        </li>
        <li>
          <span>|</span>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
      </ul>
    </div>
  );
}

export default NavigationMenu;