import * as React from "react";
import styles from "./styles.module.scss";
import Navbar from "../Navbar";
import TopNav from "../Navbar/TopNav";
import WelcomeCard from "../UI/WelcomeCard";
import Card from "../UI/Card";
import Apexcharts from "../UI/Chart";
import Chart from "../UI/Chart";
import Calendar from "../UI/Calendar";


const Dashboard = () => {
    return (
        <div className={styles.app}>
            <div className={styles.grid}>
                <Navbar />
                <div className={styles.content}>
                    <TopNav PageTitle="Dashboard" />
                    <div className={styles.container}>
                        <div className={styles.contentsGrid}>
                            <div className={styles.content}>
                                <WelcomeCard />
                                <div className={styles.score}>
                                    <div className={styles.scoreGrid}>
                                        <Card color={styles.purple} score="2%" rating="Manager's Appraisal Rating" />
                                        <Card color={styles.gold} score="2%" rating="My Appraisal Score" />
                                        <Card color={styles.blue} score="2%" rating="HR's Appraisal Rating" />
                                    </div>
                                </div>

                                <div>
                                    <Chart />
                                </div>
                            </div>
                            <div className={styles.content}>
                                <Calendar />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
