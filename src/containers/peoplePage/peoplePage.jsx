import { useState, useEffect } from "react";
import { withErrorApi } from "../../hoc-helpers/withErrorApi";
import { getApiResource } from "../../utils/network";
import { API_PEOPLE } from "../../constants/api";
import { getPeopleId, getPeopleImage } from "../../services/getPeopleData";
import PeopleList from "../../components/peoplePage/peopleList/peopleList";

const PeoplePage = ({ setErrorApi }) => {
  const [people, setPeople] = useState(null);
  // const [errorApi, setErrorApi] = useState(false);

  const getResource = async (url) => {
    const res = await getApiResource(url);

    if (res) {
      const peopleList = res.results.map(({ name, url }) => {
        const id = getPeopleId(url);
        const img = getPeopleImage(id);

        return {
          id,
          name,
          img,
        };
      });

      setPeople(peopleList);
      setErrorApi(false);
    } else {
      setErrorApi(true);
    }
  };

  useEffect(() => {
    getResource(API_PEOPLE);
  }, []);
  // if (people !== null)
  return (
    <>
      <h1>Navigation</h1>
      {people && <PeopleList people={people} />}
    </>
  );
};

export default withErrorApi(PeoplePage);

// return (
//   <>
//     {errorApi ? (
//       <h2>Error</h2>
//     ) : (
//       <>
//         <h1>Navigation</h1>
//         {people && <PeopleList people={people} />}
//       </>
//     )}
//   </>
// );
