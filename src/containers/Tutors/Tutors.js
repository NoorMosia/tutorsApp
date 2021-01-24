import React from "react";

import * as Styles from "./Tutors.module.css";

import HorizontalCard from "../../components/HorizontalCard/HorizontalCard"

const Tutors = props => {
    return (
        <div className={Styles.Tutors}>
            <div className={Styles.Heading}>
                <h1> {props.title} Tutors</h1>
            </div>

            <HorizontalCard></HorizontalCard>
            <HorizontalCard></HorizontalCard>
            <HorizontalCard></HorizontalCard>
            <HorizontalCard></HorizontalCard>
            {props.match.params.id}
        </div>
    )
}

export default Tutors;