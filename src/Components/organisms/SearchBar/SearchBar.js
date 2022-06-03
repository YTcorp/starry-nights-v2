import React, { useState } from "react";
// import { filterName } from "../../../utils/filterName";

export default function SearchBar({
  placeholder,
  customClass,
  customStyle,
  funcSearchToggle,
  funcSearchClose,
}) {
  const [searchValue, setSearchValue] = useState("");
  // const [searchOptions, setSearchOptions] = useState([]);
  // const [constellations, setConstellations] = useState([]);

  // const closeMenu = () => {
  //   setMenuOpened(false);
  // };
  const stopDefault = (event) => {
    event.preventDefault();
    // setSearchBarOpen(true);
  };

  let options = [];

  // if (searchOptions.length > 0 && searchValue.length > 0) {
  //   options = searchOptions.filter((option) =>
  //     filterName(option.name).includes(filterName(searchValue))
  //   );
  // }

  //   const handleFavConstellation = (optionId) => {
  //     const foundConst = constellations.find(
  //       (constellation) => constellation.id === optionId
  //     );
  //     const isFav = favoriteList.find((favorite) => favorite.id === optionId)
  //       ? true
  //       : false;
  //     const decoratedConstellation = {
  //       ...foundConst,
  //       favorite: isFav,
  //     };
  //     setOpenedConstellation(decoratedConstellation);
  //   };

  console.log(customClass);
  console.log(customClass.includes("Strech-menu"));

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
            {options.map((option, index) => (
              <li
                className="Header-Search-Option"
                key={`Header-Search-Option--${option.name}--${index}`}
                onClick={() => {
                  setSearchValue("");
                  //   handleFavConstellation(option.id);
                }}
              >
                {option.name}
              </li>
            ))}
          </ul>
        )}
      </label>
    </form>
  );
}
