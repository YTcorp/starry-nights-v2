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

  const [mediumLarge, setMediumLarge] = useState(false);
  const [miniLarge, setMiniLarge] = useState(false);
  useEffect(() => {
    if (window.innerWidth > 950) {
      setMediumLarge(false);
      setMiniLarge(false);
    } else if (window.innerWidth <= 950 && window.innerWidth > 500) {
      setMediumLarge(true);
      setMiniLarge(false);
    } else if (window.innerWidth <= 550) {
      setMediumLarge(false);
      setMiniLarge(true);
    }

    const changeWidth = () => {
      if (headerContainer.offsetWidth > 950) {
        setMediumLarge(false);
        setMiniLarge(false);
      } else if (
        headerContainer.offsetWidth <= 950 &&
        headerContainer.offsetWidth > 550
      ) {
        setMediumLarge(true);
        setMiniLarge(false);
      } else if (headerContainer.offsetWidth <= 550) {
        setMediumLarge(false);
        setMiniLarge(true);
      }
    };

    let headerContainer = document.querySelector(".Header");

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  const [menuOpened, setMenuOpened] = useState(false);
  const toggleMenu = () => {
    setMenuOpened(!menuOpened);
  };
  const closeMenu = () => {
    setMenuOpened(false);
  };

  const [searchOpen, setSearchOpen] = useState(false);
  const toggleSearchOpen = () => {
    setSearchOpen(!searchOpen);
  };
  const closeSearchOpen = () => {
    setSearchOpen(false);
  };
  // jai besoin de passer onClick={closeMenu} a mes anchors non connectes ET connectes !!! ref ?

  return (
    <header className="Header">
      <div
        className={classnames("Container", {
          "Container-strech": mediumLarge || miniLarge,
        })}
      >
        <Anchor url="/" content={<HeaderLogo />} />

        {miniLarge ? (
          <SearchBar
            placeholder="&#xF002;"
            customClass={classnames("Input Input--dark", {
              "Strech-menu": !searchOpen,
            })}
            customStyle={{
              fontFamily: "Arial, FontAwesome",
            }}
            funcSearchToggle={!searchOpen ? toggleSearchOpen : () => undefined}
            funcSearchClose={closeSearchOpen}
          />
        ) : (
          <SearchBar
            placeholder="Orion, Andromède..."
            customClass="Input Input--dark"
          />
        )}

        {!mediumLarge && !miniLarge && (
          <nav className="Header-Nav">
            <ul>{<LiElement data={menuHeaderNav[0]} />}</ul>
          </nav>
        )}

        <nav className="Header-Menu">
          {mediumLarge || miniLarge ? (
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
            {mediumLarge && (
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
