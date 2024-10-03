import { FunctionComponent } from "react";
import styles from "./FrameComponent.module.css";

const FrameComponent: FunctionComponent = ({ className = "" }) => {
  return (
    <div className={[styles.frameParent1, className].join(" ")}>
      <div className={styles.frameWrapper}>
        <div className={styles.shapesWrapper}>
          <div className={styles.shapes}>
            <img
              className={styles.shapesChild}
              loading="lazy"
              alt=""
              src="/ellipse-16@2x.png"
            />
            <div className={styles.shapesItem} />
          </div>
        </div>
      </div>
      <div className={styles.placeholder2}>
        Je vois, cela semble être une période exigeante pour vous et votre
        équipe. En plus du retard sur le planning, y a-t-il d'autres facteurs
        qui contribuent à votre stress actuellement ?
      </div>
    </div>
  );
};

export default FrameComponent;
