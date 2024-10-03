import { FunctionComponent } from "react";
import styles from "./MasterInput.module.css";

const MasterInput: FunctionComponent = ({ className = "" }) => {
  return (
    <div className={[styles.masterinput, className].join(" ")}>
      <div className={styles.top}>
        <div className={styles.label}>Label</div>
        <div className={styles.helpText}>Help text</div>
      </div>
      <div className={styles.fieldWrapper}>
        <div className={styles.field}>
          <div className={styles.label1}>Label</div>
          <input
            className={styles.text7}
            placeholder="Placeholder"
            type="text"
          />
        </div>
      </div>
      <div className={styles.caption}>
        Caption text, description, error notification
      </div>
    </div>
  );
};

export default MasterInput;
