import { FunctionComponent } from "react";
import styles from "./Button.module.css";

const Button: FunctionComponent = ({ className = "" }) => {
  return (
    <div className={[styles.button3, className].join(" ")}>
      <div className={styles.masterbuttondesktop3}>
        <img
          className={styles.heroiconsOutlinearrowRight}
          alt=""
          src="/heroiconsoutlinearrowleft2.svg"
        />
        <div className={styles.text9}>Découvrir mon récapitulatif</div>
        <img
          className={styles.heroiconsOutlinearrowRight}
          alt=""
          src="/heroiconsoutlinearrowright1.svg"
        />
      </div>
    </div>
  );
};

export default Button;
