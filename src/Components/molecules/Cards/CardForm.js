import { isEmpty } from "lodash";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineCloseCircle as CloseIcon } from "react-icons/ai";
import Input from "../Input/Input";
import Spinner from "../../atoms/Spinner/Spinner";
import { fetchAddress } from "../../../API/geocodingService";
import { saveFavoritePlace } from "../../../API/userService";
import { setModalContent } from "../../../store/features/showSlice";

export default function CardForm({ modal, data, funcClose }) {
  const dispatch = useDispatch();
  const { address, loading, loadingLocation } = useSelector(
    (state) => state.address
  );

  const [inputName, setInputName] = useState("");
  const [inputAddress, setInputAddress] = useState("");
  const [dataReady, setDataReady] = useState("");

  useEffect(() => {
    if (isEmpty(data.address) && data.location) {
      dispatch(
        fetchAddress({
          latitude: data.location.latitude,
          longitude: data.location.longitude,
        })
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (dataReady) {
      console.log("ready to flyyyyyy", inputName, inputAddress);
      dispatch(saveFavoritePlace({ name: inputName, address: inputAddress }));
      dispatch(setModalContent(null));
      setDataReady(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataReady]);

  const setDefaultValue = () => {
    let defaultValue = "";
    if (data.address) {
      defaultValue = data.address;
    } else if (isEmpty(defaultValue) && address) {
      defaultValue = address;
    } else {
      defaultValue = undefined;
    }
    return defaultValue;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEmpty(inputAddress)) {
      setInputAddress(setDefaultValue());
      setDataReady(true);
    }
  };

  console.log(data);
  return (
    <>
      {modal && (
        <CloseIcon
          className="Detail-Block-Modal-Close"
          onClick={() => funcClose()}
        />
      )}
      <form onSubmit={handleSubmit} className="Form Block Block--small">
        {(loading || loadingLocation) && <Spinner />}
        <fieldset className="Fieldset">
          <label htmlFor="name" className="Label">
            Nom de l'endroit :
          </label>
          <Input id="name" placeholder="Lac de Tikou" onChange={setInputName} />
        </fieldset>
        <fieldset className="Fieldset">
          <label htmlFor="address" className="Label">
            Addresse :
          </label>
          <Input
            id="address"
            placeholder="26b rue du Bosquet, 6600, Perpignan, France"
            defaultValue={setDefaultValue()}
            onChange={setInputAddress}
          />
        </fieldset>
        <button type="submit" className="Button">
          Enregistrer
        </button>
      </form>
    </>
  );
}
