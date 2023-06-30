import PropTypes from "prop-types";
import styles from "./UIVideo.module.css";
import cn from "classnames";
import { useEffect, useRef } from "react";
const UIVideo = ({ src, classes, playbackRate = 1.0 }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    videoRef.current.playbackRate = playbackRate;
  }, []);
  return (
    <video
      ref={videoRef}
      loop
      autoPlay
      muted
      className={cn(styles.video, classes)}
    >
      <source src={src} />
    </video>
  );
};

UIVideo.propTypes = {
  src: PropTypes.string,
  classes: PropTypes.string,
  playbackRate: PropTypes.number,
};

export default UIVideo;
