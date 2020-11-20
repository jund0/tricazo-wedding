import React from 'react';
import NavigationMenu from "./NavigationMenu";
import useHover from "../hooks/Hover";

const Navigation = () => {
  const [hoverRef, isHovered] = useHover();

  return (

    <nav ref={hoverRef} className={isHovered ? 'menu-container open' : 'menu-container'}>
      <NavigationMenu />
      <div id="menu-icon">
        <img src="/images/succulent-nav.png" className="img-responsive" />
      </div>
    </nav>

  );
}

export default Navigation;