const authMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  if (action.type?.startsWith("users/")) {
    // exemple to get a redux state on the localStorage:
    // const authState = store.getState().login;
    // console.log(authState);
    // localStorage.setItem('auth', JSON.stringify(authState));
  }
  return result;
};

export default authMiddleware;
