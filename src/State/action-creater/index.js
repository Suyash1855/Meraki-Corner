export const increment = (amount) => {
  return (dispatch) => {
    dispatch({
      type: "Increment",
      payload: amount,
    });
  };
};
