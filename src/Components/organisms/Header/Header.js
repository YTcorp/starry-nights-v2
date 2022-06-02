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
  // je vais gerer ça avec des contexts ??????

  const [headerWidth, setheaderWidth] = useState(window.innerWidth);
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

  const [searchOpen, setSearchOpen] = useState(false);
  const toggleSearchOpen = () => {
    setSearchOpen(!searchOpen);
  };
  const closeSearchOpen = () => {
    setSearchOpen(false);
  };

  const [menuOpened, setMenuOpened] = useState(false);
  const toggleMenu = () => {
    console.log("toggeled", menuOpened);
    setMenuOpened(!menuOpened);
  };
  const closeMenu = () => {
    console.log("closed !", menuOpened);
    setMenuOpened(false);
  };

  console.log(headerWidth, searchOpen, menuOpened);
  // jai besoin de passer  onClick={closeMenu} a mes anchors non connectes ET connectes !!! ref ?

  return (
    <header className="Header">
      <div
        className={classnames("Container", {
          "Container-strech": headerWidth < 950,
        })}
      >
        {/* A partir de 430, faire logo responsive */}
        <Anchor url="/" content={<HeaderLogo />} />

        {headerWidth < 500 ? (
          <SearchBar
            placeholder="&#xF002;"
            customClass={classnames("Input Input--dark", {
              "Strech-menu": !searchOpen,
            })}
            customStyle={{
              fontFamily: "Arial, FontAwesome",
            }}
            funcSearchToggle={toggleSearchOpen}
            funcSearchClose={closeSearchOpen}
          />
        ) : (
          <SearchBar
            placeholder="Orion, Andromède..."
            customClass="Input Input--dark"
          />
        )}

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
            {headerWidth < 950 && (
              <LiElement
                data={menuHeaderNav[0]}
                funcMenuClose={closeMenu}
                customClass="Header-Menu-Item"
              />
            )}

            {menuNotConnected.map((menu) => {
              return (
                <LiElement
                  key={menu.id}
                  data={menu}
                  funcMenuClose={closeMenu}
                />
              );
            })}

            {/* il me faut paser methode disconnectUser() au menu Se deconnecter */}
            {menuConnected.map((menu) => {
              return (
                <LiElement
                  key={menu.id}
                  data={menu}
                  funcMenuClose={closeMenu}
                />
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
