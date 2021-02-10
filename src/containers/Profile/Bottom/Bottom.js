import React from "react";
import * as Styles from "./Bottom.module.css";

const Bottom = props => {
    return (
        <div className={Styles.Bottom}>
            <div className={Styles.Links}>
                <div className={`${Styles.LinkHeading} ${props.noticesStyle}`} onClick={() => props.setCurrent("notices")}>
                    Notices
                </div>
                <div className={`${Styles.LinkHeading} ${props.scheduleStyle}`} onClick={() => props.setCurrent("schedule")}>
                    Schedule
                </div>
                <div className={`${Styles.LinkHeading} ${props.resourcesStyle}`} onClick={() => props.setCurrent("resources")}>
                    Resources
                </div>
            </div>
            <div className={Styles.ContentsContainer}>
                {props.contents}
            </div>
        </div>
    )
}

export default Bottom;