export const rootReducer = (combineReducer) => (state, action) => {
  if (action.type === "user/logoutUser/fulfilled") {
    state = undefined;
  }
  return combineReducer(state, action);
};
