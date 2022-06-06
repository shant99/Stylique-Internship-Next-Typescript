import styles from "./section1.module.scss";
import Trophy from "../../icons/Trophy";
import Shop from "../../icons/Shop";
import Hourglass from "../../icons/Hourglass";
import ArrowDown from "../../icons/ArrowDown";
import ButtonTermin from "../buttonTermin/ButtonTermin";
import { useDispatch, useSelector } from "react-redux";

import { MouseEvent, useRef } from "react";

const Section1 = ({}) => {
  const { section2 } = useSelector((state: any) => state.vendorsPageSlice);

  const downHandler = () => {
    window.scroll({
      behavior: "smooth",
      top: section2,
    });
  };

  return (
    <div className={styles["section1"]}>
      <div className={styles["section1-img-wrapper"]}>
        <div className={styles["section1-img-slice1-wrapper"]}>
          <h1 className={styles["section1-img-slice1"]}>
            Verkaufe schnell und einfach{" "}
            online ohne hohe Kosten
          </h1>
        </div>
        <div className={styles["section1-img-slice2-wrapper"]}>
          <h2 className={styles["section1-img-slice2"]}>
            Inszeniere Dich und Deine Marken im hochwertigen Umfeld.
          </h2>
        </div>
        <ButtonTermin
          className={styles["section1-img-slice3"]}
          clickHandler={undefined}
        />
        <div className={styles["section1-img-slice4-wrapper"]}>
          <button
            onClick={(e) => downHandler()}
            className={styles["section1-img-slice4"]}
          >
            <ArrowDown />
          </button>
        </div>
      </div>

      <div className={styles["under-image"]}>
        <div className={styles["under-image-slice"]}>
          <Trophy className={styles["under-image-slice-child1"]} />
          <div>
            <p className={styles["under-image-slice-child2"]}>
              Spare Kosten und Mühe für den eigenen Online-Shop.
            </p>
          </div>
        </div>
        <div className={styles["under-image-slice"]}>
          <Shop className={styles["under-image-slice-child1"]} />
          <div>
            <p className={styles["under-image-slice-child2"]}>
              Ermögliche den Online-Verkauf im
              Einklang mit deinen Handelspartnern.
            </p>
          </div>
        </div>
        <div className={styles["under-image-slice"]}>
          <Hourglass className={styles["under-image-slice-child1"]} />
          <div>
            <p className={styles["under-image-slice-child2"]}>
              Reagiere jetzt auf verändertes
              Kunden-und Einkaufsverhalten.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
