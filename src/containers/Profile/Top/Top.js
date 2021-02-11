import React from "react";
import { Link } from "react-router-dom";
import * as Styles from "./Top.module.css";

const Top = () => {
    return (
        <div className={Styles.Top}>
            <div className={Styles.Image}>
                <img
                    src={`${process.env.PUBLIC_URL}/assets/noor.jpg`}
                    alt="user"
                />
            </div>
            <div className={Styles.Details}>
                <div className={Styles.Names}>
                    Kyle Abbot
                    </div>
                <div className={Styles.Language}>
                    <span className={Styles.Label}>Language: </span>
                    <span className={Styles.Pill}>English</span>
                </div>
                <div className={Styles.Subjects}>
                    <span className={Styles.Label}>Subjects: </span>
                    <span>
                        <span className={Styles.Pill}>English</span>
                        <span className={Styles.Pill}>Web basics</span>
                        <span className={Styles.Pill}>Mathematis</span>
                    </span>
                </div>
            </div>

            <Link to="/livestream/id">
                <div className={Styles.Join}>
                    Live
                </div>
            </Link>

        </div>
    )
}

export default Top;