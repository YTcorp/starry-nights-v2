import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BiTrash, BiEditAlt } from "react-icons/bi";
import { isEmpty } from "lodash";

import LiElement from "../molecules/LiElement/LiElement";
import Spinner from "../atoms/Spinner/Spinner";
import { getAllFavPlaces, deleteFavoritePlace } from "../../API/userService";

export default function MyPlaces() {
  const { favPlaces, favPlaceLoading } = useSelector((state) => state.userData);
  const [flush, setFlush] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllFavPlaces());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (flush) {
      dispatch(getAllFavPlaces());
      setFlush(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [flush]);

  function deleteFavPlace(id) {
    dispatch(deleteFavoritePlace({ id: id }));
    setFlush(true);
  }

  return (
    <main className="Main">
      <h1 className="Title Page-Title">Mes Lieux Préférés</h1>
      <div className="Block myplaces">
        {isEmpty(favPlaces) ? (
          <h2 className="Subtitle">Pas de constellations encore !</h2>
        ) : (
          <>
            <div className="myplaces-container">
              <h2 className="myplaces-title">Ouvrir sur la carte</h2>
              <h2 className="myplaces-title">Éditer</h2>
              <h2 className="myplaces-title">Effacer</h2>
              {favPlaceLoading && <Spinner />}
              {favPlaces.map((favPlace) => {
                return (
                  <div
                    className="myplaces-inner-container"
                    key={`key-${favPlace.id}`}
                  >
                    <LiElement
                      key={`myplaces-${favPlace.id}`}
                      customClass="myplaces-element"
                      data={favPlace}
                    />
                    <BiEditAlt
                      key={`myplaces-edit-icon-${favPlace.id}`}
                      className="myplaces-icon"
                    />
                    <BiTrash
                      key={`myplaces-trash-icon-${favPlace.id}`}
                      className="myplaces-icon"
                      onClick={() => deleteFavPlace(favPlace.id)}
                    />
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </main>
  );
}
