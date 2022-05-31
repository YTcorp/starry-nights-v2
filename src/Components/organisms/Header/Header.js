import React, { useState, useEffect } from "react";
import Anchor from "../../atoms/Anchor/Anchor";
import HeaderLogo from "../../atoms/LogoHeader/LogoHeader";
import SearchBar from "../../organisms/SearchBar/SearchBar";
import classnames from "classnames";
import {
  BiUserCircle as MenuLogoUser,
  BiMenu as MenuMobile,
} from "react-icons/bi";
import LiElement from "../../molecules/LiElement/LiElement";
import menuConnected from "../../../assets/data/menuConnected.json";
import menuNotConnected from "../../../assets/data/menuNotConnected.json";
import menuHeaderNav from "../../../assets/data/menuHeaderNav.json";

export default function Header() {
  //   const { isConnected, disconnectUser } = useContext(authContext);
  const [menuOpened, setMenuOpened] = useState(false);
  const [headerWidth, setheaderWidth] = useState(window.innerWidth);

  const toggleMenu = () => {
    setMenuOpened(!menuOpened);
  };

  // const closeMenu = () => {
  //   setMenuOpened(false);
  // };

  useEffect(() => {
    const changeWidth = () => {
      setheaderWidth(headerContainer.offsetWidth);
    };

    let headerContainer = document.querySelector(".Header");

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  console.log(headerWidth);

  return (
    <header className="Header">
      <div
        className={
          headerWidth < 950 ? "Container Container-strech" : "Container"
        }
      >
        <Anchor url="/" content={<HeaderLogo />} />
        <SearchBar />

        {headerWidth > 950 && (
          <nav className="Header-Nav">
            <ul>{<LiElement data={menuHeaderNav[0]} />}</ul>
          </nav>
        )}

        <nav className="Header-Menu">
          {headerWidth < 950 ? (
            <MenuMobile onClick={toggleMenu} className="Header-Menu-Toggle" />
          ) : (
            <MenuLogoUser
              className="Header-Menu-Toggle"
              //   className={
              //     isConnected ? "Header-Menu-Toggle Connected" : "Header-Menu-Toggle"
              //   }
              onClick={toggleMenu}
            />
          )}

          <ul
            className={classnames("Header-Menu-Container", {
              "Header-Menu-Container--opened": menuOpened,
            })}
          >
            {headerWidth < 950 && <LiElement data={menuHeaderNav[0]} />}

            {menuNotConnected.map((menu) => {
              return <LiElement key={menu.id} data={menu} />;
            })}

            {menuConnected.map((menu) => {
              return <LiElement key={menu.id} data={menu} />;
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
// jai besoin de passer  onClick={closeMenu} a mes anchors non connectes ET connectes !!! ref ?
// il me faut paser methode disconnectUser() au menu Se deconnecter
