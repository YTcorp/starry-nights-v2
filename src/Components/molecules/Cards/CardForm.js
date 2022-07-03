import { isEmpty } from "lodash";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineCloseCircle as CloseIcon } from "react-icons/ai";
import { MdOutlineChangeCircle } from "react-icons/md";
import InputIcon from "../Input/InputIcon";
import Input from "../Input/Input";
import Spinner from "../../atoms/Spinner/Spinner";
import { fetchAddress } from "../../../API/geocodingService";
import { setAddress } from "../../../store/features/addressSlice";

export default function CardForm({ modal, data, funcClose }) {
  const dispatch = useDispatch();
  const { address, loading } = useSelector((state) => state.address);
  const [inputAddress, setInputAddress] = useState("");

  useEffect(() => {
    console.log("on cardForm, data:", data);
    console.log("on cardForm, state.address", address);
    console.log("on cardForm, inputAddress", inputAddress);
    if (data.location) {
      dispatch(
        fetchAddress({
          latitude: data.location.latitude,
          longitude: data.location.longitude,
        })
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
    // dispatch(setAddress({}));
  };

  return (
    <>
      {modal && (
        <CloseIcon
          className="Detail-Block-Modal-Close"
          onClick={() => funcClose()}
        />
      )}
      <form onSubmit={handleSubmit} className="Form Block Block--small">
        {loading && <Spinner />}
        <fieldset className="Fieldset">
          <label htmlFor="name" className="Label">
            Nom de l'endroit :
          </label>
          <Input id="name" placeholder="Lac de Tikou" />
        </fieldset>
        <fieldset className="Fieldset">
          <label htmlFor="address" className="Label">
            Addresse :
          </label>
          <InputIcon
            id="address"
            placeholder="26b rue du Bosquet, 6600, Perpignan, France"
            defaultValue={setDefaultValue()}
            onChange={setInputAddress}
          >
            <MdOutlineChangeCircle className="Icon-input Icon-input__change" />
          </InputIcon>
        </fieldset>
        <button type="submit" className="Button">
          Enregistrer
        </button>
      </form>
    </>
  );
}
