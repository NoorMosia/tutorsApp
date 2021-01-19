import React from "react";
import * as Styles from "./Home.module.css"

import Banner from "./../../components/banner/Banner";
import HorizontalCards from "./../../components/HorizontalCards/HorizontalCards";
import Features from "./../../components/Features/Features";

const Home = () => {
    return (
        <div className={Styles.Home}>
            <div className={Styles.Banner}>
                <Banner />
            </div>

            <div className={Styles.Courses}>
                <div className={Styles.CardsContainer}>
                    <HorizontalCards title="grade school" />
                </div>

                <div className={Styles.CardsContainer}>
                    <HorizontalCards title="Web development" />
                </div>

                <div className={Styles.CardsContainer}>
                    <HorizontalCards title="programming" />
                </div>

            </div>

            <div className={Styles.Feature}>
                <Features></Features>
            </div>
        </div>
    )
}

export default Home;