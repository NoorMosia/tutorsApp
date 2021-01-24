import React from "react";
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
                    <h2>Noor Tshepo</h2>
                </div>
                <div className={Styles.Courses}>
                    Subjects:
                    <MDBBtn rounded outline size="sm" color="black">mathematics</MDBBtn>
                    <MDBBtn rounded outline size="sm" color="black">physics</MDBBtn>
                    <MDBBtn rounded outline size="sm" color="black">mathematics</MDBBtn>
                    <MDBBtn rounded outline size="sm" color="black">mathematics</MDBBtn>
                    <MDBBtn rounded outline size="sm" color="black">mathematics</MDBBtn>
                    <MDBBtn rounded outline size="sm" color="black">mathematics</MDBBtn>
                    <MDBBtn rounded outline size="sm" color="black">mathematics</MDBBtn>
                </div>
                <div className={Styles.Buttons}>
                    <MDBBtn color="orange">Bookmark</MDBBtn>
                    <MDBBtn color="black">View Profile</MDBBtn>
                </div>
            </div>
        </div>
    )
}

export default HorizontalCard;