import React from "react";
import * as Styles from "./Home.module.css"

import Banner from "./../../components/banner/Banner";
import HorizontalCards from "./../../components/HorizontalCards/HorizontalCards";
import Features from "./../../components/Features/Features";
import Team from "../../components/Team/Team";
import Footer from "./../../components/Footer/Footer";

import data from "../../store/egData";

const Home = () => {

    return (
        <div>

            <div className={Styles.Home}>
                <div className={Styles.Banner}>
                    <Banner />
                </div>

                <div className={Styles.Courses}>
                    <div className={Styles.CardsContainer}>
                        <HorizontalCards
                            title="grade school"
                            data={data.gradeSchool}
                        />
                    </div>

                    <div className={Styles.CardsContainer}>
                        <HorizontalCards
                            title="Programming"
                            data={data.Programming}
                        />
                    </div>

                    <div className={Styles.CardsContainer}>
                        <HorizontalCards
                            title="web development"
                            data={data.webDevelopment}
                        />
                    </div>

                </div>

                <div className={Styles.Feature}>
                    <Features></Features>
                </div>

                <div className={Styles.Feature}>
                    <Team></Team>
                </div>
            </div>

            <div>
                <Footer></Footer>
            </div>

        </div>
    )
}

export default Home;