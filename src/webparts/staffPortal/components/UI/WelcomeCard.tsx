import React from 'react'
import styles from './styles.module.scss';

const name = localStorage.getItem("MyName");

const WelcomeCard = () => {
    return (
        <div className={styles.welcomeCard}>
            Hello {name}
        </div>
    )
}

export default WelcomeCard
