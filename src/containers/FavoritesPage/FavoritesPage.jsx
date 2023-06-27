import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";

import styles from "./FavoritesPage.module.css";
import PeopleList from "../../components/peoplePage/peopleList/peopleList";

const FavoritesPage = () => {
  const [people, setPeople] = useState([]);
  const favorite = useSelector((state) => state.favoriteReducer);

  useEffect(() => {
    const arr = Object.entries(favorite);

    if (arr.length) {
      const res = arr.map((item) => ({
        id: item[0],
        // name: item[1].name,
        // img: item[1].img,
        ...item[1],
      }));
      setPeople(res);
    }
  }, []);

  return (
    <>
      <h1 className="header__text">FavoritesPage</h1>
      {people.length ? (
        <PeopleList people={people} />
      ) : (
        <h2 className={styles.comment}>No characters</h2>
      )}
    </>
  );
};

export default FavoritesPage;
