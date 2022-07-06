import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import isEmpty from "lodash/isEmpty";
import { BiTrash, BiEditAlt } from "react-icons/bi";

import Spinner from "../../atoms/Spinner/Spinner";
import LiElement from "../LiElement/LiElement";
import { AiOutlineCloseCircle as CloseIcon } from "react-icons/ai";
import { getAllFavPlaces, deleteFavoritePlace } from "../../../API/userService";
import { setLocation } from "../../../store/features/addressSlice";
import { setModalContent } from "../../../store/features/showSlice";

export default function CardMyPlaces({ modal, funcClose }) {
  const dispatch = useDispatch();
  const { favPlaces, favPlaceLoading, errPlace } = useSelector(
    (state) => state.userData
  );
  const [flush, setFlush] = useState(false);

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

  function editFavPlace(favPlace) {
    dispatch(setModalContent(null));
    dispatch(setModalContent(favPlace));
  }

  function displayPlace(favPlace) {
    dispatch(
      setLocation({
        latitude: favPlace.latitude,
        longitude: favPlace.longitude,
      })
    );
  }

  return (
    <>
      {modal && (
        <CloseIcon
          className="Detail-Block-Modal-Close"
          onClick={() => funcClose()}
        />
      )}
      {isEmpty(favPlaces) ? (
        <h2 className="Subtitle">Pas d'endroits enregistrés encore !</h2>
      ) : (
        <>
          <div className="myplaces-container">
            {!isEmpty(errPlace) && <p className="Error">{errPlace}</p>}
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
                    anchor="/#celestial-map"
                    onClick={() => {
                      funcClose();
                      displayPlace(favPlace);
                    }}
                  />
                  <BiEditAlt
                    key={`myplaces-edit-icon-${favPlace.id}`}
                    className="myplaces-icon"
                    onClick={() => editFavPlace(favPlace)}
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
    </>
  );
}
