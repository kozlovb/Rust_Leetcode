import { FunctionComponent } from "react";
import styles from "./MasterButtonDesktop.module.css";

const MasterButtonDesktop: FunctionComponent = ({ className = "" }) => {
  return (
    <div className={[styles.masterbuttondesktop3, className].join(" ")}>
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
  );
};

export default MasterButtonDesktop;
