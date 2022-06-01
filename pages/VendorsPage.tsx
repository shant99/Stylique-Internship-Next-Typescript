import React from 'react'
import AboveHeader from '../components/aboveHeader/AboveHeader';
import Header from '../components/header/Header';
import Section1 from '../components/section1/Section1';
import styles from '../styles/VendorsPage.module.scss'

const VendorsPage = () => {
    return (
        <div className={styles["vendors-page-container"]}>
            <AboveHeader />
            <Header />
            <Section1 />
        </div>
    )
}

export default VendorsPage