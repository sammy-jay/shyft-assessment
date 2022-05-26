const initialState = {
  loading: true,
  error: false,
  userData: null,
  householdData: null,
};

const infoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOADING":
      return { ...state, loading: action.payload };
    case "ERROR":
      return { ...state, error: action.payload };
    case "USER_DATA":
      return { ...state, userData: action.payload };
    case "HOUSEHOLD_DATA":
      return { ...state, householdData: action.payload };
    default:
      return state;
  }
};

export default infoReducer;
