import {URL} from '../constants';

const initialState = {
  url: URL,
  list: null,
  loading: true,
  error: false
};

export default function alphabeticalListReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_START":
      return {
        ...state, loading: true
      };
    case "FETCH_SUCCESS":
      return {
        ...state, loading: false, list: action.list
      };
    case "FETCH_ERROR":
      return {
        ...state, loading: false, error: action.error
      };
    default:
      return state;
  }
}