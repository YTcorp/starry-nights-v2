const authMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  if (action.type?.startsWith("auth/")) {
    const authState = store.getState().login;
    localStorage.setItem("userConnected", authState.isConnected);
  }
  return result;
};

export default authMiddleware;
