import { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";
import Play from "../../icons/Play";
import styles from "./player.module.scss";

function Player({url = ''}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [player, setPlayer] = useState("");
  const video = useRef();

  const playHandler = (e) => {
    setIsPlaying((prev) => !prev);
  };

  useEffect(() => {
    setPlayer(
      <ReactPlayer
        className={styles["react-player"]}
        url={url}
        controls={!isPlaying}
        playing={isPlaying}
        width="100%"
        height="auto"
        onClick={playHandler}
      />
    );
  }, [isPlaying, url]);

  return (
    <>
      <div className={styles["video"]}>
        {player}
        <button
          onClick={playHandler}
          style={{ opacity: isPlaying ? 0 : 1 }}
          className={styles["video-play-button"]}
        >
          <Play />
        </button>
      </div>
    </>
  );
}

export default Player;
