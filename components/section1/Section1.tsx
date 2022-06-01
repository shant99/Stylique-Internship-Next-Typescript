import Image from "next/image";
import img1 from "../../public/img1.png";
import styles from "./section1.module.scss";

const Section1 = () => {
  return (
    <div className={styles["section1"]}>
      <div>
        <Image src={img1} alt="s" className={styles["section1-img"]} />
      </div>
    </div>
  );
};

export default Section1;
