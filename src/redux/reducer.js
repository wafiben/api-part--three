const initilState = { users: [], errors: null, loading: false };
const Reducer = (state = initilState, action) => {
  switch (action.type) {
    case "GET_REQUEST":
      return { ...state, loading: true };
    case "GET_REQUEST_SUCCESS":
      return { ...state, users: action.payload, loading: false };
    case "GET_REQUEST_FAIL":
      return { ...state, errors: action.payload };
    default:
      return state;
  }
};
export default Reducer;
