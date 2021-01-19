import React from "react";
import * as Styles from "./HorizontalCards.module.css"

import Card from "./../Card/Card";

const HorizontalCards = props => {
    return (
        <div className={Styles.HorizontalCards}>
            <h2 className={Styles.Title}>
                {props.title}
            </h2>

            <div className={Styles.Cards}>
                <Card title="Grade 9" />
                <Card title="Grade 10" />
                <Card title="Grade 11" />
                <Card title="Grade 12" />
            </div>

            <a href="now" className={Styles.More}>
                More
            </a>
        </div>
    )
}

export default HorizontalCards;