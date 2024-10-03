import { FunctionComponent } from "react";
import TopBar from "../components/TopBar";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent4 from "../components/FrameComponent4";
import Button from "../components/Button";
import Sidebar from "../components/Sidebar";
import styles from "./ChatBot1.module.css";

const ChatBot: FunctionComponent = () => {
  return (
    <div className={styles.chatBot}>
      <TopBar
        topBarFlexWrap="unset"
        topBarTop="0"
        topBarPosition="sticky"
        propHeight="32px"
        propHeight1="unset"
        propPadding="0px 0px 0px"
        propPadding1="unset"
        propOverflow="unset"
        propOverflow1="hidden"
      />
      <main className={styles.chatBotInner}>
        <section className={styles.stepperEntrepriseParent}>
          <div className={styles.stepperEntreprise}>
            <FrameComponent2
              frameDivFlex="1"
              frameDivMinWidth="81px"
              frameDivPadding="unset"
              placeholderBackgroundColor="#42225d"
              prop="1"
              aTextDecoration="unset"
              aWidth="unset"
              aDisplay="unset"
              votreContexte="Votre support"
              votreContexteColor="#42225d"
              votreContexteMinWidth="89px"
              votreContexteFontWeight="bold"
              votreContexteDisplay="inline-block"
            />
            <div className={styles.divider}>
              <div className={styles.divider1} />
            </div>
            <FrameComponent2
              frameDivFlex="1"
              frameDivMinWidth="81px"
              frameDivPadding="0px 0px 0px 0px"
              placeholderBackgroundColor="#cbd5e1"
              prop="2"
              aTextDecoration="none"
              aWidth="7px"
              aDisplay="inline-block"
              votreContexte="Votre contexte"
              votreContexteColor="#546174"
              votreContexteMinWidth="90px"
              votreContexteFontWeight="unset"
              votreContexteDisplay="inline-block"
            />
            <div className={styles.divider}>
              <div className={styles.divider1} />
            </div>
            <FrameComponent2
              frameDivFlex="1"
              frameDivMinWidth="74px"
              frameDivPadding="unset"
              placeholderBackgroundColor="#cbd5e1"
              prop="3"
              aTextDecoration="unset"
              aWidth="7px"
              aDisplay="inline-block"
              votreContexte="Vos objectifs"
              votreContexteColor="#546174"
              votreContexteMinWidth="unset"
              votreContexteFontWeight="unset"
              votreContexteDisplay="unset"
            />
          </div>
          <div className={styles.training}>
            <div className={styles.trainingContent}>
              <div className={styles.trainingHeader}>
                <div className={styles.container}>
                  <img
                    className={styles.illustrationElementOne}
                    alt=""
                    src="/vector.svg"
                  />
                  <img
                    className={styles.illustrationElementTwo}
                    alt=""
                    src="/vector-1.svg"
                  />
                  <input
                    className={styles.trainingTitleContainer}
                    placeholder="Votre support de formation"
                    type="text"
                  />
                </div>
                <div className={styles.container1}>
                  <div className={styles.descriptionContainer}>
                    <div className={styles.visualiserLaSituationPourEParent}>
                      <h3 className={styles.visualiserLaSituation}>
                        Visualiser la situation pour ensuite l’analyser
                      </h3>
                      <div className={styles.explorezCeSupport}>
                        Explorez ce support pour plonger au cœur d'une situation
                        réelle, analysez-la pour en comprendre les dynamiques et
                        affinez vos compétences d'analyse critique.
                      </div>
                    </div>
                    <div className={styles.trainingActions}>
                      <FrameComponent4
                        propBackgroundImage="url('/file@3x.png')"
                        heroiconsOutlinestar="pending_I15:12934;554:22113;554:21903"
                        propBackgroundColor="#a8e3d8"
                        heroiconsMinilockClosed="/heroiconsminiplay.svg"
                        heroiconsMiniclock="/heroiconsminiclock@2x.png"
                      />
                      <FrameComponent4
                        propBackgroundImage="url('/frame-74818@3x.png')"
                        heroiconsOutlinestar="pending_I15:12935;554:22113;554:21903"
                        propBackgroundColor="#bbc6d5"
                        heroiconsMinilockClosed="/heroiconsminilockclosed@2x.png"
                        heroiconsMiniclock="/heroiconsminiclock-1@2x.png"
                      />
                      <FrameComponent4
                        heroiconsOutlinestar="pending_I15:12936;554:22113;554:21903"
                        heroiconsMinilockClosed="/heroiconsminilockclosed-1@2x.png"
                        heroiconsMiniclock="/heroiconsminiclock1@2x.png"
                      />
                    </div>
                  </div>
                  <div className={styles.buttonWrapper}>
                    <Button
                      propHeight="unset"
                      heroiconsOutlinearrowLeft="/heroiconsoutlinearrowleft2.svg"
                      text="Débuter l'analyse avec l'IA"
                      heroiconsOutlinearrowRight="/heroiconsoutlinearrowright1.svg"
                      iconeR={false}
                      iconeL={false}
                      propBackgroundColor="#42225d"
                      propAlignSelf="unset"
                      propFlex="unset"
                      propBorder="unset"
                      propColor="#f8fafc"
                      masterButtonDesktopPadding="var(--spacing-spacing-sm) var(--padding-mini)"
                    />
                  </div>
                </div>
              </div>
            </div>
            <Sidebar
              sidebarHeight="847px"
              frameSectionHeight="unset"
              frameSectionFlex="1"
              commentDiscuterAvecLIA="Comment analyser ce support de formation ?"
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default ChatBot;
