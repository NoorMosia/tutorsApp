import React from "react";
import * as Styles from "./SectionCourses.module.css";

const SectionCourses = props => {
    console.log(props)
    return (
        <div className={Styles.SectionCourses}>
            Section Courses
            <hr />
            Parameter ID - {props.match.params.id}
        </div>
    )
}

export default SectionCourses;