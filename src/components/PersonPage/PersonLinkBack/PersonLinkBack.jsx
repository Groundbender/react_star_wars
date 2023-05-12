import { useNavigate } from "react-router";
import iconBack from "./img/back.svg";

import styles from "./PersonLinkBack.module.css";

const PersonLinkBack = () => {
  const navigate = useNavigate();

  const handleGoBack = (e) => {
    e.preventDefault();
    // ф-ия возвращает назад
    navigate(-1);
  };

  return (
    <a href="#" onClick={handleGoBack} className={styles.link}>
      <img styles={styles.link__img} src={iconBack} alt="Go back" />
      <span>Go back</span>
    </a>
  );
};
export default PersonLinkBack;
