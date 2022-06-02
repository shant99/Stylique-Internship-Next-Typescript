import styles from "./section1.module.scss";
import Trophy from "../../icons/Trophy";
import Shop from "../../icons/Shop";
import Hourglass from "../../icons/Hourglass";
import ArrowDown from "../../icons/ArrowDown";
import ButtonTermin from '../buttonTermin/ButtonTermin'

const Section1 = () => {


  return (
    <div className={styles["section1"]}>
      <div className={styles["section1-img-wrapper"]}>
          <div className={styles["section1-img-slice1-wrapper"]}>
            <p className={styles["section1-img-slice1"]}>
              Verkaufe schnell und einfach{" "}
            </p>
            <p className={styles["section1-img-slice1"]}>
              online ohne hohe Kosten
            </p>
          </div>
          <div className={styles["section1-img-slice2-wrapper"]}>
            <p className={styles["section1-img-slice2"]}>
              Inszeniere Dich und Deine Marken im{" "}
            </p>
            <p className={styles["section1-img-slice2"]}>
              hochwertigen Umfeld.
            </p>
          </div>
          <ButtonTermin className={styles['section1-img-slice3']} clickHandler={undefined}/>
        <div className={styles["section1-img-slice4-wrapper"]}>
          <a href="#section2"  className={styles["section1-img-slice4"]}>
            <ArrowDown />
          </a>
        </div>
      </div>

      <div className={styles["under-image"]}>
        <div className={styles["under-image-slice"]}>
          <Trophy className={styles["under-image-slice-child1"]} />
          <p>
            <span className={styles["under-image-slice-child2"]}>
              Spare Kosten und Mühe für den{" "}
            </span>
            <span className={styles["under-image-slice-child3"]}>
              eigenen Online-Shop.
            </span>
          </p>
        </div>
        <div className={styles["under-image-slice"]}>
          <Shop className={styles["under-image-slice-child1"]} />
          <p>
            <span className={styles["under-image-slice-child2"]}>
              Ermögliche den Online-Verkauf im
            </span>
            <span className={styles["under-image-slice-child3"]}>
              Einklang mit deinen Handelspartnern.
            </span>
          </p>
        </div>
        <div className={styles["under-image-slice"]}>
          <Hourglass className={styles["under-image-slice-child1"]} />
          <p>
            <span className={styles["under-image-slice-child2"]}>
              Reagiere jetzt auf verändertes
            </span>
            <span className={styles["under-image-slice-child3"]}>
              Kunden-und Einkaufsverhalten.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section1;
