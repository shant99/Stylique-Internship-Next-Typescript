import styles from "./section4.module.scss";
import ReactPlayer from "react-player/lazy";
import { useState } from "react";

const Section4 = () => {
    const [play , setPlay] = useState(false)

  return (
    <div className={styles["section4-container"]}>
      <div className={styles["section4"]}>
        <div className={styles["section4-video"]}>
          {/* <ReactPlayer
            className="react-player"
            url="https://stylique.am/images/videos/apply_1.mp4"
            width="100%"
            height="100%"
            playing={true}
          /> */}
          {/* <button className={}>play</button> */}
        </div>
        <div className={styles["section4-video-info"]}>
          <h1 className={styles["section4-video-info-header"]}>
            Das sagen unsere Partner.
          </h1>
          <div className={styles["section4-video-info-body"]}>
            <h1>Steffen Männle</h1>
            <p>Pur Natur</p>
            <p> Managing Director Sales & Marketing</p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Section4;