import Paragraph from "../Components/atoms/Paragraph/Paragraph";
import titleType from "./titleType";
import LiElement from "../Components/molecules/LiElement/LiElement";

const contentType = (content, cClass, cData) => {
  switch (content) {
    case "title":
      return titleType(content, cClass, cData);
    case "li":
      return (
        <ul>
          {Object.keys(cData).length > 1 ? (
            cData.map((item) => {
              return (
                <LiElement key={item.id} customClass={cClass} data={item} />
              );
            })
          ) : (
            <LiElement customClass={cClass} data={cData} />
          )}
        </ul>
      );
    default:
      return <Paragraph cClass={cClass} cData={cData} />;
  }
};

export default contentType;
