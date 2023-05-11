import PropTypes from "prop-types";

import "../index.css";
import styles from "./UIButton.module.css";
import cn from "classnames";
const UIButton = ({ text, onClick, disabled, theme = "dark", classes }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(styles.button, styles[theme], classes)} // classes чтобы пробрасывать классыы извне (например из peopleNavigation)
    >
      {text}
    </button>
  );
};

UIButton.propTypes = {
  text: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  theme: PropTypes.string,
  classes: PropTypes.string,
};

export default UIButton;
