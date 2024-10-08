import { FunctionComponent } from "react";
import Container from "./Container";
import Input1 from "./Input1";
import Button from "./Button";
import styles from "./Root.module.css";

export type RootType = {
  className?: string;
};

const Root: FunctionComponent<RootType> = ({ className = "" }) => {
  return (
    <div className={[styles.root, className].join(" ")}>
      <header className={styles.container}>
        <img className={styles.vectorIcon} alt="" src="/vector.svg" />
        <img className={styles.vectorIcon1} alt="" src="/vector-1.svg" />
        <div className={styles.containerInner}>
          <div className={styles.frameWrapper}>
            <div className={styles.discuterDeVotreSituationWrapper}>
              <h2 className={styles.discuterDeVotre}>
                Discuter de votre situation
              </h2>
            </div>
          </div>
        </div>
      </header>
      <section className={styles.container1}>
        <Container />
        <div className={styles.inputParent}>
          <Input1 />
          <Button
            propHeight="40px"
            heroiconsOutlinearrowLeft="/heroiconsoutlinearrowleft1.svg"
            text="Envoyer"
            heroiconsOutlinearrowRight="/heroiconsoutlinearrowright.svg"
            iconeR={false}
            iconeL={false}
            propBackgroundColor="unset"
            propAlignSelf="stretch"
            propFlex="1"
            propBorder="1px solid #42225d"
            propColor="#42225d"
            masterButtonDesktopPadding="9px 14px"
          />
        </div>
        <div className={styles.buttonWrapper}>
          <Button
            heroiconsOutlinearrowLeft="/heroiconsoutlinearrowleft2.svg"
            text="Découvrir mon récapitulatif"
            heroiconsOutlinearrowRight="/heroiconsoutlinearrowright1.svg"
            iconeR={false}
            iconeL={false}
          />
        </div>
      </section>
    </div>
  );
};

export default Root;
