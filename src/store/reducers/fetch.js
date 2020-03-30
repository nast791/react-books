import {BASEURL} from '../constants';

const initialState = {
  url: BASEURL,
  catalog: null,
  genres: null,
  book: null,
  alphabeticalList: null,
  loading: true,
  error: false,
  search: null,
  searchError: false,
  searchOpen: false
};

export default function catalogReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_START":
      return {
        ...state, loading: true
      };
    case "FETCH_ERROR":
      return {
        ...state, loading: false, error: action.error
      };
    case "CATALOG_SUCCESS":
      return {
        ...state, loading: false, catalog: action.catalog, genres: action.genres
      };
    case "BOOK_SUCCESS":
      return {
        ...state, loading: false, book: action.book
      };
    case "GENRES_SUCCESS":
      return {
        ...state, loading: false, genres: action.genres
      };
    case "ALPHABETICAL_LIST_SUCCESS":
      return {
        ...state, loading: false, alphabeticalList: action.alphabeticalList
      };
    case "SEARCH_SUCCESS":
      return {
        ...state, search: action.search, searchError: false, searchOpen: true
      };
    case "SEARCH_ERROR":
      return {
        ...state, searchError: action.searchError, searchOpen: true
      };
    case "SEARCH_RESET":
      return {
        ...state, search: null, searchError: false, searchOpen: false
      };
    default:
      return state;
  }
}