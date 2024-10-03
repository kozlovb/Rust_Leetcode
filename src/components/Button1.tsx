import { FunctionComponent } from "react";
import styles from "./Button1.module.css";

const Button1: FunctionComponent = ({ className = "" }) => {
  return (
    <div className={[styles.button1, className].join(" ")}>
      <div className={styles.masterbuttondesktop1}>
        <img
          className={styles.heroiconsOutlinexMark}
          loading="lazy"
          alt=""
          src="/heroiconsoutlinexmark.svg"
        />
      </div>
    </div>
  );
};

export default Button1;
