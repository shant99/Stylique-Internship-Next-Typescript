import ButtonTermin from "../buttonTermin/ButtonTermin";
import styles from "./section5.module.scss";
import Schedule from "../../icons/Schedule";
import Control from "../../icons/Control";
import FundView from "../../icons/FundView";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { setSection5 } from "../../redux/slice/vendorsPageSlice";

const Section5: React.FC = () => {
  let dispatch = useDispatch();
  let ref: any = useRef<HTMLDivElement>();

  useEffect(() => {
    let y: number | null = ref.current ? ref.current.offsetTop : null;
    dispatch(setSection5(y));
  }, [dispatch, ref]);
  return (
    <div className={styles["section5-container"]}>
      <div className={styles["section5"]} ref={ref}>
        <h2 className={styles["section5-container-header"]}>
          Es wird Zeit zu Handeln
        </h2>
        <div className={styles["section5-container-body"]}>
          <div className={styles["section5-container-body-slice"]}>
            <span className={styles["section5-container-body-slice-span"]}>
              <Schedule />
            </span>
            <p>
              <span>1.</span> <span>Beratungstermin reservieren</span>{" "}
            </p>
          </div>
          <div className={styles["section5-container-body-slice"]}>
            <span className={styles["section5-container-body-slice-span"]}>
              <Control />
            </span>
            <p>
              <span>2.</span> <span>Unverbindlich testen</span>{" "}
            </p>
          </div>
          <div className={styles["section5-container-body-slice"]}>
            <span className={styles["section5-container-body-slice-span"]}>
              <FundView />
            </span>
            <p>
              <span>3.</span> <span>Potenzial entdecken</span>{" "}
            </p>
          </div>
        </div>
        <ButtonTermin clickHandler={undefined} />
      </div>
    </div>
  );
};

export default Section5;
