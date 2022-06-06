import styles from "./section4.module.scss";
import ReactPlayer from "react-player";
import { useEffect, useRef, useState } from "react";
import { setSection4 } from "../../redux/slice/vendorsPageSlice";
import { useDispatch } from "react-redux";


 function ReactP(){
  const [isPlaying , setIsPlaying ] = useState(true)

  
  return (
    <>
      {/* <ReactPlayer playing={isPlaying} url='./apply_1.mp4' width={420} height={450} /> */}
    </>
  )
}

const Section4 = () => {
    // const [play , setPlay] = useState(false)
    const ref = useRef()
    const dispatch = useDispatch();

    useEffect(()=> {
      let y = ref.current ?  ref.current.offsetTop : null ;

      dispatch(setSection4(y))

      
    } ,  [dispatch ,ref])

  return (
    <div className={styles["section4-container"]} ref={ref}>
      <div className={styles["section4"]}>
          <ReactP />
        <div className={styles["section4-video"]}>
        </div>


        {/* <div className={styles["section4-video-info"]}>
          <div className={styles["section4-video-info"]}></div>
          <div className={styles["section4-video-info-body"]}>
            <h2 className={styles["section4-video-info-header"]}>
              Das sagen unsere Partner.
            </h2>
            <h2>Steffen Männle</h2>
            <p>Pur Natur  Managing Director Sales & Marketing</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};


export default Section4;
