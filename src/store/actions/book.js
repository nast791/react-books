export function getBook(url, id) {
  return async dispatch => {
    dispatch(getBookStart());
    try {
      const data = await fetch(url).then(res => res.json()).catch((err) => console.log(err));
      const book = data.books[id];

      dispatch(getBookSuccess(book));
    } catch (e) {
      const errorText = 'Не удалось загрузить данные с сервера';
      dispatch(getBookError(errorText));
    }
  }
}

export function getBookStart() {
  return {
    type: "FETCH_START"
  }
}

export function getBookSuccess(book) {
  return {
    type: "FETCH_SUCCESS",
    book
  }
}

export function getBookError(errorText) {
  return {
    type: "FETCH_ERROR",
    error: errorText
  }
}