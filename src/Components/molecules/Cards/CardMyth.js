import React from "react";
import { AiOutlineCloseCircle as CloseIcon } from "react-icons/ai";
import { baseURL } from "../../../utils/axios";
import Title from "../../atoms/Title/Title";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import FavHeart from "../../atoms/FavHeart/FavHeart";

export default function CardMyth({ modal, data, funcClose }) {
  return (
    <div className="Block Detail-Block">
      {modal && (
        <CloseIcon className="Detail-Modal-Close" onClick={() => funcClose()} />
      )}
      <Title
        type="h3"
        tClass="Title Title--small Detail-Block-Title"
        tData={`Mythe`}
      />
      <div className="Detail-Block-Container">
        <figure className="Detail-Picture">
          <img
            src={`${baseURL}${data.img_url || data.constellation.img_url}`}
            alt={data.constellation.name}
          />
          <figcaption className="Title Title--small Detail-Picture-Title">
            {data.constellation.latin_name}
          </figcaption>
        </figure>
        <div className="Detail-Description">
          <Title
            type="h2"
            tClass="Detail-Description-Title"
            tData={`Constellation ${data.constellation.name}`}
          />
          <Paragraph
            cClass="Detail-Description-Text"
            cData={`Selon le mythe d'origine ${data.origin}, ${data.legend}`}
          />
        </div>
        <FavHeart data={data} />
      </div>
    </div>
  );
}