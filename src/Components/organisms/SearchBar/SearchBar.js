import React, { useState, useEffect } from "react";
import { filterName } from "../../../utils/filterName";
import { useDispatch, useSelector } from "react-redux";
import { fetchConstellations } from "../../../API/constellationService";
import { fetchConstellationsNames } from "../../../API/constellationService";
import { fetchUserConstellations } from "../../../API/userService";

export default function SearchBar({
  placeholder,
  customClass,
  customStyle,
  funcSearchToggle,
  funcSearchClose,
}) {
  const { constellations, constellationsNames } = useSelector(
    (state) => state.constellation
  );
  const { favConstellations } = useSelector((state) => state.userData);
  const { isConnected } = useSelector((state) => state.login);

  const [searchValue, setSearchValue] = useState("");
  const [modalOpen, setModalOpen] = useState(null);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchConstellations({}));
    dispatch(fetchConstellationsNames({}));
    if (isConnected) {
      dispatch(fetchUserConstellations({}));
    }
    setSearchValue("");
  }, [dispatch, isConnected]);

  let submenus = [];
  if (constellationsNames.length > 0 && searchValue.length > 0) {
    submenus = constellationsNames.filter((submenu) => {
      return filterName(submenu.name).includes(filterName(searchValue));
    });
  }

  const handleFavConstellation = (submenuId) => {
    const foundConstellation = constellations.find(
      (constellation) => constellation.id === submenuId
    );
    const isFav = favConstellations.find(
      (favorite) => favorite.id === submenuId
    )
      ? true
      : false;
    const pickedConstellation = {
      ...foundConstellation,
      favorite: isFav,
    };
    setModalOpen(pickedConstellation);
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
            {submenus.map((submenu, index) => (
              <li
                className="Header-Search-Option"
                key={`Header-Search-Option--${submenu.name}--${index}`}
                onClick={() => {
                  setSearchValue("");
                  handleFavConstellation(submenu.id);
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
