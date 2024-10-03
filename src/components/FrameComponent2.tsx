import { FunctionComponent } from "react";
import styles from "./FrameComponent2.module.css";

const FrameComponent2: FunctionComponent = ({ className = "" }) => {
  return (
    <div className={[styles.frameDiv, className].join(" ")}>
      <div className={styles.wrapper}>
        <div className={styles.div}>3</div>
      </div>
      <div className={styles.votreContexte}>Vos objectifs</div>
    </div>
  );
};

export default FrameComponent2;
