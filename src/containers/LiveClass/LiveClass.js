import React from "react";
import * as Styles from "./LiveClass.module.css";


const LiveClass = () => {
    return (
        <div className={Styles.LiveClass}>
            <div className={Styles.Teacher}>
                Teacher Cam
            </div>
            <div className={Styles.Students}>
                <div className={Styles.Student}>
                    Student Cam
                </div>
                <div className={Styles.Student}>
                    Student Cam
                </div>
                <div className={Styles.Student}>
                    Student Cam
                </div>
                <div className={Styles.Student}>
                    Student Cam
                </div>
            </div>
        </div>
    )
}

export default LiveClass;