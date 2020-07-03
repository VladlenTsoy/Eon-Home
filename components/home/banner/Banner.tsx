import React from 'react';
import styles from './Banner.module.css';

const Banner = () => {
    return <section className={styles.banner}>
        <div className={styles.bannerText}>
            <span className={styles.bannerTextStriped}>Онлайн</span>-обучение<br/>
            <span className={styles.bannerTextGradient}>Ментальной арифметики</span> <br/>
            и Мнемотехники.
        </div>
        <div className={styles.bgImage}>
            <img src={"/images/illustrations/wfh_1.svg"} alt=""/>
        </div>
    </section>;
};

export default Banner;