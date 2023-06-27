import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import favPageIcon from "./img/bookmark.svg";

import styles from "./Favorite.module.css";
import { Link } from "react-router-dom";

const Favorite = () => {
  const [count, setCount] = useState();
  const favorites = useSelector((state) => state.favoriteReducer);

  useEffect(() => {
    const length = Object.keys(favorites).length;
    length.toString().length > 2 ? setCount("...") : setCount(length);
  });

  return (
    <div className={styles.container}>
      <Link to="/favorites">
        <span className={styles.counter}>{count}</span>
        <img className={styles.favPageIcon} src={favPageIcon} alt="favorites" />
      </Link>
    </div>
  );
};

export default Favorite;
