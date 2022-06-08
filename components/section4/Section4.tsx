import styles from "./section4.module.scss";
import { useEffect, useRef, useState } from "react";
import { setSection4 } from "../../redux/slice/vendorsPageSlice";
import { useDispatch } from "react-redux";
import Player from "../player/Player";

const Section4: React.FC = () => {
  const ref: any = useRef<HTMLDivElement>();
  const dispatch = useDispatch();

  useEffect(() => {
    let y: number | null = ref.current ? ref.current.offsetTop : null;
    dispatch(setSection4(y));
  }, [dispatch, ref]);

  return (
    <div className={styles["section4-container"]} ref={ref}>
      <div className={styles["section4"]}>
        <div className={styles["section4-video-player-wrapper"]}>
          <Player url={"https://stylique.am/images/videos/apply_1.mp4"} />
        </div>
        <div className={styles["section4-video-info-wrapper"]}>
          <div className={styles["section4-video-info"]}>
            <h4 className={styles["section4-video-info-header"]}>    
                 Das sagen unsere Partner.   
            </h4>
            <div className={styles["section4-video-info-body"]}>
              <h4 className={styles["section4-video-info-body-header"]}>Steffen Männle</h4>
              <span>Pur Natur</span> Managing Director Sales & Marketing
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
