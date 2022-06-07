import Paragraph from "../Components/atoms/Paragraph/Paragraph";
import titleType from "./titleType";

const contentType = (content, cClass, cData) => {
  switch (content) {
    case "title":
      return titleType(content, cClass, cData);
    default:
      return <Paragraph cClass={cClass} cData={cData} />;
  }
};

export default contentType;
