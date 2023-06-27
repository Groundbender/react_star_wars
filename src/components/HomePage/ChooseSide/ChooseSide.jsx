import PropTypes from "prop-types";

import {
  THEME_LIGHT,
  THEME_DARK,
  THEME_NEUTRAL,
  useTheme,
} from "@context/ThemeProvider";

import imgLightSide from "./img/light-side.jpg";
import imgDarkSide from "./img/dark-side.jpg";
import imgFalcon from "./img/falcon.jpg";
import styles from "./ChooseSide.module.css";
import cn from "classnames";
const ChooseSideButton = ({ theme, text, img, classes }) => {
  const isTheme = useTheme();

  return (
    <div
      className={cn(styles.item, classes)}
      theme={theme}
      onClick={() => isTheme.change(theme)}
    >
      <div className={styles.item__header}>{text}</div>
      <img className={styles.item__img} src={img} alt={text} />
    </div>
  );
};

ChooseSideButton.propTypes = {
  theme: PropTypes.string,
  text: PropTypes.string,
  img: PropTypes.string,
  classes: PropTypes.string,
};

const ChooseSide = () => {
  const elements = [
    {
      theme: THEME_LIGHT,
      text: "Light side",
      img: imgLightSide,
      classes: styles.item__light,
    },
    {
      theme: THEME_DARK,
      text: "Dark side",
      img: imgDarkSide,
      classes: styles.item__dark,
    },
    {
      theme: THEME_NEUTRAL,
      text: "I am Han Solo",
      img: imgFalcon,
      classes: styles.item__neutral,
    },
  ];
  return (
    <>
      <div className={styles.container}>
        {elements.map(({ theme, text, img, classes }, index) => (
          <ChooseSideButton
            key={index}
            theme={theme}
            text={text}
            img={img}
            classes={classes}
          />
        ))}
      </div>
    </>
  );
};

export default ChooseSide;
