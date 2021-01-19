import React from 'react';
import { Link } from 'react-router-dom';


import * as Styles from './Card.module.css';
import {
    MDBBtn, MDBCard, MDBCardBody, MDBCardImage,
    MDBCardTitle, MDBCardText, MDBCol
} from 'mdbreact';

const CardExample = props => {
    return (
        <div className={Styles.Card}>
            <MDBCol style={{ maxWidth: "22rem" }}>
                <MDBCard>
                    <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg"
                        waves />
                    <MDBCardBody>
                        <MDBCardTitle>{props.title}</MDBCardTitle>
                        <MDBCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</MDBCardText>
                        <Link to="home" >
                            <MDBBtn >Click</MDBBtn>
                        </Link>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </div>
    )
}

export default CardExample;