import React, { useState } from "react";
import * as Styles from "./Profile.module.css";

import Top from "./Top/Top";


const Profile = () => {
    const [current, setCurrent] = useState("notices")

    // const changeCurrent = linkName => {
    //     console.log("set" + linkName)
    //     setCurrent(linkName)
    // }

    let contents

    if (current === "resources") {
        contents = (<div className={Styles.Contents}>
            Resources Contents
        </div>)
    } else if (current === "schedule") {
        contents = (<div className={Styles.Contents}>
            Schedule Contents
        </div>)
    } else {
        contents = (<div className={Styles.Contents}>
            Notices Contents
        </div>)
    }

    let noticesStyle = "";
    let scheduleStyle = "";
    let resourcesStyle = "";

    if (current === "resources") {
        resourcesStyle = Styles.Active
    } else if (current === "schedule") {
        scheduleStyle = Styles.Active
    } else {
        noticesStyle = Styles.Active
    }




    return (
        <div className={`${Styles.Profile}`}>
            <Top />
            <div className={Styles.Bottom}>
                <div className={Styles.Links}>
                    <div className={`${Styles.LinkHeading} ${noticesStyle}`} onClick={() => setCurrent("notices")}>
                        Notices
                    </div>
                    <div className={`${Styles.LinkHeading} ${scheduleStyle}`} onClick={() => setCurrent("schedule")}>
                        Schedule
                    </div>
                    <div className={`${Styles.LinkHeading} ${resourcesStyle}`} onClick={() => setCurrent("resources")}>
                        Resources
                    </div>

                </div>
                <div className={Styles.ContentsContainer}>
                    {contents}
                </div>
            </div>
        </div>
    )
}

export default Profile;