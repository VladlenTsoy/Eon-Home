import React from 'react';
import styles from "./Offer.module.css";

const Offer = () => {
    return <div className={styles.offer}>
        <h2 className={styles.title}>
            <b>30</b> - дней бесплатно для новых пользователей
        </h2>
        <div>
            <button className={styles.button}>Попробовать</button>
        </div>
    </div>;
};

export default Offer;