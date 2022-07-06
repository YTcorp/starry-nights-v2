import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BiTrash } from "react-icons/bi";
import isEmpty from "lodash/isEmpty";

import LiElement from "../molecules/LiElement/LiElement";
import Spinner from "../atoms/Spinner/Spinner";
import {
  deleteUserFavoriteConstellation,
  fetchUserFavoritesConstellations,
} from "../../API/userService";

export default function MyConstellations() {
  const dispatch = useDispatch();
  const { favConstellations, favLoading } = useSelector(
    (state) => state.userData
  );
  const [flush, setFlush] = useState(false);

  useEffect(() => {
    if (flush) {
      dispatch(fetchUserFavoritesConstellations());
      setFlush(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [flush]);

  function deleteFavConstellation(id) {
    dispatch(deleteUserFavoriteConstellation({ id: id }));
    setFlush(true);
  }

  return (
    <main className="Main">
      <h1 className="Title Page-Title">Mes Constellations</h1>
      <div className="Block myconstellations">
        {isEmpty(favConstellations) ? (
          <h2 className="Subtitle">Pas de constellations encore !</h2>
        ) : (
          <>
            <div className="myconstellations-container">
              <h2 className="myconstellations-title">Ouvrir</h2>
              <h2 className="myconstellations-title">Effacer</h2>
              {favLoading && <Spinner />}
              {favConstellations.map((favConstellation) => {
                return (
                  <div
                    className="myconstellations-inner-container"
                    key={`key-${favConstellation.id}`}
                  >
                    <LiElement
                      key={`myconstellations-${favConstellation.id}`}
                      customClass="myconstellations-element"
                      data={favConstellation}
                    />
                    <BiTrash
                      key={`myconstellations-icon-${favConstellation.id}`}
                      className="myconstellations-icon"
                      onClick={() =>
                        deleteFavConstellation(favConstellation.id)
                      }
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
