import React, { useState, useEffect } from "react";
import { filterName } from "../../../utils/filterName";
import { useDispatch, useSelector } from "react-redux";
import { fetchConstellations } from "../../../API/constellationService";
import LiElement from "../../molecules/LiElement/LiElement";

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
  const isConnected = localStorage.getItem("userConnected");
  useEffect(() => {
    dispatch(fetchConstellations({}));
    setSearchValue("");
  }, [dispatch, isConnected]);

  let submenus = [];
  if (constellations.length > 0 && searchValue.length > 0) {
    submenus = constellations.filter((submenu) => {
      return filterName(submenu.name).includes(filterName(searchValue));
    });
  }

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
                <LiElement
                  customClass="Header-Search-Option"
                  key={`Header-Search-Option--${submenu.name}--${index}`}
                  data={submenu}
                  funcMenu={() => setSearchValue("")}
                ></LiElement>
              ))}
          </ul>
        )}
      </label>
    </form>
  );
}
