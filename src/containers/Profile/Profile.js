import React from "react";
import * as Styles from "./Profile.module.css";


const Profile = () => {
    return (
        <div className={Styles.Profile}>
            <div className={Styles.Top}>
                <div className={Styles.Image}>
                    image
                </div>
                <div className={Styles.Details}>
                    names and stuff
                </div>
            </div>
            <div className={Styles.Bottom}>
                <div className={Styles.Links}>
                    <div className={Styles.LinkHeading}>
                        Timeline
                    </div>
                    <div className={Styles.LinkHeading}>
                        Schedule
                    </div>
                    <div className={Styles.LinkHeading}>
                        Resources
                    </div>

                </div>
                <div className={Styles.ContentsContainer}>
                    <div className={Styles.Contents}>
                        Timeline Contents
                    </div>
                    <div className={Styles.LinkHeading}>
                        Schedule Contents
                    </div>
                    <div className={Styles.LinkHeading}>
                        Resources Contents
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;