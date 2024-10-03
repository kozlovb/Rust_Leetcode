import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FrameComponent4.module.css";

export type FrameComponent4Type = {
  className?: string;
  heroiconsOutlinestar?: string;
  heroiconsMinilockClosed?: string;
  heroiconsMiniclock?: string;

  /** Style props */
  propBackgroundImage?: CSSProperties["backgroundImage"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
};

const FrameComponent4: FunctionComponent<FrameComponent4Type> = ({
  className = "",
  propBackgroundImage,
  heroiconsOutlinestar,
  propBackgroundColor,
  heroiconsMinilockClosed,
  heroiconsMiniclock,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  const playStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  return (
    <div
      className={[styles.frameParent, className].join(" ")}
      style={frameDivStyle}
    >
      <div className={styles.frameGroup}>
        <div className={styles.djVuWrapper}>
          <div className={styles.djVu}>Déjà vu</div>
        </div>
        <div className={styles.favoris}>
          <img
            className={styles.heroiconsOutlinestar}
            loading="lazy"
            alt=""
            src={heroiconsOutlinestar}
          />
        </div>
      </div>
      <div className={styles.play} style={playStyle}>
        <img
          className={styles.heroiconsMinilockClosed}
          loading="lazy"
          alt=""
          src={heroiconsMinilockClosed}
        />
      </div>
      <div className={styles.frameContainer}>
        <div className={styles.heroiconsMiniclockParent}>
          <img
            className={styles.heroiconsMiniclock}
            alt=""
            src={heroiconsMiniclock}
          />
          <div className={styles.min}>10 min</div>
        </div>
        <b className={styles.titreDeLa}>Titre de la vidéo</b>
      </div>
    </div>
  );
};

export default FrameComponent4;
