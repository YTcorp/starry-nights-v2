import Title from "../Components/atoms/Title/Title";

export const titleType = (tType, tClass, tData) => {
  switch (tType) {
    case "h1":
      return <Title type="h1" tClass={tClass} tData={tData} />;
    case "h2":
      return <Title type="h2" tClass={tClass} tData={tData} />;
    case "h3":
      return <Title type="h3" tClass={tClass} tData={tData} />;
    default:
      return <Title type="h4" tClass={tClass} tData={tData} />;
  }
};

export default titleType;
