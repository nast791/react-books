const initialState = {
  debouncedValue: null,
};

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_VALUE":
      return {
        ...state, debouncedValue: action.debouncedValue
      };
    default:
      return state;
  }
}