import React from 'react';
import styles from './Opportunities.module.css'

const Opportunities = () => {
    return <div className={styles.opportunities}>
        <h2>Возможности</h2>
        <div className={styles.content}>
            <div className={styles.item}>
                <img src={"/images/illustrations/homework.svg"} alt=""/>
                <p>Упраление домшним заданием</p>
            </div>
            <div className={styles.item}>
                <img src={"/images/illustrations/user.svg"} alt=""/>
                <p>Упраление домшним заданием</p>
            </div>
            <div className={styles.item}>
                <img src={"/images/illustrations/homework.svg"} alt=""/>
                <p>Упраление домшним заданием</p>
            </div>
            <div className={styles.item}>
                <img src={"/images/illustrations/homework.svg"} alt=""/>
                <p>Упраление домшним заданием</p>
            </div>
        </div>
    </div>;
};

export default Opportunities;