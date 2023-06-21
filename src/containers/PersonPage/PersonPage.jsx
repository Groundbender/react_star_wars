import { useParams } from "react-router";
import React, { useEffect, useState, Suspense } from "react";
import PropTypes from "prop-types";
import { withErrorApi } from "@hoc-helpers/withErrorApi";

import PersonInfo from "@components/PersonPage/PersonInfo/PersonInfo";
import PersonPhoto from "@components/PersonPage/PersonPhoto/PersonPhoto";
import PersonLinkBack from "@components/PersonPage/PersonLinkBack/PersonLinkBack";

import { getApiResource } from "@utils/network";
import { API_PERSON } from "@constants/api";
import { getPeopleImage } from "@services/getPeopleData";
import UILoading from "@UI/UILoading/UILoading";
import styles from "./PersonPage.module.css";

// import PersonFilms from "@components/PersonPage/PersonFilms/PersonFilms";

const PersonFilms = React.lazy(() =>
  import("@components/PersonPage/PersonFilms/PersonFilms")
);

const PersonPage = ({ match, setErrorApi }) => {
  const { id } = useParams();
  const [personInfo, setPersonInfo] = useState(null);
  const [personName, setPersonName] = useState(null);
  const [personPhoto, setPersonPhoto] = useState(null);
  const [personFilms, setPersonFilms] = useState(null);

  useEffect(() => {
    (async () => {
      const res = await getApiResource(`${API_PERSON}/${id}/`);

      console.log(res);

      if (res) {
        setPersonInfo([
          {
            title: "Height",
            data: res.height,
          },
          {
            title: "Weight",
            data: res.mass,
          },
          {
            title: "Gender",
            data: res.gender,
          },
          {
            title: "Name",
            data: res.name,
          },
          {
            title: "Birth Year",
            data: res.birth_year,
          },
          {
            title: "Skin Color",
            data: res.skin_color,
          },
          {
            title: "Hair Color",
            data: res.hair_color,
          },
        ]);

        setPersonName(res.name);
        setPersonPhoto(getPeopleImage(id));

        // if (res.films !== 0)
        res.films.length && setPersonFilms(res.films);

        setErrorApi(false);
      } else {
        setErrorApi(true);
      }
    })();
  }, []);
  return (
    <>
      <PersonLinkBack />
      <div className={styles.wrapper}>
        <span className={styles.person__name}>{personName}</span>

        <div className={styles.container}>
          <PersonPhoto personName={personName} personPhoto={personPhoto} />

          {personInfo && <PersonInfo personInfo={personInfo} />}

          {personFilms && (
            <Suspense fallback={<UILoading />}>
              <PersonFilms personFilms={personFilms} />
            </Suspense>
          )}
        </div>
      </div>
    </>
  );
};

PersonPage.propTypes = {
  match: PropTypes.object,
  setErrorApi: PropTypes.func,
};

export default withErrorApi(PersonPage);
