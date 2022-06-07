import styles from "../styles/VendorsPage.module.scss";
import AboveHeader from "../components/aboveHeader/AboveHeader";
import Header from "../components/header/Header";
import Section1 from "../components/section1/Section1";
import Section2 from "../components/section2/Section2";
import Section3 from "../components/section3/Section3.jsx";
import Section4 from "../components/section4/Section4.jsx";
import Section5 from "../components/section5/Section5.jsx";
import Section6 from "../components/section6/Section6.jsx";
import Section7 from "../components/section7/Section7.jsx";
import Section8 from "../components/section8/Section8.jsx";
import Footer from "../components/footer/Footer";
import { Provider } from "react-redux";
import store from "../redux/store";

const VendorsPage = () => {
  const url = 'http://localhost:3000/video.mp4'
  return (
    <div className={styles["vendors-page-container"]}>
      <Provider store={store} className="porvider">
        <AboveHeader />
        <Header />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Section8 />
        <Footer />
      </Provider>
    </div>
  );
};

export default VendorsPage;
