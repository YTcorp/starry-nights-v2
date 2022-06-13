import React from "react";
import { useSelector } from "react-redux";
import { AiOutlineCloseCircle as CloseIcon } from "react-icons/ai";
import { baseURL } from "../../../utils/axios";
import FavHeart from "../../atoms/FavHeart/FavHeart";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import Title from "../../atoms/Title/Title";

export default function CardInfo(props) {
  const { dataCard } = useSelector((state) => state.modal);
  return (
    <div className="Block Detail-Block">
      {props.modal && (
        <CloseIcon
          className="Detail-Modal-Close"
          onClick={() => props.funcClose()}
        />
      )}
      <Title
        type="h3"
        tClass="Title Title--small Detail-Block-Title"
        tData={`Constellation ${dataCard.name}`}
      />
      <div className="Detail-Block-Container">
        <figure className="Detail-Picture">
          <img src={`${baseURL}${dataCard.img_url}`} alt={dataCard.name} />
          <figcaption className="Title Title--small Detail-Picture-Title">
            {dataCard.latin_name}
          </figcaption>
        </figure>
        <div className="Detail-Description">
          {dataCard.myths !== undefined &&
            dataCard.myths !== null &&
            dataCard.myths.map((myth) => {
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
          {Boolean(dataCard.history) && (
            <>
              <Title
                type="h3"
                tClass="Detail-Description-Title"
                tData="Histoire :"
              />
              <Paragraph
                cClass="Detail-Description-Text"
                cData={dataCard.history}
              />
            </>
          )}
          {Boolean(dataCard.spotting) && (
            <>
              <Title
                type="h3"
                tClass="Detail-Description-Title"
                tData="Répérage :"
              />
              <Paragraph
                cClass="Detail-Description-Text"
                cData={dataCard.spotting}
              />
            </>
          )}
        </div>
        <FavHeart />
      </div>
    </div>
  );
}
