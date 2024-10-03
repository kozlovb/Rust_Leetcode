import { FunctionComponent } from "react";
import styles from "./Help.module.css";

const Help: FunctionComponent = ({ className = "" }) => {
  return (
    <div className={[styles.help, className].join(" ")}>
      <div className={styles.helpButtonContainer}>
        <img
          className={styles.helpButtonContainerChild}
          alt=""
          src="/group-29.svg"
        />
      </div>
      <img className={styles.component2Icon} alt="" src="/component-2.svg" />
    </div>
  );
};

export default Help;
