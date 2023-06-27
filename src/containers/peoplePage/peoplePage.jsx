import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { withErrorApi } from "@hoc-helpers/withErrorApi";

import PeopleList from "@components/peoplePage/peopleList/peopleList";
import PeopleNavigation from "@components/peoplePage/PeopleNavigation/PeopleNavigation";

import { getApiResource, changeHTTP } from "@utils/network";

import { API_PEOPLE } from "@constants/api";
import UILoading from "@components/UI/UILoading";

import {
  getPeopleId,
  getPeopleImage,
  getPeoplePageId,
} from "@services/getPeopleData";
import { useQueryParams } from "@hooks/useQueryParams";
import styles from "./peoplePage.module.css";

const PeoplePage = ({ setErrorApi }) => {
  const [people, setPeople] = useState(null);
  const [prevPage, setPrevPage] = useState(null);
  const [nextPage, setNextPage] = useState(null);
  const [counterPage, setCounterPage] = useState(1);
  // const [errorApi, setErrorApi] = useState(false);
  const [loading, setLoading] = useState(true);
  const query = useQueryParams();
  const queryPage = query.get("page");

  const getResource = async (url) => {
    setLoading(true);
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
      setLoading(false);
      setPeople(peopleList);
      setPrevPage(changeHTTP(res.previous));
      setNextPage(changeHTTP(res.next));
      setCounterPage(getPeoplePageId(url));
      setErrorApi(false);
    } else {
      setLoading(false);

      setErrorApi(true);
    }
  };

  useEffect(() => {
    getResource(API_PEOPLE + queryPage);
  }, []);

  // if (people !== null)
  return (
    <>
      <PeopleNavigation
        getResource={getResource}
        prevPage={prevPage}
        nextPage={nextPage}
        counterPage={counterPage}
      />
      {loading && (
        <div className={styles.loading__container}>
          <UILoading className={styles.character__loader} />
        </div>
      )}
      {people && !loading && <PeopleList people={people} />}
    </>
  );
};

PeoplePage.propTypes = {
  setErrorApi: PropTypes.func,
};

export default withErrorApi(PeoplePage);
