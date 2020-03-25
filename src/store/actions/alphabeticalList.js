export function getList(url, field) {
  return async dispatch => {
    dispatch(getListStart());
    try {
      const data = await fetch(url).then(res => res.json());
      const catalog = data.books;

      const fieldValues = []; // получаем массив уникальных значений списка
      Object.keys(catalog).map((it) => {
        const item = data.books[it][field];
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

      dispatch(getListSuccess(list));
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

export function getListSuccess(list) {
  return {
    type: "FETCH_SUCCESS",
    list
  }
}

export function getListError(errorText) {
  return {
    type: "FETCH_ERROR",
    error: errorText
  }
}