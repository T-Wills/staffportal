import React from 'react'
import styles from './styles.module.scss'
import { BsFillBellFill } from "react-icons/bs";

const name = localStorage.getItem("MyName");
const dp = localStorage.getItem("MyDp");

const TopNav = (props) => {
    return (
        <div className={styles.topNav}>
           <div className={styles.topNavGrid}>
           <div className={styles.cards}>
            {props.PageTitle}
            </div> 
            <div className={styles.cards}>
            <input type="search" className="form-control" placeholder="Search for Items" name="search" />
            </div> 
            <div className={styles.cards} style={{padding:"1rem"}}>
           <BsFillBellFill style={{fontSize:"16px"}} />
            </div> 
            <div className={styles.cards}>
                <img src={dp} alt="Dp" />
          <small>{name}</small>
            </div> 
            </div> 
        </div>
    )
}

export default TopNav
