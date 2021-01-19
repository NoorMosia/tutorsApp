import React from "react";
import * as Styles from "./Banner.module.css";

// import banner from "./banner.jpg"

const Banner = () => {
    return (
        <div className={Styles.Banner}>
            {/* <img src={banner} alt="banner" /> */}
            <div className={Styles.BannerText}>
                <h2>Find a Perfect Tutor</h2>
                <p>
                    We have ample tutors that are ready
                    to help you with whatever subject
                    you need help with. Find one that
                    suites you and enjoy learning.
                </p>
            </div>
        </div>
    )
}

export default Banner;
