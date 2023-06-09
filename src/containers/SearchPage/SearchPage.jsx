import { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import { debounce } from "lodash";
import { getApiResource } from "@utils/network";
import { API_SEARCH } from "../../constants/api";
import { withErrorApi } from "@hoc-helpers/withErrorApi";
import { getPeopleId, getPeopleImage } from "@services/getPeopleData";
import SearchPageInfo from "@components/SearchPage/SearchPageInfo/SearchPageInfo";
import UIinput from "@UI/Uiinput/UIinput";

import styles from "./SearchPage.module.css";

const SearchPage = ({ setErrorApi }) => {
  const [inputSearchValue, setInputSearchValue] = useState("");
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(false);

  const getResponse = async (param) => {
    setLoading(true);
    const res = await getApiResource(API_SEARCH + param);

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
      setLoading(false);
    } else {
      setLoading(false);

      setErrorApi(true);
    }
  };

  useEffect(() => {
    getResponse("");
  }, []);

  const debouncedGetResponse = useCallback(
    debounce((value) => getResponse(value), 300),
    [people]
  );

  const handleInputChange = (value) => {
    setInputSearchValue(value);
    debouncedGetResponse(value);
  };

  return (
    <>
      <h1 className="header__text">Search</h1>
      <UIinput
        value={inputSearchValue}
        handleInputChange={handleInputChange}
        placeholder="Search character..."
        classes={styles.input__search}
      />

      <SearchPageInfo loading={loading} people={people} />
    </>
  );
};

SearchPage.propTypes = {
  setErrorApi: PropTypes.func,
};

export default withErrorApi(SearchPage);
