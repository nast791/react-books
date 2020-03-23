export function getBook(url, url2, id) {
  return async dispatch => {
    dispatch(getBookStart());
    try {
      let data2;
      const data = await fetch(url).then(res => res.json()).then(data2 = await fetch(url2).then(res => res.json()));
      const book = data.books[id];
      book.genres = book.genres.map((it) => data2.genres[it]);

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