import { FunctionComponent } from "react";
import styles from "./ChatPage.module.css";
import PencilIcon from "../components/PencilIcon";

const ChatPage: FunctionComponent = () => {
  return (
    <div className={styles.chatBot}>
      <header className={styles.topbar}>
        <div className={styles.breadcrumbs}>
          <div className={styles.breadcrumbs1}>
            <img className={styles.separatorIcon} alt="" src="/separator.svg" />
            <div className={styles.text}>Breadcrumbs</div>
          </div>
          <div className={styles.breadcrumbs2}>
            <img
              className={styles.separatorIcon1}
              alt=""
              src="/separator.svg"
            />
            <div className={styles.text}>Breadcrumbs</div>
          </div>
          <div className={styles.breadcrumbs2}>
            <img
              className={styles.separatorIcon1}
              alt=""
              src="/separator.svg"
            />
            <div className={styles.text}>Breadcrumbs</div>
          </div>
          <div className={styles.breadcrumbs2}>
            <img
              className={styles.separatorIcon1}
              alt=""
              src="/separator.svg"
            />
            <div className={styles.text}>Breadcrumbs</div>
          </div>
          <div className={styles.breadcrumbs2}>
            <img
              className={styles.separatorIcon1}
              alt=""
              src="/separator.svg"
            />
            <div className={styles.text}>Breadcrumbs</div>
          </div>
          <div className={styles.breadcrumbs6}>
            <img
              className={styles.separatorIcon1}
              alt=""
              src="/separator.svg"
            />
            <div className={styles.text}>Breadcrumbs</div>
          </div>
        </div>
        <div className={styles.button}>
          <div className={styles.masterbuttondesktop}>
            <img
              className={styles.heroiconsOutlinearrowLeft}
              loading="lazy"
              alt=""
              src="/heroiconsoutlinearrowleft.svg"
            />
          </div>
        </div>
        <div className={styles.content}>
          <PencilIcon />
          <div className={styles.difficultCommuniquerParent}>
          </div>
        </div>
        <div className={styles.searchBar}>
          <a className={styles.text6}>Quitter</a>
          <div className={styles.button1}>
            <div className={styles.masterbuttondesktop1}>
              <img
                className={styles.heroiconsOutlinexMark}
                loading="lazy"
                alt=""
                src="/heroiconsoutlinexmark.svg"
              />
            </div>
          </div>
        </div>
      </header>
      <main className={styles.main}>
        <section className={styles.instanceParent}>
          <div className={styles.frameParent}>
            <div className={styles.frameGroup}>
              <div className={styles.heroiconsOutlinecheckWrapper}>
                <img
                  className={styles.heroiconsOutlinecheck}
                  loading="lazy"
                  alt=""
                  src="/heroiconsoutlinecheck.svg"
                />
              </div>
              <b className={styles.votreSupport}>Votre support</b>
            </div>
            <div className={styles.divider}>
              <div className={styles.divider1} />
            </div>
            <div className={styles.frameContainer}>
              <div className={styles.heroiconsOutlinecheckWrapper}>
                <img
                  className={styles.heroiconsOutlinecheck}
                  loading="lazy"
                  alt=""
                  src="/heroiconsoutlinecheck.svg"
                />
              </div>
              <b className={styles.vosObjectifs}>Vos objectifs</b>
            </div>
            <div className={styles.divider}>
              <div className={styles.divider1} />
            </div>
            <div className={styles.frameDiv}>
              <div className={styles.wrapper}>
                <div className={styles.div}>3</div>
              </div>
              <div className={styles.votreContexte}>Vos objectifs</div>
            </div>
          </div>
          <div className={styles.rootParent}>
            <div className={styles.root}>
              <div className={styles.container}>
                <img className={styles.vectorIcon} alt="" src="/vector.svg" />
                <h1
                  className={styles.containerChild}
                >Discuter de votre situation</h1>
              </div>
              <div className={styles.container1}>
                <div className={styles.container2}>
                  <div className={styles.container2a}>
                    <img
                      className={styles.placeholderWrapperChild}
                      loading="lazy"
                      alt=""
                      src="/group-37.svg"
                    />
                    <div className={styles.placeholderContainer}>

                      <p className={styles.bienvenueSurCe}>
                        Bienvenue sur ce Chatbot ! Si vous avez des questions ou besoin d'aide, n'hésitez pas à me le faire savoir. Je suis là pour
                        vous assister !
                      </p>
                    </div>
                  </div>

                  <div className={styles.frameParent3}>
                    <div className={styles.frameWrapper}>
                      <div className={styles.shapesWrapper}>
                        <div className={styles.shapes}>
                          <img
                            className={styles.frameItem}
                            alt=""
                            src="/chat-avatar.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className={styles.placeholder4}

                    >Décrivez votre situation</div>
                  </div>
                </div>

                <footer className={styles.inputParent}>
                  <div className={styles.input}>

                    <div className={styles.field}>
                      <div className={styles.label1}>Label</div>
                      <input
                        className={styles.text7}
                        placeholder="Placeholder"
                        type="text"
                      />
                    </div>

                  </div>
                  <div className={styles.button2}>
                    <div className={styles.masterbuttondesktop2}>

                      <div className={styles.text8}>Envoyer</div>

                    </div>
                  </div>
                </footer>
                <div className={styles.buttonWrapper}>
                    <div className={styles.masterbuttondesktop3}>

                      <div className={styles.text9}>
                        Découvrir mon récapitulatif
                      </div>

                    </div>
                </div>
              </div>
            </div>
            
            <div className={styles.rightPanel}>
              <div className={styles.sidebar}>
                <img
                  className={styles.sidebarHeaderIcon}
                  loading="lazy"
                  alt=""
                  src="/frame-74940@2x.png"
                />
                <div className={styles.contentContainer}>
                  <div className={styles.assistantHeaderParent}>
                    <div className={styles.contentContainer}>
                      <div className={styles.votreAssistant}>
                        VOTRE ASSISTANT
                      </div>
                      <h2 className={styles.commentDiscuterAvec}>
                        Comment dialoguer avec l’IA ?
                      </h2>
                    </div>
                    <div className={styles.help}>
                      <div className={styles.helpButtonContainer}>
                        <img
                          className={styles.helpButtonContainerChild}
                          alt=""
                          src="/group-29.svg"
                        />
                      </div>
                      <img
                        className={styles.component2Icon}
                        alt=""
                        src="/component-2.svg"
                      />
                    </div>
                  </div>
                </div>
                <img
                  className={styles.groupIcon}
                  loading="lazy"
                  alt=""
                  src="/group.svg"
                />
              </div>
              <div className={styles.cardMembership}>
                <div className={styles.cardContainer}>
                <div className={styles.frameParent6}>
                      <img
                        className={styles.instanceChild}
                        loading="lazy"
                        alt=""
                        src="/group-32-1.svg"
                      />
                    </div>
                  <div className={styles.cardBackground} />
                  <img
                    className={styles.intersectIcon}
                    alt=""
                    src="/intersect.svg"
                  />
                  <div className={styles.cardContent}>
                    <img
                      className={styles.cardContentChild}
                      alt=""
                      src="/group-32.svg"
                    />
                    <div className={styles.cardHeader} />
                    
                  </div>
                  <div className={styles.progressInfo}>
                    <div className={styles.rocketContainer} />
                    <div className={styles.progressIndicatorBar}>
                      <div className={styles.track} />
                      <div className={styles.fill} />
                      <div className={styles.fill1} />
                      <div className={styles.fill2} />
                      <div className={styles.fill3} />
                      <div className={styles.fill4} />
                      <div className={styles.fill5} />
                    </div>
                    <div className={styles.label}>
                      Vous avez complété la première étape
                    </div>
                  </div>
                  <div className={styles.uneVraisFuseWrapper}>
                    <h2 className={styles.uneVraisFuse}>Une vraie fusée</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ChatPage;
