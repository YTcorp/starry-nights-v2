import loginSlice from "./loginSlice";

const authMiddleware = (store) => (next) => (action) => {
  console.log("on middleware");

  const result = next(action);
  if (action.type?.startsWith("users/")) {
    console.log("starts with users");
    const authState = store.getState().isSuccess;
    const auth = store.getState().headers;
    console.log(auth);
    localStorage.setItem("auth", JSON.stringify(authState));
    // localStorage.setItem("token", JSON.stringify(authState));
  }
  return result;
};

export default authMiddleware;

// connectUser(authorization.match(/Bearer\s(.*)/)[1]);
