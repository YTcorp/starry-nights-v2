import React, { useState, useEffect } from "react";
import { filterName } from "../../../utils/filterName";
import { useDispatch, useSelector } from "react-redux";
import { fetchContentEntity } from "../../../API/entityService";
import { fetchConstellationNames } from "../../../API/constellationService";

export default function SearchBar({
  placeholder,
  customClass,
  customStyle,
  funcSearchToggle,
  funcSearchClose,
}) {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");
  const [constellations, setConstellations] = useState([]);
  const [searchNames, setSearchNames] = useState([]);

  const { loading, isSuccess, data, dataNames, errMssg } = useSelector(
    (state) => state.entity
  );
  useEffect(() => {
    dispatch(fetchContentEntity({ name: "constellation" }));
    dispatch(fetchConstellationNames({}));
    setSearchValue("");
  }, [dispatch]);

  useEffect(() => {
    if (isSuccess) {
      setConstellations(data);
      setSearchNames(dataNames);
    }
  }, [isSuccess, data, dataNames]);

  let options = [];
  console.log(searchNames, searchValue);
  console.log(searchNames.length, searchValue.length);
  if (searchNames.length > 0 && searchValue.length > 0) {
    console.log("all ok");
    options = searchNames.filter((option) => {
      console.log(option);
      return filterName(option.name).includes(filterName(searchValue));
    });
  }
  console.log("options", options);

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
