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
                        src={`${process.env.PUBLIC_URL}/assets/noor.jpg`}
                        className="rounded z-depth-1-half img-fluid"
                        alt="Sample avatar"
                    />
                </div>
            </div>
            <div className={Styles.Right}>
                <div className={Styles.Title}>
                    <h3>Noor Tshepo</h3>
                </div>
                <div className={Styles.Courses}>
                    Subjects:
                    <MDBBtn rounded outline size="sm" color="black">mathematics</MDBBtn>
                    <MDBBtn rounded outline size="sm" color="black">physics</MDBBtn>
                    <MDBBtn rounded outline size="sm" color="black">mathematics</MDBBtn>
                    <MDBBtn rounded outline size="sm" color="black">mathematics</MDBBtn>
                </div>
                <div className={Styles.Courses}>
                    Language:
                    <MDBBtn rounded outline size="sm" color="black">English</MDBBtn>
                </div>
                <div className={Styles.Buttons}>
                    <MDBBtn color="orange">Bookmark</MDBBtn>
                    <Link to="/profile">
                        <MDBBtn color="black">View Profile</MDBBtn>
                    </Link>
                </div>
            </div>
        </div >
    )
}

export default HorizontalCard;