import * as api from "../api";

export const getCurrentUser = () => async (dispatch) => {
  try {
    dispatch({ type: "ERROR", payload: false });
    const {
      data: { data },
    } = await api.getCurrentUser();
    dispatch({ type: "USER_DATA", payload: data });
    dispatch({ type: "LOADING", payload: false });
  } catch (error) {
    dispatch({ type: "LOADING", payload: false });
    dispatch({ type: "ERROR", payload: true });
  }
};
export const getCurrentHousehold = (id) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });
  try {
    dispatch({ type: "ERROR", payload: false });
    const {
      data: { data },
    } = await api.getCurrentHousehold(parseInt(id));
    dispatch({ type: "HOUSEHOLD_DATA", payload: data });
    dispatch({ type: "LOADING", payload: false });
  } catch (error) {
    dispatch({ type: "LOADING", payload: false });
    dispatch({ type: "ERROR", payload: true });
  }
};
