import React from "react";
import { AiOutlineCloseCircle as CloseIcon } from "react-icons/ai";
import { baseURL } from "../../../utils/axios";
import Title from "../../atoms/Title/Title";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import FavHeart from "../../atoms/FavHeart/FavHeart";

export default function cardConstellation({ modal, data, funcClose }) {
  return (
    <div className="Block Detail-Block">
      {modal && (
        <CloseIcon className="Detail-Modal-Close" onClick={() => funcClose()} />
      )}
      <Title
        type="h3"
        tClass="Title Title--small Detail-Block-Title"
        tData={`Constellation ${data.name}`}
      />
      <div className="Detail-Block-Container">
        <figure className="Detail-Picture">
          <img src={`${baseURL}${data.img_url}`} alt={data.name} />
          <figcaption className="Title Title--small Detail-Picture-Title">
            {data.latin_name}
          </figcaption>
        </figure>
        <div className="Detail-Description">
          {data.myths !== undefined &&
            data.myths !== null &&
            data.myths.map((myth) => {
              return (
                <React.Fragment key={myth.id}>
                  <Title
                    type="h2"
                    tClass="Detail-Description-Title"
                    tData="Mythe :"
                  />
                  <Paragraph
                    cClass="Detail-Description-Text"
                    cData={`Selon le mythe d'origine ${myth.origin}, ${myth.legend}`}
                  />
                </React.Fragment>
              );
            })}
          {Boolean(data.history) && (
            <>
              <Title
                type="h3"
                tClass="Detail-Description-Title"
                tData="Histoire :"
              />
              <Paragraph
                cClass="Detail-Description-Text"
                cData={data.history}
              />
            </>
          )}
          {Boolean(data.spotting) && (
            <>
              <Title
                type="h3"
                tClass="Detail-Description-Title"
                tData="Répérage :"
              />
              <Paragraph
                cClass="Detail-Description-Text"
                cData={data.spotting}
              />
            </>
          )}
        </div>
        <FavHeart data={data} />
      </div>
    </div>
  );
}
