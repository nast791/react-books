const initialState = {
  url: "../src/data.json",
  book: null,
  loading: true,
  error: false
};

export default function bookReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_START":
      return {
        ...state, loading: true
      };
    case "FETCH_SUCCESS":
      return {
        ...state, loading: false, book: action.book
      };
    case "FETCH_ERROR":
      return {
        ...state, loading: false, error: action.error
      };
    default:
      return state;
  }
}