const initialState = {
  menu: false,
};

export default function catalogReducer(state = initialState, action) {
  switch (action.type) {
    case "OPEN_MENU":
      return {
        ...state, menu: true
      };
    case "CLOSE_MENU":
      return {
        ...state, menu: false
      };
    default:
      return state;
  }
}