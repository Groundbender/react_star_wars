const SWAPI_ROOT = "https://swapi.dev/api/";

const SWAPI_PEOPLE = "people";

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

(async () => {
  const body = await getApiResource(SWAPI_ROOT + SWAPI_PEOPLE);
  console.log(body);
})();
