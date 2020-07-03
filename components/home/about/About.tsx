import React from 'react'
import styles from "./About.module.css"

const About = () => {
    return <div className={styles.about}>
        <div className={styles.bgImage}>
            <img src={'/images/illustrations/wfh_8.svg'}
                 alt="Платформа которая сделает процесс преподования на много удобнее"/>
        </div>
        <div className={styles.content}>
            <h2>
                <b>Eon</b> – Платформа для <b>преподавателей</b>,
                позволяющая <b>удобно</b> проводить уроки
                в <b>онлайн</b> и в классе.
            </h2>
        </div>
    </div>;
};

export default About;