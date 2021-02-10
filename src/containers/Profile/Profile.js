import React, { useState } from "react";
import * as Styles from "./Profile.module.css";

import Top from "./Top/Top";
import Bottom from "./Bottom/Bottom";
import Notice from "./../../components/Notice/Notice";


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
            <Notice></Notice>
            <Notice></Notice>
            <Notice></Notice>
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
            <Bottom
                noticesStyle={noticesStyle}
                scheduleStyle={scheduleStyle}
                resourcesStyle={resourcesStyle}
                contents={contents}
                setCurrent={setCurrent}
            />

        </div>
    )
}

export default Profile;