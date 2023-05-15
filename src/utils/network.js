import { HTTP, HTTPS } from "@constants/api";
/**
 * Изменяет url с HTTP на HTTPS
 * @param {String} url - url для изменения
 * @returns {String} - url с HTTPS
 */
export const changeHTTP = (url) => {
  const result = url ? url.replace(HTTP, HTTPS) : url;
  return result;
};

/**
 * отправляет запрос fetch
 * @param {String} url - url для запроса
 * @returns {Promise} - Promise с результатом запроса
 */
export const getApiResource = async (url) => {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.error("Couldn't fetch", res.status);
      return false;
    }
    return await res.json();
  } catch (error) {
    console.error("Couldn't fetch", error.message);
    return false;
  }

  // fetch(url)
  // .then((res) => res.json())
  // .then((data) => console.log(data))
  // .catch((err) => console.log(err.message));
};

// const body = getApiResource(SWAPI_ROOT + SWAPI_PEOPLE);
// console.log(body);

// (async () => {
//   const body = await getApiResource(SWAPI_ROOT + SWAPI_PEOPLE);
//   console.log(body);
// })();

// запрашиваем фильмы из всех ссылок в массиве фильмов
export const makeConcurrentRequest = async (urlArrFilms) => {
  const res = await Promise.all(
    urlArrFilms.map((res) => {
      return fetch(res).then((res) => res.json());
    })
  );

  return res;
};
