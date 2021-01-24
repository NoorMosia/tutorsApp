import React from "react";
import { Link } from "react-router-dom"

import * as Styles from "./CardsContainer.module.css"
import Card from "../Card/Card";

const CardsContainer = props => {
    let cards = [];
    for (let i = 0; i < 4; i++) {
        cards.push
            (
                <Card
                    title={props.data[i].name}
                    id={props.data[i].id}
                    image={props.data[i].image}
                    key={props.data[i].name}
                />
            )
    }
    return (
        <div>
            <h2 className={Styles.Title}>
                {props.title}
            </h2>

            <div className={Styles.CardsContainer}>
                {cards}
            </div>

            <div className={Styles.More}>
                <Link to={"/category/" + props.title} key={props.title}>
                    More
                </Link>
            </div>
        </div>
    )
}

export default CardsContainer;