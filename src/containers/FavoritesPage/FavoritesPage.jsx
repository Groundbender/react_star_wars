import { useSelector, useDispatch } from "react-redux";
import styles from "./FavoritesPage.module.css";

const FavoritesPage = () => {
  const fav = useSelector((state) => state.favoriteReducer);

  console.log(fav);

  return <h1>FavoritesPage</h1>;
};

export default FavoritesPage;
