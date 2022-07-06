import React from "react";
// import { useSelector } from "react-redux";
import { AiOutlineCloseCircle as CloseIcon } from "react-icons/ai";
import { baseURL } from "../../../utils/axios";
import Title from "../../atoms/Title/Title";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import Spinner from "../../atoms/Spinner/Spinner";

export default function CardMyth({ modal, data, funcClose }) {
  if (data.legend) {
    return (
      <>
        {modal && (
          <CloseIcon
            className="Detail-Modal-Close"
            onClick={() => funcClose()}
          />
        )}
        <Title
          type="h3"
          tClass="Title Detail-Block-Title"
          tData={`Mythe ${data.constellation.name}`}
        />
        <div className="Detail-Block-Container">
          <figure className="Detail-Picture">
            <img
              src={`${baseURL}${data.img_url || data.constellation.img_url}`}
              alt={data.constellation.name}
            />
            <figcaption className="Title Detail-Picture-Title">
              {data.constellation.latin_name}
            </figcaption>
          </figure>
          <div className="Detail-Description">
            <Title
              type="h2"
              tClass="Detail-Description-Title"
              tData="Légende"
            />
            <Paragraph
              cClass="Detail-Description-Text"
              cData={`Selon le mythe d'origine ${data.origin}, ${data.legend}`}
            />
          </div>
        </div>
      </>
    );
  } else {
    return <Spinner />;
  }
}
