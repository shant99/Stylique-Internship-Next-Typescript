import Player from "../player/Player";
import styles from "./section9.module.scss";

function Section9() {
  return (
    <div className={styles["section9-container"]}>
      <div className={styles["section9"]}>
        <h2 className={styles["section9-header"]}>
          Unsere Gründerin erklärt was Plattform bedeutet.
        </h2>
        <div className={styles["section9-player-wrapper"]}>
            <Player url={'https://stylique.am/images/videos/apply_1.mp4'}/>
        </div>
      </div>
    </div>
  );
}

export default Section9;
