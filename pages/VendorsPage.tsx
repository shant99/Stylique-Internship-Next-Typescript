import React from 'react'
import AboveHeader from '../components/aboveHeader/AboveHeader';
import Header from '../components/header/Header';
import Section1 from '../components/section1/Section1';
import styles from '../styles/VendorsPage.module.scss'
import Section2 from '../components/section2/Section2';
import Section3 from '../components/section3/Section3';

const VendorsPage = () => {
    return (
        <div className={styles["vendors-page-container"]}>
            <AboveHeader />
            <Header />
            <Section1 />
            <Section2 />
            <Section3 />
        </div>
    )
}

export default VendorsPage