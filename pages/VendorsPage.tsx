import React from 'react'
import AboveHeader from '../components/aboveHeader/AboveHeader';
import Header from '../components/header/Header';
import styles from '../styles/VendorsPage.module.scss'

const VendorsPage = () => {
    return (
        <div className={styles["vendors-page-container"]}>
            <AboveHeader />
            <Header />
        </div>
    )
}

export default VendorsPage