import styles from "../styles/VendorsPage.module.scss";
import AboveHeader from "../components/aboveHeader/AboveHeader";
import Header from "../components/header/Header";
import Section1 from "../components/section1/Section1";
import Section2 from "../components/section2/Section2";
import Section3 from "../components/section3/Section3.jsx";
import Section4 from "../components/section4/Section4.jsx";
import Footer from "../components/footer/Footer";
import { Provider } from "react-redux";
import store from "../redux/store";

const VendorsPage = () => {
  return (
    <div className={styles["vendors-page-container"]}>
      <Provider store={store} className='porvider'>
        <AboveHeader />
        <Header />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Footer />
      </Provider>
    </div>
  );
};

export default VendorsPage;
