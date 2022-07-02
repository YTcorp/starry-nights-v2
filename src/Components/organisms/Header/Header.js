import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useWindowSize } from "react-use";
import classnames from "classnames";
import {
  BiUserCircle as IconLogoUser,
  BiMenu as IconHamburger,
} from "react-icons/bi";

import menuConnected from "../../../assets/data/menuConnected.json";
import menuNotConnected from "../../../assets/data/menuNotConnected.json";
import menuHeaderNav from "../../../assets/data/menuHeaderNav.json";
import HeaderLogo from "../../atoms/LogoHeader/LogoHeader";
import SearchBar from "../../organisms/SearchBar/SearchBar";
import LiElement from "../../molecules/LiElement/LiElement";
import { logoutUser } from "../../../API/userService";
import { openMenu, closeMenu } from "../../../store/features/showSlice";

export default function Header() {
  const dispatch = useDispatch();
  const { isConnected } = useSelector((state) => state.login);
  const { isOpenMenu } = useSelector((state) => state.show);
  const { width } = useWindowSize();

  const [mediumLarge, setMediumLarge] = useState(false);
  const [miniLarge, setMiniLarge] = useState(false);
  useEffect(() => {
    if (width > 950) {
      setMediumLarge(false);
      setMiniLarge(false);
    } else if (width <= 950 && width > 500) {
      setMediumLarge(true);
      setMiniLarge(false);
    } else if (width <= 550) {
      setMediumLarge(false);
      setMiniLarge(true);
    }
  }, [width]);

  const toggleMenu = () => {
    isOpenMenu ? dispatch(closeMenu()) : dispatch(openMenu());
  };

  const dispatchCloseMenu = () => {
    dispatch(closeMenu());
  };
  const disconnectUser = async () => {
    dispatch(logoutUser());
  };

  const [searchOpen, setSearchOpen] = useState(false);
  const toggleSearchOpen = () => {
    setSearchOpen(!searchOpen);
  };
  const closeSearchOpen = () => {
    setSearchOpen(false);
  };

  return (
    <header className="Header">
      <div
        className={classnames("Container", {
          "Container-strech": mediumLarge || miniLarge,
        })}
      >
        <NavLink to="/">
          <HeaderLogo />
        </NavLink>

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
        <nav onClick={toggleMenu} className="Header-Menu">
          {mediumLarge || miniLarge ? (
            <IconHamburger className="Header-Menu-Toggle" />
          ) : (
            <IconLogoUser
              className={classnames("Header-Menu-Toggle", {
                "Header-Menu-Toggle__Connected": isConnected,
              })}
            />
          )}
          <ul
            className={classnames("Header-Menu-Container", {
              "Header-Menu-Container--opened": isOpenMenu,
            })}
          >
            {(mediumLarge || miniLarge) && (
              <LiElement
                data={menuHeaderNav[0]}
                funcMenu={closeMenu}
                customClass="Header-Menu-Item"
              />
            )}

            {!isConnected &&
              menuNotConnected.map((menu) => {
                return (
                  <LiElement
                    key={menu.id}
                    data={menu}
                    funcMenu={dispatchCloseMenu}
                  />
                );
              })}

            {isConnected &&
              menuConnected.map((menu) => {
                return (
                  <LiElement
                    key={menu.id}
                    data={menu}
                    funcMenu={
                      menu.code === "logout"
                        ? () => {
                            dispatchCloseMenu();
                            disconnectUser();
                          }
                        : dispatchCloseMenu
                    }
                  />
                );
              })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
