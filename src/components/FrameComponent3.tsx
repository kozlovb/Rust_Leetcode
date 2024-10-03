import { FunctionComponent } from "react";
import styles from "./FrameComponent3.module.css";

const FrameComponent3: FunctionComponent = ({ className = "" }) => {
  return (
    <div className={[styles.frameParent6, className].join(" ")}>
      <img
        className={styles.instanceChild}
        loading="lazy"
        alt=""
        src="/group-32-1.svg"
      />
      <div className={styles.instanceItem} />
    </div>
  );
};

export default FrameComponent3;
