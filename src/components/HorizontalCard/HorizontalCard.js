import React from "react";
import { Link } from "react-router-dom";
import * as Styles from "./HorizontalCard.module.css";
import {
    MDBBtn
} from 'mdbreact';

const HorizontalCard = () => {
    return (
        <div className={Styles.HorizontalCard}>
            <div className={Styles.Left}>
                <div className={Styles.Image}>
                    <img
                        tag="img"
                        src={`${process.env.PUBLIC_URL}/assets/team/2.jpg`}
                        className="rounded z-depth-1-half img-fluid"
                        alt="Sample avatar"
                    />
                </div>
            </div>
            <div className={Styles.Right}>
                <div className={Styles.Title}>
                    <h4>Noor Tshepo</h4>
                </div>
                <div className={Styles.Courses}>
                    Subjects:
                    <span className={Styles.Pill}>English</span>
                    <span className={Styles.Pill}>Mathematics</span>
                    <span className={Styles.Pill}>Physics</span>
                    <span className={Styles.Pill}>Social Sciences</span>
                </div>
                <div className={Styles.Courses}>
                    Language:
                    <span className={Styles.Pill}>English</span>
                </div>
                <div className={Styles.Buttons}>
                    {/* <MDBBtn color="orange">Bookmark</MDBBtn> */}
                    <Link to="/profile">
                        <MDBBtn color="black">View Profile</MDBBtn>
                    </Link>
                </div>
            </div>
        </div >
    )
}

export default HorizontalCard;