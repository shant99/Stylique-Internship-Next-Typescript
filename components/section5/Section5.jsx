import ButtonTermin from "../buttonTermin/ButtonTermin";
import styles from "./section5.module.scss";
import Schedule from "../../icons/Schedule";
import Control from "../../icons/Control";
import FundView from "../../icons/FundView";

function Section5() {
  return (
    <div className={styles["section5-container"]}>
      <div className={styles["section5"]}>
        <h2 className={styles["section5-container-header"]}>
          Es wird Zeit zu Handeln
        </h2>
        <div className={styles["section5-container-body"]}>
          <div className={styles["section5-container-body-slice"]}>
            <Schedule />
            <p>
              <span>1.</span> <span>Beratungstermin reservieren</span>{" "}
            </p>
          </div>
          <div className={styles["section5-container-body-slice"]}>
            <Control />
            <p>
              <span>2.</span> <span>Unverbindlich testen</span>{" "}
            </p>
          </div>
          <div className={styles["section5-container-body-slice"]}>
            <FundView />
            <p>
              <span>3.</span> <span>Potenzial entdecken</span>{" "}
            </p>
          </div>
        </div>
        <ButtonTermin />
      </div>
    </div>
  );
}

export default Section5;
