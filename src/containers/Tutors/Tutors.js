import React from "react";

const SectionCourses = props => {
    return (
        <div>
            Tutors Courses - {props.match.params.id}
        </div>
    )
}

export default SectionCourses;