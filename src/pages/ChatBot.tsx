import { FunctionComponent } from "react";
import styles from "./ChatBot.module.css";

const ChatBot: FunctionComponent = () => {
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
          <div className={styles.difficultCommuniquerParent}>
            <div className={styles.difficultCommuniquer}>
              Gestion du stress de fin d’année
            </div>
            <input
              className={styles.heroiconsMinipencilSquare}
              type="checkbox"
            />
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
                <img
                  className={styles.vectorIcon1}
                  alt=""
                  src="/vector-1.svg"
                />
                <input
                  className={styles.containerChild}
                  placeholder="Discuter de votre situation"
                  type="text"
                />
              </div>
              <div className={styles.container1}>
                <div className={styles.container2}>
                  <div className={styles.rectangleParent}>
                    <img
                      className={styles.frameChild}
                      loading="lazy"
                      alt=""
                      src="/rectangle-1@2x.png"
                    />
                    <div className={styles.placeholder}>
                      Bonjour, je me sens stressée, je suis confrontée à une
                      charge de travail importante et une deadline imminente.
                      Nous avons un projet majeur qui doit être finalisé avant
                      les vacances, et il semble que nous soyons en retard sur
                      notre planning. Je me sens responsable, car en tant que
                      Chef de Projet, c'est à moi de veiller à ce que tout soit
                      livré à temps. De plus, l'équipe est sous pression et je
                      crains que cela ne se répercute sur leur bien-être et leur
                      productivité.
                    </div>
                    <div className={styles.placeholderWrapperParent}>
                      <div className={styles.placeholderWrapper}>
                        <img
                          className={styles.placeholderWrapperChild}
                          loading="lazy"
                          alt=""
                          src="/group-37.svg"
                        />
                      </div>
                      <div className={styles.placeholderContainer}>
                        <div className={styles.placeholder1}>
                          <p
                            className={styles.bienvenueSurCe}
                          >{`Bienvenue sur ce Chatbot ! Si vous avez des questions ou besoin d'aide, `}</p>
                          <p className={styles.bienvenueSurCe}>
                            n'hésitez pas à me le faire savoir. Je suis là pour
                            vous assister !
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameParent1}>
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
                      Je vois, cela semble être une période exigeante pour vous
                      et votre équipe. En plus du retard sur le planning, y
                      a-t-il d'autres facteurs qui contribuent à votre stress
                      actuellement ?
                    </div>
                  </div>
                  <div className={styles.frameParent2}>
                    <div className={styles.placeholderContainerWrapper}>
                      <div className={styles.placeholderContainer1}>
                        <img
                          className={styles.frameChild}
                          loading="lazy"
                          alt=""
                          src="/rectangle-1@2x.png"
                        />
                        <div className={styles.placeholder3}>
                          Oui, en plus des délais, il y a la pression pour
                          maintenir la qualité du travail. Cela m'oblige à
                          jongler entre différentes tâches et responsabilités,
                          ce qui est assez épuisant.
                        </div>
                      </div>
                    </div>
                    <div className={styles.frameParent3}>
                      <div className={styles.frameWrapper}>
                        <div className={styles.shapesWrapper}>
                          <div className={styles.shapes}>
                            <img
                              className={styles.frameItem}
                              alt=""
                              src="/ellipse-16@2x.png"
                            />
                            <div className={styles.shapesItem} />
                          </div>
                        </div>
                      </div>
                      <input
                        className={styles.placeholder4}
                        placeholder="Décrivez votre situation"
                        type="text"
                      />
                    </div>
                    <div className={styles.frameParent4}>
                      <div className={styles.frameWrapper}>
                        <div className={styles.shapesWrapper}>
                          <div className={styles.shapes}>
                            <img
                              className={styles.shapesChild}
                              alt=""
                              src="/ellipse-16@2x.png"
                            />
                            <div className={styles.shapesItem} />
                          </div>
                        </div>
                      </div>
                      <div className={styles.placeholder2}>
                        Cela semble être un défi de taille, jongler entre la
                        gestion des attentes, la qualité du projet et le
                        bien-être de l'équipe. Comment pensez-vous que cette
                        situation affecte votre équipe ?
                      </div>
                    </div>
                  </div>
                  <div className={styles.rectangleGroup}>
                    <img
                      className={styles.frameChild}
                      loading="lazy"
                      alt=""
                      src="/rectangle-1@2x.png"
                    />
                    <div className={styles.placeholder6}>
                      Je peux voir qu'ils sont également stressés et fatigués.
                      Certains commencent à montrer des signes de frustration,
                      ce qui est compréhensible, mais cela crée une ambiance
                      tendue au sein de l'équipe.
                    </div>
                  </div>
                  <div className={styles.frameParent1}>
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
                    <div className={styles.placeholder6}>
                      Merci, Sophie, pour ce partage. Sur la base de cette
                      analyse, je vais vous faire une fiche récapitulatif de
                      votre contexte pour cela passez à l’étape suivante.
                    </div>
                  </div>
                </div>
                <footer className={styles.inputParent}>
                  <div className={styles.input}>
                    <div className={styles.masterinput}>
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
                  </div>
                  <div className={styles.button2}>
                    <div className={styles.masterbuttondesktop2}>
                      <img
                        className={styles.heroiconsOutlinearrowRight}
                        alt=""
                        src="/heroiconsoutlinearrowleft1.svg"
                      />
                      <div className={styles.text8}>Envoyer</div>
                      <img
                        className={styles.heroiconsOutlinearrowRight}
                        alt=""
                        src="/heroiconsoutlinearrowright.svg"
                      />
                    </div>
                  </div>
                </footer>
                <div className={styles.buttonWrapper}>
                  <div className={styles.button3}>
                    <div className={styles.masterbuttondesktop3}>
                      <img
                        className={styles.heroiconsOutlinearrowRight}
                        alt=""
                        src="/heroiconsoutlinearrowleft2.svg"
                      />
                      <div className={styles.text9}>
                        Découvrir mon récapitulatif
                      </div>
                      <img
                        className={styles.heroiconsOutlinearrowRight}
                        alt=""
                        src="/heroiconsoutlinearrowright1.svg"
                      />
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
                  <div className={styles.cardBackground} />
                  <img
                    className={styles.intersectIcon}
                    rows={5}
                    cols={18}
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
                    <div className={styles.frameParent6}>
                      <img
                        className={styles.instanceChild}
                        loading="lazy"
                        alt=""
                        src="/group-32-1.svg"
                      />
                      <div className={styles.instanceItem} />
                    </div>
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

export default ChatBot;
