import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HomeHero from "../organisms/HomeHero/HomeHero";
import HomeRandomMyth from "../organisms/HomeRandomMyth/HomeRandomMyth";
import HomeMapCelestial from "../organisms/HomeMapCelestial/HomeMapCelestial";
import { fetchUserFavoritesConstellations } from "../../API/userService";

export default function Hompage() {
  const dispatch = useDispatch();
  const { isConnected } = useSelector((state) => state.login);

  useEffect(() => {
    if (isConnected) {
      dispatch(fetchUserFavoritesConstellations());
    }
  }, [isConnected, dispatch]);

  return (
    <main className="Main Homepage">
      <HomeHero />
      <HomeRandomMyth />
      <HomeMapCelestial />
    </main>
  );
}
