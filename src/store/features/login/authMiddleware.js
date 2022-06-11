const authMiddleware = (store) => (next) => (action) => {
  console.log("on middleware", action);

  const result = next(action);
  if (action.type?.startsWith("users/")) {
    console.log("starts with users");

    // exemple to get a redux state on the localStorage:
    // const authState = store.getState().login;
    // console.log(authState);
    // localStorage.setItem('auth', JSON.stringify(authState));

    const token = JSON.parse(localStorage.getItem("token_user"));
    if (token) {
      // for Node.js Express back-end
      // return { 'x-access-token': token }; ??
      return { Authorization: "Bearer " + token };
    } else {
      return {};
    }
  }
  return result;
};

export default authMiddleware;
