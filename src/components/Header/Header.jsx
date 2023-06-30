import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  THEME_LIGHT,
  THEME_DARK,
  THEME_NEUTRAL,
  useTheme,
} from "@context/ThemeProvider";
import Favorite from "../Favorite/Favorite";
import imgDroid from "./img/droid.svg";
import imgLightSaber from "./img/lightsaber.svg";
import imgSpaceStation from "./img/space-station.svg";

import styles from "./Header.module.css";

const Header = () => {
  const [icon, setIcon] = useState(imgSpaceStation);
  const isTheme = useTheme();

  useEffect(() => {
    switch (isTheme.theme) {
      case THEME_LIGHT:
        setIcon(imgLightSaber);
        break;
      case THEME_DARK:
        setIcon(imgSpaceStation);
        break;
      case THEME_NEUTRAL:
        setIcon(imgDroid);
        break;

      default:
        setIcon(imgSpaceStation);
        break;
    }
  }, [isTheme]);

  return (
    <div className={styles.container}>
      <img className={styles.logo} src={icon} alt="Star Wars Logo" />

      <ul className={styles.list__container}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/people?page=1">People</NavLink>
        </li>
        <li>
          <NavLink to="/search">Search</NavLink>
        </li>
        <li>
          <NavLink to="/fail">Fail</NavLink>
        </li>
        <li>
          <NavLink to="/not-found">Not Found</NavLink>
        </li>
      </ul>
      <Favorite />
    </div>
  );
};

export default Header;
