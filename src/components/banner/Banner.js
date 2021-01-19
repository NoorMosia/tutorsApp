import React from "react";
import * as Styles from "./Banner.module.css";

import banner from "./banner.jpg"

const Banner = () => {
    return (
        <div className={Styles.Banner}>
            <img src={banner} alt="banner" />
        </div>
    )
}

export default Banner;
