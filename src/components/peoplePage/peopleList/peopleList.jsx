import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import styles from "./peopleList.module.css";
const PeopleList = ({ people }) => {
  return (
    <ul className={styles.list__container}>
      {people.map(({ name, img, id }) => (
        <li className={styles.list__item} key={id}>
          <Link to={`/people/${id}`}>
            <img className={styles.person__photo} src={img} alt="name" />
            <p>{name}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

PeopleList.propTypes = {
  people: PropTypes.array,
};

export default PeopleList;
