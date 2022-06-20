import { useSelector, useDispatch } from "react-redux";
import { setModalContent } from "../store/features/modalSlice";

export default function HandleModalConstellation({ data }) {
  console.log("data on handleModal!!!!!!", data);
  const dispatch = useDispatch();
  const { favConstellations } = useSelector((state) => state.userData);

  const isFav = favConstellations.find((favorite) => favorite.id === data.id)
    ? true
    : false;
  const foundConstellation = { ...data, favorite: isFav };
  dispatch(setModalContent(foundConstellation));
}
