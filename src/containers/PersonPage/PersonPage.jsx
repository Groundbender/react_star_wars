import { useParams } from "react-router";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { withErrorApi } from "@hoc-helpers/withErrorApi";

import PersonInfo from "@components/PersonPage/PersonInfo/PersonInfo";
import PersonPhoto from "@components/PersonPage/PersonPhoto/PersonPhoto";
import PersonLinkBack from "@components/PersonPage/PersonLinkBack/PersonLinkBack";

import { getApiResource } from "@utils/network";
import { API_PERSON } from "@constants/api";
import { getPeopleImage } from "@services/getPeopleData";

import styles from "./PersonPage.module.css";

const PersonPage = ({ match, setErrorApi }) => {
  const { id } = useParams();
  const [personInfo, setPersonInfo] = useState(null);
  const [personName, setPersonName] = useState(null);
  const [personPhoto, setPersonPhoto] = useState(null);

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
