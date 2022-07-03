import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLocation } from "../../../API/geocodingService";
import Celestial from "./Celestial";
import { isEmpty } from "lodash";
import {
  setAddress,
  setLocation,
  resetLocation,
  setDate,
  setLocationError,
} from "../../../store/features/addressSlice";
import { setModalContent } from "../../../store/features/showSlice";
import Spinner from "../../atoms/Spinner/Spinner";

export default function FormMap() {
  const { isConnected } = useSelector((state) => state.login);
  const { address, location, loadingLocation, date } = useSelector(
    (state) => state.address
  );
  const { errPlace } = useSelector((state) => state.userData);
  const dispatch = useDispatch();
  const getUserLocation = () => {
    dispatch(resetLocation());
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
  const apiLocation = async (e) => {
    e.preventDefault();
    const result = dispatch(fetchLocation({ address }));
    dispatch(
      setLocation({
        latitude: result.latitude,
        longitude: result.longitude,
      })
    );
  };

  const setPlace = () => {
    const addressToSave = isEmpty(address) ? "" : address;
    const locationToSave = isEmpty(location) ? "" : location;
    dispatch(
      setModalContent({ address: addressToSave, location: locationToSave })
    );
  };

  return (
    <div className="Map-Form-Container">
      <div className="Block Map-Form">
        {!isEmpty(errPlace) && <p className="Error">{errPlace}</p>}
        <form className="Map-Form-LookAddress">
          <input
            autoComplete="off"
            title="Saisissez votre adresse complète"
            className="Input LookAddress-Address"
            name="address"
            type="text"
            placeholder="1 rue Dupont, 75000 Paris, FRANCE"
            defaultValue={address}
            onChange={({ currentTarget }) =>
              dispatch(setAddress(currentTarget.value))
            }
          />
          <button
            title="Cherchez les constellations visibles depuis votre adresse"
            className="Button LookAddress-Search"
            onClick={apiLocation}
          >
            Chercher
          </button>
        </form>
        <input
          title="Changez la date et l'heure pour montrer les constellations visibles"
          className="Input Map-Form-Date"
          name="datetime"
          type="datetime-local"
          value={date}
          onChange={({ currentTarget }) =>
            dispatch(setDate(currentTarget.value))
          }
        />
        <button
          title="Regardez les constellations visibles depuis votre position actuelle"
          className="Map-Form-Geolocation Button"
          onClick={getUserLocation}
        >
          {loadingLocation && <Spinner />}
          Position actuelle
        </button>
        {isConnected && (
          <>
            <button className="Map-Form-Favorite Button" onClick={setPlace}>
              Enregistrer un lieu
            </button>
            <button className="Map-Form-Event Button">
              Enregistrer un événement
            </button>
          </>
        )}
      </div>
      <Celestial
        latitude={location.latitude}
        longitude={location.longitude}
        datetime={date}
      />
    </div>
  );
}
