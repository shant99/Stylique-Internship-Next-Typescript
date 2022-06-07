import { useState } from "react";
import styles from "./section6.module.scss";
import { v4 } from "uuid";
import AngleDown from "../../icons/AngleDown";
import AngleUp from "../../icons/AngleUp";
import { motion } from "framer-motion";

const tabs = [
  "Kostenlose Erstgespräch",
  "Integration deiner Produkte",
  "Effizientes Marketing",
  "Verkauf deiner Produkte",
  "Kein Risiko",
];
const tabsContent = [
  "Gemeinsam ermitteln wir deinen Nutzen und den damit verbundenen Mehrwert für deine Kunden.",
  "Im Dialog erarbeiten wir deine Strategie inkl. Verkaufskonzept: Zielsetzung und Darstellung auf der Plattform Produktauswahl und -koordination Integration auf die Plattform: Problemlose Kopplung mit bereits gelisteten Produkten Informationen zu deinem Unternehmen und deinen Standorten werden für eine Offline-Online-Vernetzung integriert",
  "Sichtbarkeit:  Durch die Verknüpfung der Produkte mit vielen Inspirationen und Partnern erhälst du größere Reichweite  Du entscheidest selbst ...  ... in welchem Umkreis du sichtbar bist ... welche Preise die jeweilige Zielgruppen sehen  Du willst noch mehr Reichweite?  Nimm an exklusiven Kampagnen teil. Wie z.B.: Marketingaktivitäten Kataloge für Architekten  Architekten-Muster-Schränke Ausschreibungen  Events u.v.m. Das Beste: Du erhälst wichtige Insights zu Kunden und Auswertungen von Kampagnen. ",
  "Entscheide selbst, wie du auf der Plattform verkaufst: Einfache Bedienung und persönlicher Service Keine Discount-Preise auf der Plattform: Du verkaufst über Qualität, nicht über den Preis Nutze die Möglichkeit, das Offline-Geschäft durch das Online-Geschäfte zu ergänzen Spare Zeit durch integrierte Angebots- und Zahlungsabwicklung Kunden sind bereits durch Online-Datenaufbereitung informiert und STYLIQUE-Kundenservice hilft dabei, deine Mitarbeiter zu entlasten",
  "Gemeinsam ermitteln wir deinen Nutzen und den damit verbundenen Mehrwert für deine Kunden.",
];

function Section6() {
  const [tabIndex, setTabIndex] = useState(0);
  const [underContent, setUnderContent] = useState(false);

  function viewContent() {
    const arr = JSON.parse(JSON.stringify(tabsContent));
    return arr.splice(tabIndex, 3);
  }

  const viewTabsContent = viewContent();

  function tabClickHandler(e, index) {
    setTabIndex(index);
    setUnderContent((prev) => !prev);
  }

  function tabsNavButtonClickHandler_Up(e) {
    setTabIndex((prev) => {
      if (prev === 0) {
        return tabs.length - 1;
      }
      return prev - 1;
    });
  }

  function tabsNavButtonClickHandler_Down(e) {
    setTabIndex((prev) => {
      if (prev === tabs.length - 1) {
        return 0;
      }
      return prev + 1;
    });
  }

  return (
    <div className={styles["section6-container"]}>
      <div className={styles["section6"]}>
        <h2 className={styles["section6-header"]}>
          Sichere dir exklusiv und unverbindlich deinen Test-Zugang{" "}
        </h2>
        <div className={styles["section6-tabs-container"]}>
          <div className={styles["section6-tabs-wrapper"]}>
            <div className={styles["section6-tabs"]}>
              {tabs.map((item, index) => {
                return (
                  <div key={v4()}>
                    <div key={v4()} className={styles["section6-tab-wrapper"]}>
                      <button
                        onClick={(e) => tabClickHandler(e, index)}
                        key={v4()}
                        className={
                          styles["section6-tab"] +
                          " " +
                          (tabIndex === index
                            ? styles["section6-tab-active"]
                            : "")
                        }
                      >
                        {item}
                      </button>
                      <span
                        className={
                          styles["section6-tab-index"] +
                          " " +
                          (tabIndex === index
                            ? styles["section6-tab-index-active"]
                            : "")
                        }
                      >
                        {index === tabs.length - 1 ? "!" : index + 1}
                      </span>
                    </div>
                    {underContent ? (
                      <motion.p                     initial={{ y: 100, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -10, opacity: 0 }}
                      transition={{ duration: 0.8 }}
                      className={styles["section6-tab-under-content"]}>
                        {tabIndex === index ? tabsContent[tabIndex] : ""}
                      </motion.p>
                    ) : (
                      ""
                    )}
                  </div>
                );
              })}
              <div className={styles["section6-tabs-nav-buttons"]}>
                <button
                  onClick={(e) => tabsNavButtonClickHandler_Up(e)}
                  className={styles["section6-tabs-nav-button"]}
                >
                  <AngleUp />
                </button>
                <button
                  onClick={(e) => tabsNavButtonClickHandler_Down(e)}
                  className={styles["section6-tabs-nav-button"]}
                >
                  <AngleDown />
                </button>
              </div>
            </div>
          </div>
          <div className={styles["section6-tabs-content"]}>
            {viewTabsContent.map((item, index) => {
              if (!index) {
                return (
                  <motion.p
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    key={v4()}
                    className={styles["section6-tab-content"]}
                  >
                    {item}
                  </motion.p>
                );
              }
              return (
                <motion.p
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 0.5 }}
                  exit={{ y: -10, opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  key={v4()}
                  className={styles["section6-tab-content"]}
                >
                  {item}
                </motion.p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section6;
