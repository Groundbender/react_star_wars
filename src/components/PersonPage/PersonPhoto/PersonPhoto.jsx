import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import styles from "./PersonPhoto.module.css";
import { setPersonToFavorite, removePersonFromFavorite } from "@store/actions";

const PersonPhoto = ({ personPhoto, personName, personId }) => {
  const dispatch = useDispatch();

  const set = () =>
    dispatch(
      setPersonToFavorite({
        [personId]: {
          name: personName,
          img: personPhoto,
        },
      })
    );
  const remove = () => dispatch(removePersonFromFavorite(personId));

  return (
    <>
      <div className={styles.container}>
        <img className={styles.photo} src={personPhoto} alt={personName} />
      </div>
      <button onClick={set}>Добавить в избранное</button>
      <button onClick={remove}>Удалить из избранного</button>
    </>
  );
};

PersonPhoto.propTypes = {
  personPhoto: PropTypes.string,
  personId: PropTypes.string,
  personName: PropTypes.string,
};

export default PersonPhoto;
