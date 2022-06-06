import styles from "./section4.module.scss";
import ReactPlayer from "react-player";
import { useEffect, useRef, useState } from "react";
import { setSection4 } from "../../redux/slice/vendorsPageSlice";
import { useDispatch } from "react-redux";
import Player from "../player/Player";

const Section4 = () => {
  const ref = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    let y = ref.current ? ref.current.offsetTop : null;
    dispatch(setSection4(y));
  }, [dispatch, ref]);

  return (
    <div className={styles["section4-container"]} ref={ref}>
      <div className={styles["section4"]}>
        <div className={styles["section4-video-player-wrapper"]}>
          <Player url={"http://localhost:3000/video.mp4"} />
        </div>
        <div className={styles["section4-video-info-wrapper"]}>
          <div className={styles["section4-video-info"]}>
            <h4 className={styles["section4-video-info-header"]}>       
              <span> Das sagen unsere Partner.</span>
              <span>Steffen Männle</span>
            </h4>
            <p className={styles["section4-video-info-body"]}>
              <span>Pur Natur</span> Managing Director Sales & Marketing
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
