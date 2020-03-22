export function getCatalog(url) {
  return async dispatch => {
    dispatch(getCatalogStart());
    try {
      const data = await fetch(url).then(res => res.json()).catch((err) => console.log(err));
      const catalog = data.books;

      dispatch(getCatalogSuccess(catalog));
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

export function getCatalogSuccess(catalog) {
  return {
    type: "FETCH_SUCCESS",
    catalog
  }
}

export function getCatalogError(errorText) {
  return {
    type: "FETCH_ERROR",
    error: errorText
  }
}