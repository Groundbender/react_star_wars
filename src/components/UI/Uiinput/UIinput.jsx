import PropTypes from "prop-types";
import styles from "./UIinput.module.css";

import imgCancel from "./img/cancel.svg";

import cn from "classnames";
import "../index.css";

const UIinput = ({ value, handleInputChange, placeholder, classes }) => {
  return (
    <div className={cn(styles.wrapper__input, classes)}>
      <input
        type="text"
        value={value}
        onChange={(e) => handleInputChange(e.target.value)}
        placeholder={placeholder}
        className={styles.input}
      />
      <img
        onClick={() => value && handleInputChange("")}
        className={cn(styles.clear, !value && styles.clear__disabled)}
        src={imgCancel}
        alt="cancel img"
      />
    </div>
  );
};

UIinput.propTypes = {
  value: PropTypes.string,
  handleInputChange: PropTypes.func,

  placeholder: PropTypes.string,
  classes: PropTypes.string,
};
export default UIinput;
