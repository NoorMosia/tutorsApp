import React from "react";

const SectionCourses = props => {
    console.log(props)
    return (
        <div>
            Section Courses
            <hr />
            Parameter ID - {props.match.params.id}
        </div>
    )
}

export default SectionCourses;