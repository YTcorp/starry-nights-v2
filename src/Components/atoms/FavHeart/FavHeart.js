import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cloneDeep } from "lodash";
import {
  AiFillHeart as FullHeart,
  AiOutlineHeart as EmptyHeart,
} from "react-icons/ai";
import {
  postUserFavoriteConstellation,
  deleteUserFavoriteConstellation,
} from "../../../API/userService";
import { setFavoritesConstellations } from "../../../store/features/userDataSlice";

export default function FavHeart() {
  const dispatch = useDispatch();
  const [isFavorite, setIsFavorite] = useState(false);
  const isConnected = localStorage.getItem("userConnected");
  const { dataCard } = useSelector((state) => state.modal);
  const { favConstellations } = useSelector((state) => state.userData);
  useEffect(() => {
    setIsFavorite(dataCard.favorite);
  }, [dataCard]);

  const handleFavs = () => {
    const favoritesConstellationsCopy = cloneDeep(favConstellations);
    if (isFavorite) {
      const restFromFavorites = favoritesConstellationsCopy.filter(
        (constellation) => constellation.id !== dataCard.id
      );
      dispatch(setFavoritesConstellations(restFromFavorites));
      dispatch(deleteUserFavoriteConstellation({ id: dataCard.id }));
      setIsFavorite(!isFavorite);
    } else {
      favoritesConstellationsCopy.push(dataCard);
      dispatch(setFavoritesConstellations(favoritesConstellationsCopy));
      dispatch(
        postUserFavoriteConstellation({ constellation_id: dataCard.id })
      );
      setIsFavorite(!isFavorite);
    }
  };

  return (
    <>
      {isConnected &&
        (isFavorite ? (
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
    </>
  );
}
