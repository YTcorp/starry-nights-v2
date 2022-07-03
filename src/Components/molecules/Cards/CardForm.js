import { isEmpty } from "lodash";
import React from "react";
import { AiOutlineCloseCircle as CloseIcon } from "react-icons/ai";
import { MdOutlineChangeCircle } from "react-icons/md";
import InputIcon from "../Input/InputIcon";

export default function CardForm({ modal, data, funcClose }) {
  // console.log("on cardForm", data);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="Block Detail-Block">
      {modal && (
        <CloseIcon
          className="Detail-Block-Modal-Close"
          onClick={() => funcClose()}
        />
      )}
      <form onSubmit={handleSubmit} className="Form Block Block--small">
        <fieldset className="Fieldset">
          <label htmlFor="name" className="Label">
            Nom de l'endroit :
          </label>
          <input
            autoComplete="off"
            className="Input"
            id="name"
            type="text"
            placeholder="Lac de Tikou"
          />
        </fieldset>
        <fieldset className="Fieldset">
          <label htmlFor="address" className="Label">
            Addresse :
          </label>
          <InputIcon
            id="address"
            type="text"
            placeholder={
              isEmpty(data.address)
                ? "26b rue du Bosquet, 6600, Perpignan, France"
                : data.address
            }
            defaultValue={data.address}
          >
            <MdOutlineChangeCircle className="Icon-input" />
          </InputIcon>
        </fieldset>
        <button type="submit" className="Button">
          Enregistrer
        </button>
      </form>
    </div>
  );
}
