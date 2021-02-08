import React from 'react';
import { Link } from 'react-router-dom';


import * as Styles from './Card.module.css';
import {
    MDBBtn, MDBCard, MDBCardBody,
    MDBCardTitle, MDBCol
} from 'mdbreact';

const CardExample = props => {
    return (
        <div className={Styles.Card}>
            <MDBCol style={{ maxWidth: "22rem" }}>
                <MDBCard>
                    <img className={Styles.Image} src={props.image} alt={props.title} />
                    <MDBCardBody>
                        <MDBCardTitle>{props.title}</MDBCardTitle>
                        <div className={Styles.Center}>
                            <Link to={`/tutors/${props.id}`} >
                                <MDBBtn color="orange">Find A Tutor</MDBBtn>
                            </Link>

                        </div>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </div>
    )
}

export default CardExample;