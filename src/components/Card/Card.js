import React from 'react';
import { Route } from 'react-router-dom';


import * as Styles from './Card.module.css';
import {
    MDBBtn, MDBCard, MDBCardBody, MDBCardImage,
    MDBCardTitle, MDBCol
} from 'mdbreact';

const CardExample = props => {
    return (
        <div className={Styles.Card}>
            <MDBCol style={{ maxWidth: "22rem" }}>
                <MDBCard>
                    <MDBCardImage className={`img-fluid ${Styles.Image}`} src={props.image}
                        waves />
                    <MDBCardBody>
                        <MDBCardTitle>{props.title}</MDBCardTitle>
                        <div className={Styles.Center}>
                            <Route to="home" >
                                <MDBBtn color="orange">Find Tutors</MDBBtn>
                            </Route>

                        </div>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </div>
    )
}

export default CardExample;