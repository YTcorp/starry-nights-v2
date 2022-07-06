import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import cloneDeep from "lodash/cloneDeep";
import {
  AiFillHeart as FullHeart,
  AiOutlineHeart as EmptyHeart,
} from "react-icons/ai";
import {
  postUserFavoriteConstellation,
  deleteUserFavoriteConstellation,
} from "../../../API/userService";
import { setFavoritesConstellations } from "../../../store/features/userDataSlice";

export default function FavHeart({ data }) {
  const dispatch = useDispatch();
  const [isFavorite, setIsFavorite] = useState(false);
  const { isConnected } = useSelector((state) => state.login);
  const { favConstellations } = useSelector((state) => state.userData);

  useEffect(() => {
    setIsFavorite(data.favorite);
  }, [data]);

  const handleFavs = () => {
    const favoritesConstellationsCopy = cloneDeep(favConstellations);
    if (isFavorite) {
      const restFromFavorites = favoritesConstellationsCopy.filter(
        (constellation) => constellation.id !== data.id
      );
      dispatch(setFavoritesConstellations(restFromFavorites));
      dispatch(deleteUserFavoriteConstellation({ id: data.id }));
      setIsFavorite(!isFavorite);
    } else {
      favoritesConstellationsCopy.push(data);
      dispatch(setFavoritesConstellations(favoritesConstellationsCopy));
      dispatch(postUserFavoriteConstellation({ constellation_id: data.id }));
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
            className="Detail-Favorite Detail-Favorite--favorited"
          />
        ) : (
          <EmptyHeart
            onClick={() => {
              handleFavs();
            }}
            className="Detail-Favorite"
          />
        ))}
    </>
  );
}
