const authMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  if (action.type?.startsWith("auth/")) {
    try {
      const authState = store.getState().login;
      localStorage.setItem("user_connected", authState.isConnected);
    } catch (error) {
      return undefined;
    }
  }

  return result;
};

export default authMiddleware;
