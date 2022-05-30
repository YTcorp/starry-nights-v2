export const titleSelector = (type, tClass, tData) => {
  switch (type) {
    case "h1":
      return <h1 className={tClass}>{tData}</h1>;
    case "h2":
      return <h2 className={tClass}>{tData}</h2>;
    case "h3":
      return <h3 className={tClass}>{tData}</h3>;
    default:
      return <h4 className={tClass}>{tData}</h4>;
  }
};

export default titleSelector;
