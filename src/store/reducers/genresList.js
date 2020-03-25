import {URL, URL2} from '../constants';

const initialState = {
  url: URL,
  url2: URL2,
  genres: null,
  loading: true,
  error: false
};

export default function genresListReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_START":
      return {
        ...state, loading: true
      };
    case "FETCH_SUCCESS":
      return {
        ...state, loading: false, genres: action.genres
      };
    case "FETCH_ERROR":
      return {
        ...state, loading: false, error: action.error
      };
    default:
      return state;
  }
}