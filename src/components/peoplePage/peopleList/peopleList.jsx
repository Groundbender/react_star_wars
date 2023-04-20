import styles from "./peopleList.module.css";

const PeopleList = ({ people }) => {
  return (
    <ul className={styles.list__container}>
      {people.map(({ name, img, id }) => (
        <li className={styles.list__item} key={id}>
          <a href="#">
            <img className={styles.person__photo} src={img} alt="name" />
            <p>{name}</p>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default PeopleList;
