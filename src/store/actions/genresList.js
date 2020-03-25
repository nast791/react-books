export function getGenres(url) {
  return async dispatch => {
    dispatch(getListStart());
    try {
      const data = await fetch(url).then(res => res.json());
      const genres = data.genres;

      dispatch(getListSuccess(genres));
    } catch (e) {
      const errorText = 'Не удалось загрузить данные с сервера';
      dispatch(getListError(errorText));
    }
  }
}

export function getListStart() {
  return {
    type: "FETCH_START"
  }
}

export function getListSuccess(genres) {
  return {
    type: "FETCH_SUCCESS",
    genres
  }
}

export function getListError(errorText) {
  return {
    type: "FETCH_ERROR",
    error: errorText
  }
}