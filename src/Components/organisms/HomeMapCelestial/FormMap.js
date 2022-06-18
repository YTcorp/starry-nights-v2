import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLocation } from "../../../API/geocodingService";
import {
  setAddress,
  setLocation,
  setDate,
  setLocationError,
} from "../../../store/features/addressSlice";

export default function FormMap() {
  const isConnected = localStorage.getItem("userConnected");
  const { address, location, date } = useSelector((state) => state.address);
  const dispatch = useDispatch();

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (userPosition) => {
          dispatch(
            setLocation({
              latitude: userPosition.coords.latitude,
              longitude: userPosition.coords.longitude,
            })
          );
        },
        (error) => {
          dispatch(setLocationError(error.message));
        }
      );
    } else {
      setLocationError(
        "Votre navigateur ne permet pas de partager votre position."
      );
    }
  };

  const apiLocation = async () => {
    const result = dispatch(fetchLocation({ address }));
    dispatch(
      setLocation({
        latitude: result.latitude,
        longitude: result.longitude,
      })
    );
  };
  console.log("address, location & date: ", address, location, date);

  return (
    <div className="Map-Form-Container">
      <div className="Block Map-Form">
        <div className="Map-Form-left">
          <div className="Map-Form-LookAddress">
            <input
              autoComplete="off"
              title="Saisissez votre adresse complète"
              className="Input LookAddress"
              name="address"
              type="text"
              placeholder="1 rue Dupont, 75000 Paris, FRANCE"
              value={address}
              onChange={({ currentTarget }) =>
                dispatch(setAddress(currentTarget.value))
              }
            />
            <button
              title="Cherchez les constellations visibles depuis votre adresse"
              className="Button LookAddress"
              onClick={apiLocation}
            >
              Chercher
            </button>
          </div>
          <div className="Map-Form-row">
            <input
              title="Changez la date et l'heure pour montrer les constellations visibles"
              className="Input"
              name="datetime"
              type="datetime-local"
              value={date}
              onChange={({ currentTarget }) =>
                dispatch(setDate(currentTarget.value))
              }
            />
            <button
              title="Regardez les constellations visibles depuis votre position actuelle"
              className="Button"
              onClick={getUserLocation}
            >
              Position actuelle
            </button>
          </div>
        </div>
        {isConnected && (
          <div className="Map-Form-right">
            <button className="Button">Enregistrer ce lieu comme favori</button>
            <button className="Button">Enregistrer un événement</button>
          </div>
        )}
      </div>
      {/* <InteractiveMap
        latitude={userCoords.latitude}
        longitude={userCoords.longitude}
        datetime={datetime}
      /> */}
    </div>
  );
}
