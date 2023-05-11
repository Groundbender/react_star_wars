import {
  HTTP,
  SWAPI_PEOPLE,
  SWAPI_ROOT,
  GUIDE_IMG_EXTENSION,
  URL_IMG_PERSON,
  SWAPI_PARAM_PAGE,
} from "@constants/api";

export const getPeoplePageId = (url) => {
  const pos = url.lastIndexOf(SWAPI_PARAM_PAGE);
  const id = url.slice(pos + SWAPI_PARAM_PAGE.length, url.length);
  return Number(id);
};

const getId = (url, category) => {
  const splitUrl = url.split("/");
  const id = splitUrl[splitUrl.length - 2];
  return id;
};

export const getPeopleId = (url) => getId(url, SWAPI_PEOPLE);

export const getPeopleImage = (id) =>
  `${URL_IMG_PERSON}/${id + GUIDE_IMG_EXTENSION}`;
