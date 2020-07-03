import React from 'react';
import styles from './Header.module.css';
import {FiLogIn, FiFlag} from 'react-icons/fi';

const Header = () => {
    return <header className={styles.header}>
        <div className={styles.logo}>
            <img src={"/images/logo.svg"} alt="Eon Logo"/>
        </div>
        <nav>
            <div className={styles.links}>
                <a>Возможности</a>
                <a>Цены</a>
            </div>
            <div className={styles.buttons}>
                <a className={styles.buttonActive}>
                    <FiFlag/> Начать бесплатно
                </a>
                <a className={styles.button} href="https://cabinet.eon.uz/">
                    <FiLogIn/> Войти
                </a>
            </div>
        </nav>
    </header>;
};

export default Header;