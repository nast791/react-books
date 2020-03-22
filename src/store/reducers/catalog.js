const initialState = {
  url: "src/data.json",
  catalog: null,
  loading: true,
  error: false
};

export default function catalogReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_START":
      return {
        ...state, loading: true
      };
    case "FETCH_SUCCESS":
      return {
        ...state, loading: false, catalog: action.catalog
      };
    case "FETCH_ERROR":
      return {
        ...state, loading: false, error: action.error
      };
    default:
      return state;
  }
}