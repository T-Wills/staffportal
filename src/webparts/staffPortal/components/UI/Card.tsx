import React from 'react';
import styles from "./styles.module.scss";

const Card = (props) => {
    return (
        <div className={`${styles.card} ${props.color}` }>
            <div className={styles.circle}>{props.score} </div>
            {props.rating}
        </div>
    )
}

export default Card

