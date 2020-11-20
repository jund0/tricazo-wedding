import React from 'react';
import NavigationMenu from "./NavigationMenu";

const Navigation = () => {
  return (
    <nav className="menu-container">
      <NavigationMenu />
      <div id="menu-icon">
        <img src="/images/succulent-nav.png" className="img-responsive" />
      </div>
    </nav>
  );
}

export default Navigation;