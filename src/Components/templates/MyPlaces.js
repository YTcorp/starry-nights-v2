import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BiTrash } from "react-icons/bi";
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
    <main className="Main MyConstellations">
      <h1 className="Title Page-Title">Mes Lieux Préférés</h1>
      <div className="Block myconstellation">
        {isEmpty(favPlaces) ? (
          <h2 className="Subtitle">Pas de constellations encore !</h2>
        ) : (
          <>
            <div className="myconstellation-container">
              <h2 className="myconstellation-title">Ouvrir</h2>
              <h2 className="myconstellation-title">Effacer</h2>
              {favPlaceLoading && <Spinner />}
              {favPlaces.map((favPlace) => {
                return (
                  <div
                    className="myconstellation-inner-container"
                    key={`key-${favPlace.id}`}
                  >
                    <LiElement
                      key={`myconstellation-${favPlace.id}`}
                      customClass="myconstellation-element"
                      data={favPlace}
                    />
                    <BiTrash
                      key={`myconstellation-icon-${favPlace.id}`}
                      className="myconstellation-icon"
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
