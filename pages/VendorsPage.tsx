import styles from "../styles/VendorsPage.module.scss";
import AboveHeader from "../components/aboveHeader/AboveHeader";
import Header from "../components/header/Header";
import Section1 from "../components/section1/Section1";
import Section2 from "../components/section2/Section2";
import Section3 from "../components/section3/Section3";
import Section4 from "../components/section4/Section4";
import Section5 from "../components/section5/Section5";
import Section6 from "../components/section6/Section6";
import Section7 from "../components/section7/Section7";
import Section8 from "../components/section8/Section8";
import Section9 from "../components/section9/Section9";
import Footer from "../components/footer/Footer";
import { Provider } from "react-redux";
import store from "../redux/store";


const VendorsPage: React.FC = () => {
  return (
    <div className={styles["vendors-page-container"]}>
      <Provider store={store}>
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
        <Section9 />
        <Footer />
      </Provider>
    </div>
  );
};

export default VendorsPage;
