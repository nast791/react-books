export function getCatalog(url, url2) {
  return async dispatch => {
    dispatch(getCatalogStart());
    try {
      let data2;
      const data = await fetch(url).then(res => res.json()).then(data2 = await fetch(url2).then(res => res.json()));
      const catalog = data.books;
      const genres = data2.genres;

      dispatch(getCatalogSuccess(catalog, genres));
    } catch (e) {
      const errorText = 'Не удалось загрузить данные с сервера';
      dispatch(getCatalogError(errorText));
    }
  }
}

export function getCatalogStart() {
  return {
    type: "FETCH_START"
  }
}

export function getCatalogSuccess(catalog, genres) {
  return {
    type: "FETCH_SUCCESS",
    catalog, genres
  }
}

export function getCatalogError(errorText) {
  return {
    type: "FETCH_ERROR",
    error: errorText
  }
}