import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import styles from "./PersonPhoto.module.css";
import { setPersonToFavorite, removePersonFromFavorite } from "@store/actions";
import iconFav from "./img/favorite.svg";
import iconFavFill from "./img/favorite-fill.svg";

const PersonPhoto = ({
  personPhoto,
  personName,
  personId,
  personFavorite,
  setPersonFavorite,
}) => {
  const dispatch = useDispatch();

  const dispatchFavoritePeople = () => {
    if (personFavorite) {
      dispatch(removePersonFromFavorite(personId));
      setPersonFavorite(false);
    } else {
      dispatch(
        setPersonToFavorite({
          [personId]: {
            name: personName,
            img: personPhoto,
          },
        })
      );
      setPersonFavorite(true);
    }
  };

  return (
    <>
      <div className={styles.container}>
        <img
          onClick={dispatchFavoritePeople}
          className={styles.favorite}
          src={personFavorite ? iconFavFill : iconFav}
          alt="Add to favorite"
        />
        <img className={styles.photo} src={personPhoto} alt={personName} />
      </div>
    </>
  );
};

PersonPhoto.propTypes = {
  personPhoto: PropTypes.string,
  personId: PropTypes.string,
  personName: PropTypes.string,
  personFavorite: PropTypes.bool,
  setPersonToFavorite: PropTypes.func,
};

export default PersonPhoto;
