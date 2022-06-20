import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Spinner from "../../atoms/Spinner/Spinner";
import LiElement from "../LiElement/LiElement";
import { baseURL } from "../../../utils/axios";
import HandleModalConstellation from "../../../utils/useHandleModalContent";
import { send } from "process";
// import { setModalContent } from "../../../store/features/modalSlice";

export default function ConstellationsList() {
  //   const dispatch = useDispatch();
  const { constellations, loading } = useSelector(
    (state) => state.constellation
  );
  const { favLoading } = useSelector((state) => state.userData);
  const [sendDataModal, setSendDataModal] = useState(false);
  const [oneConstellation, setOneConstellation] = useState("");
  useEffect(() => {
    if (sendDataModal) {
      return <HandleModalConstellation data={oneConstellation} />;
    }
  }, [oneConstellation, sendDataModal]);

  const handleDataModal = (constellation) => {
    setSendDataModal(!sendDataModal);
    setOneConstellation(constellation);
    console.log(sendDataModal);
    // if (sendDataModal) {
    //   return (
    //     <HandleModalConstellation
    //       data={data}
    //       key={`Constellations-List-SubItem--${index}`}
    //     />
    //   );
    // }
  };
  console.log(sendDataModal);

  //   useHandleModalConstellation(data);
  //     const handleModal =(data) =>{
  //     }

  //   const handleModalConstellation = (data) => {
  //     const isFav = favConstellations.find((favorite) => favorite.id === data.id)
  //       ? true
  //       : false;
  //     const foundConstellation = { ...data, favorite: isFav };
  //     dispatch(setModalContent(foundConstellation));
  //   };

  return (
    <ul className="Constellations-List">
      {(loading || favLoading) && <Spinner />}
      {constellations.map((constellation, index) => (
        <LiElement
          key={`Constellations-List-Item--${index}`}
          data={constellation}
          customClass="Constellations-List-Item"
          funcMenu={() => handleDataModal(constellation)}
        >
          <img
            className="Constellations-List-Item-Image"
            src={`${baseURL}${constellation.img_url}`}
            alt={`Constellation ${constellation.name}`}
          />
          <strong className="Constellations-List-Item-Name">
            {constellation.name}
          </strong>
        </LiElement>
      ))}
    </ul>
  );
}
