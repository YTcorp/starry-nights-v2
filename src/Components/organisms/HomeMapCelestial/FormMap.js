import React from "react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { fetchAddress } from "../../../API/geocodingService";
import {
  setAddress,
  setLocationError,
} from "../../../store/features/addressSlice";

export default function FormMap() {
  dayjs.extend(utc);
  var now = dayjs().utc().format("YYYY-MM-DDThh:mm");

  const isConnected = localStorage.getItem("userConnected");
  const { loading } = useSelector((state) => state.address);
  const { address } = useSelector((state) => state.address);

  const [datetime, setDatetime] = useState(now);
  const [userCoords, setUserCoords] = useState({});
  //   const [inputAddress, setInputAddress] = useState("");
  //   const [locationError, setLocationError] = useState(null);
  const dispatch = useDispatch();
  console.log(address);

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (userPosition) => {
          setAddress({
            latitude: userPosition.coords.latitude,
            longitude: userPosition.coords.longitude,
          });
        },
        (error) => {
          console.log(error);
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
    const result = dispatch(fetchAddress({ address }));
    setUserCoords({
      latitude: result.latitude,
      longitude: result.longitude,
    });
  };
  console.log(userCoords, address);

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
              onChange={({ currentTarget }) => setAddress(currentTarget.value)}
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
              value={datetime}
              onChange={({ currentTarget }) => setDatetime(currentTarget.value)}
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
