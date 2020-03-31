export function getCatalog(url) {
  return async dispatch => {
    dispatch(getFetchStart());
    try {
      let genres;
      const catalog = await fetch(`${url}books.json`).then(res => res.json()).then(genres = await fetch(`${url}genres.json`).then(res => res.json()));

      dispatch(getCatalogSuccess(catalog, genres));
    } catch (e) {
      const errorText = 'Не удалось загрузить данные с сервера';
      dispatch(getFetchError(errorText));
    }
  }
}

export function getBook(url, id) {
  return async dispatch => {
    dispatch(getFetchStart());
    try {
      let genres;
      const book = await fetch(`${url}books/${id}.json`).then(res => res.json()).then(genres = await fetch(`${url}genres.json`).then(res => res.json()));
      book.genres = book.genres.map((it) => genres[it]);

      dispatch(getBookSuccess(book));
    } catch (e) {
      const errorText = 'Не удалось загрузить данные с сервера';
      dispatch(getFetchError(errorText));
    }
  }
}

export function getGenres(url) {
  return async dispatch => {
    dispatch(getFetchStart());
    try {
      const genres = await fetch(`${url}genres.json`).then(res => res.json());

      dispatch(getGenresSuccess(genres));
    } catch (e) {
      const errorText = 'Не удалось загрузить данные с сервера';
      dispatch(getFetchError(errorText));
    }
  }
}

export function getAlphabeticalList(url, field) {
  return async dispatch => {
    dispatch(getFetchStart());
    try {
      const catalog = await fetch(`${url}books.json`).then(res => res.json());

      const fieldValues = []; // получаем массив уникальных значений списка
      Object.keys(catalog).map((it) => {
        const item = catalog[it][field];
        if (item && !fieldValues.includes(item.trim())) {
          fieldValues.push(item.trim());
        }
      });

      // переставляем имя/фамилия в авторах, сортируем
      const fieldValuesSort = (field === 'author') ?
        fieldValues.map((it) => [it.split(' ')[1], it.split(' ')[0]].join(' ')).sort() : fieldValues.sort();

      const letters = {}; // получаем объект вида {буква: [значение1, значение2]}
      fieldValuesSort.map((it) => {
        const letter = it.charAt(0);
        if (!Object.keys(letters).includes(letter)) {
          letters[letter] = new Array(it);
        } else {
          letters[letter].push(it);
        }
      });

      // сортируем объект
      const list = Object.keys(letters).sort().reduce((acc, next) => ({
        ...acc, [next]: letters[next]
      }), {});

      dispatch(getAlphabeticalListSuccess(list));
    } catch (e) {
      const errorText = 'Не удалось загрузить данные с сервера';
      dispatch(getFetchError(errorText));
    }
  }
}

function compareTitles(a, b) {
  if (a[1].title.toLowerCase() > b[1].title.toLowerCase()) return 1;
  if (a[1].title.toLowerCase() < b[1].title.toLowerCase()) return -1;
  return 0;
}

export function getSearch(url, value) {
  return async dispatch => {
    if (value) value = value.trim();
    if (!value) {
      dispatch(resetSearch());
      return;
    }
    try {
      const data = await fetch(`${url}books.json`).then(res => res.json());
      const lengthSearchItems = 5; // выводим 5 элементов
      const search = Object.entries(data).filter(it => it[1].title.toLowerCase().includes(value.trim().toLowerCase())).sort(compareTitles).filter((item, index) => { if (index < lengthSearchItems) return item });

      dispatch(getSearchSuccess(search));
    } catch (e) {
      const errorText = 'Не удалось загрузить данные с сервера';
      dispatch(getSearchError(errorText));
    }
  }
}

export function sendRating(value, id, url, voted, storageAvailable) {
  return async dispatch => {
    const data = (!voted) ? [...value] : [...voted, value];
    try {
      await fetch(`${url}books/${id}/voted.json`, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(() => {
        if (storageAvailable) {
          window.localStorage.setItem(id, value);
        }
      });

      dispatch(sendRatingSuccess());
    } catch (e) {
      console.log('Не удалось загрузить данные на сервер');
    }
  }
}

export function getFetchStart() {
  return {
    type: "FETCH_START"
  }
}

export function getFetchError(errorText) {
  return {
    type: "FETCH_ERROR",
    error: errorText
  }
}

export function getCatalogSuccess(catalog, genres) {
  return {
    type: "CATALOG_SUCCESS",
    catalog, genres
  }
}

export function getBookSuccess(book) {
  return {
    type: "BOOK_SUCCESS",
    book
  }
}

export function getGenresSuccess(genres) {
  return {
    type: "GENRES_SUCCESS",
    genres
  }
}

export function getAlphabeticalListSuccess(list) {
  return {
    type: "ALPHABETICAL_LIST_SUCCESS",
    alphabeticalList: list
  }
}

export function getSearchSuccess(search) {
  return {
    type: "SEARCH_SUCCESS",
    search
  }
}

export function getSearchError(errorText) {
  return {
    type: "SEARCH_ERROR",
    searchError: errorText
  }
}

export function resetSearch() {
  return {
    type: "SEARCH_RESET"
  }
}

export function sendRatingSuccess() {
  return {
    type: "SEND_RATING_SUCCESS"
  }
}