import React from "react";
import { Link } from "react-router-dom"

import * as Styles from "./HorizontalCards.module.css"

import Card from "./../Card/Card";

const HorizontalCards = props => {
    let cards = [];
    for (let i = 0; i < 4; i++) {
        cards.push
            (
                <Card
                    title={props.data[i].name}
                    key={props.data[i].name}
                />)
    }
    return (
        <div className={Styles.HorizontalCards}>
            <h2 className={Styles.Title}>
                {props.title}
            </h2>

            <div className={Styles.Cards}>
                {cards}
            </div>

            <div className={Styles.More}>
                <Link to="/category/gradeschool" >
                    More
                </Link>
            </div>
        </div>
    )
}

export default HorizontalCards;