import React, { useState } from "react";
import classnames from "classnames";
// import { BiUserCircle as MenuLogoUser } from "react-icons/bi";
import LiElement from "../LiElement/LiElement";
import menuConnected from "../../../assets/data/menuConnected.json";
import menuNotConnected from "../../../assets/data/menuNotConnected.json";
import menuHeaderNav from "../../../assets/data/menuHeaderNav.json";

export default function HeaderRight() {
  //   const { isConnected, disconnectUser } = useContext(authContext);
  const [menuOpened, setMenuOpened] = useState(false);

  const toggleMenu = () => {
    setMenuOpened(!menuOpened);
  };
  // const closeMenu = () => {
  //   setMenuOpened(false);
  // };

  return (
    <div className="Header-Right">
      <nav className="Header-Nav">
        <ul>{<LiElement data={menuHeaderNav[0]} />}</ul>
      </nav>
      <nav className="Header-Nav">
        <ul
          className={classnames("Header-Menu-Container", {
            "Header-Menu-Container--opened": menuOpened,
          })}
        >
          {/* <MenuLogoUser
            //   className={
            //     isConnected ? "Header-Menu-Toggle Connected" : "Header-Menu-Toggle"
            //   }
            onClick={toggleMenu}
          /> */}
          {menuNotConnected.map((menu) => {
            return <LiElement key={menu.id} data={menu} />;
          })}
          {menuConnected.map((menu) => {
            return <LiElement key={menu.id} data={menu} />;
          })}
        </ul>
      </nav>
    </div>
  );
}
// jai besoin de passer  onClick={closeMenu} a mes anchors non connectes ET connectes !!! ref ?
// il me faut paser methode disconnectUser() au menu Se deconnecter
