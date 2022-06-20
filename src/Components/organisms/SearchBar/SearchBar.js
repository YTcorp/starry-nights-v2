import React, { useState, useEffect } from "react";
import { filterName } from "../../../utils/filterName";
import { useDispatch, useSelector } from "react-redux";
import { fetchConstellations } from "../../../API/constellationService";
// import { fetchConstellationsNames } from "../../../API/constellationService";
import { fetchUserFavoritesConstellations } from "../../../API/userService";
import { setModalContent } from "../../../store/features/modalSlice";

export default function SearchBar({
  placeholder,
  customClass,
  customStyle,
  funcSearchToggle,
  funcSearchClose,
}) {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");
  const { constellations } = useSelector((state) => state.constellation);
  const { favConstellations } = useSelector((state) => state.userData);
  const isConnected = localStorage.getItem("userConnected");
  useEffect(() => {
    dispatch(fetchConstellations({}));
    // dispatch(fetchConstellationsNames({}));
    if (isConnected) {
      dispatch(fetchUserFavoritesConstellations({}));
    }
    setSearchValue("");
  }, [dispatch, isConnected]);

  let submenus = [];
  if (constellations.length > 0 && searchValue.length > 0) {
    submenus = constellations.filter((submenu) => {
      return filterName(submenu.name).includes(filterName(searchValue));
    });
  }

  const handleFavConstellation = (data) => {
    const isFav = favConstellations.find((favorite) => favorite.id === data.id)
      ? true
      : false;
    const foundConstellation = { ...data, favorite: isFav };
    dispatch(setModalContent(foundConstellation));
  };

  const stopDefault = (event) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={stopDefault}>
      <label className="Header-Search" htmlFor="header-search">
        <input
          autoComplete="off"
          title="Recherchez une constellation par son nom"
          className={customClass}
          id="header-search"
          placeholder={placeholder}
          style={customStyle && customStyle}
          value={searchValue}
          onChange={({ target }) => setSearchValue(target.value)}
          onClick={funcSearchToggle && (() => funcSearchToggle())}
          onBlur={funcSearchClose && (() => funcSearchClose())}
        />
        {searchValue.length > 0 && (
          <ul className="Header-Search-Options">
            {constellations &&
              submenus.map((submenu, index) => (
                <li
                  className="Header-Search-Option"
                  key={`Header-Search-Option--${submenu.name}--${index}`}
                  onClick={() => {
                    setSearchValue("");
                    handleFavConstellation(submenu);
                  }}
                >
                  {submenu.name}
                </li>
              ))}
          </ul>
        )}
      </label>
    </form>
  );
}
