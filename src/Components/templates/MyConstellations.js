import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BiTrash } from "react-icons/bi";
import { isEmpty } from "lodash";

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

  function deleteFavConstellation(id) {
    dispatch(deleteUserFavoriteConstellation({ id: id }));
    dispatch(fetchUserFavoritesConstellations());
  }

  return (
    <main className="Main MyConstellations">
      <h1 className="Title Page-Title">Mes Constellations</h1>
      <div className="Block myconstellation">
        {isEmpty(favConstellations) ? (
          <h2 className="Subtitle">Pas de constellations encore !</h2>
        ) : (
          <>
            <div className="myconstellation-container">
              <h2 className="myconstellation-title">Ouvrir</h2>
              <h2 className="myconstellation-title">Effacer</h2>
              {favLoading && <Spinner />}
              {favConstellations.map((favConstellation) => {
                return (
                  <div
                    className="myconstellation-inner-container"
                    key={`key-${favConstellation.id}`}
                  >
                    <LiElement
                      key={`myconstellation-${favConstellation.id}`}
                      customClass="myconstellation-element"
                      data={favConstellation}
                    />
                    <BiTrash
                      key={`myconstellation-icon-${favConstellation.id}`}
                      className="myconstellation-icon"
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
