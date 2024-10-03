import { FunctionComponent } from "react";
import styles from "./FrameComponent1.module.css";

const FrameComponent1: FunctionComponent = ({ className = "" }) => {
  return (
    <div className={[styles.fieldWrapper, className].join(" ")}>
      <div className={styles.field}>
        <div className={styles.label1}>Label</div>
        <input className={styles.text7} placeholder="Placeholder" type="text" />
      </div>
    </div>
  );
};

export default FrameComponent1;
