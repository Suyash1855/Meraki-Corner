reducer = (state = 0, action) => {
  if (action.type === "Increment") {
    return state + action.payload;
  } else {
    return state;
  }
};

export default reducer;
