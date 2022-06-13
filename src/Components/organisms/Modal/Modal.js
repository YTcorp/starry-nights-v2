import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";
import { cloneDeep } from "lodash";
import {
  AiOutlineCloseCircle as CloseIcon,
  AiFillHeart as FullHeart,
  AiOutlineHeart as EmptyHeart,
} from "react-icons/ai";

import { baseURL } from "../../../utils/axios";
import Anchor from "../../atoms/Anchor/Anchor";
import Title from "../../atoms/Title/Title";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import {
  postUserFavoriteConstellation,
  deleteUserFavoriteConstellation,
} from "../../../API/userService";
import { setModalContent } from "../../../store/features/modalSlice";
import { setFavoritesConstellations } from "../../../store/features/userDataSlice";

export default function Modal() {
  const dispatch = useDispatch();
  const isConnected = localStorage.getItem("userConnected");
  const { favConstellations } = useSelector((state) => state.userData);
  const [isOpened, setIsOpened] = useState(false);
  const [isOpenedFavorite, setIsOpenedFavorite] = useState(false);
  const { dataModal } = useSelector((state) => state.modal);
  useEffect(() => {
    if (dataModal && Object.keys(dataModal).length > 1) {
      setIsOpenedFavorite(dataModal.favorite);

      setTimeout(() => {
        setIsOpened(true);
      }, 200);
    }
  }, [dataModal]);

  if (dataModal === null || dataModal.length === 0) {
    document.querySelector("html").classList.remove("no-scroll");
    return null;
  }
  document.querySelector("html").classList.add("no-scroll");

  const handleFavs = () => {
    const favoritesConstellationsCopy = cloneDeep(favConstellations);

    if (isOpenedFavorite) {
      const restFromFavorites = favoritesConstellationsCopy.filter(
        (each) => each.name !== dataModal.name
      );
      dispatch(setFavoritesConstellations(restFromFavorites));
      dispatch(deleteUserFavoriteConstellation({ id: dataModal.id }));
      setIsOpenedFavorite(!isOpenedFavorite);
    } else {
      favoritesConstellationsCopy.push(dataModal);
      dispatch(setFavoritesConstellations(favoritesConstellationsCopy));
      dispatch(
        postUserFavoriteConstellation({ constellation_id: dataModal.id })
      );
      setIsOpenedFavorite(!isOpenedFavorite);
    }
  };

  const handleCloseConstellation = () => {
    setIsOpened(false);

    setTimeout(() => {
      dispatch(setModalContent(null));
    }, 200);
  };

  return (
    <div
      className={classNames("Modal", { "Modal--opened": isOpened })}
      onClick={({ target, currentTarget }) => {
        if (currentTarget === target) {
          handleCloseConstellation();
        }
      }}
    >
      <div className="Block Detail-Block">
        <Anchor
          customClass="Detail-Modal-Close"
          funcClick={handleCloseConstellation}
        >
          <CloseIcon />
        </Anchor>
        <Title
          type="h3"
          tClass="Title Title--small Detail-Block-Title"
          tData={`Constellation ${dataModal.name}`}
        />
        <div className="Detail-Block-Container">
          <figure className="Detail-Picture">
            <img src={`${baseURL}${dataModal.img_url}`} alt={dataModal.name} />
            <figcaption className="Title Title--small Detail-Picture-Title">
              {dataModal.latin_name}
            </figcaption>
          </figure>
          <div className="Detail-Description">
            {dataModal.myths !== undefined &&
              dataModal.myths !== null &&
              dataModal.myths.map((myth) => {
                return (
                  <React.Fragment key={myth.id}>
                    <Title
                      type="h2"
                      tClass="Detail-Description-Title"
                      tData="Mythe :"
                    />
                    <Paragraph
                      cClass="Detail-Description-Text"
                      cData={`Selon le mythe d'origine ${myth.origin}, ${myth.legend}`}
                    />
                  </React.Fragment>
                );
              })}
            {Boolean(dataModal.history) && (
              <>
                <Title
                  type="h3"
                  tClass="Detail-Description-Title"
                  tData="Histoire :"
                />
                <Paragraph
                  cClass="Detail-Description-Text"
                  cData={dataModal.history}
                />
              </>
            )}
            {Boolean(dataModal.spotting) && (
              <>
                <Title
                  type="h3"
                  tClass="Detail-Description-Title"
                  tData="Répérage :"
                />
                <Paragraph
                  cClass="Detail-Description-Text"
                  cData={dataModal.spotting}
                />
              </>
            )}
          </div>
        </div>
        {isConnected &&
          (isOpenedFavorite ? (
            <FullHeart
              onClick={() => {
                handleFavs();
              }}
              className="Detail-Modal-Favorite Detail-Modal-Favorite--favorited"
            />
          ) : (
            <EmptyHeart
              onClick={() => {
                handleFavs();
              }}
              className="Detail-Modal-Favorite"
            />
          ))}
      </div>
    </div>
  );
}
