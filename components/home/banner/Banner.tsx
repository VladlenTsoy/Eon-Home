import React from 'react';
import styles from './Banner.module.css';

const Banner = () => {
    return <section className={styles.banner}>
        <h1 className={styles.bannerText}>
            <span className={styles.bannerTextStriped}>Онлайн</span>-обучение<br/>
            <span className={styles.bannerTextGradient}>Ментальной</span> арифметики и<br/>
            <span className={styles.bannerTextGradient}>Мнемотехники</span>.
        </h1>
        <div className={styles.bgImage}>
            <img
                src={"/images/illustrations/wfh_1.svg"}
                alt="Онлайн-обучение Ментальной арифметики и Мнемотехники"
            />
        </div>
    </section>;
};

export default Banner;