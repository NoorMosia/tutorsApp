import React from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBBtn } from "mdbreact";

import image from "./../../assets/noor.jpg"

const TeamPage = () => {
    return (
        <MDBCard className="my-5 px-1 pb-5 text-center">
            <MDBCardBody>
                <h2 className="h1-responsive font-weight-bold my-5">
                    Our amazing team
                </h2>
                <MDBRow>
                    <MDBCol md="4" className="mb-md-0 mb-5">
                        <img
                            tag="img"
                            src={image}
                            className="rounded z-depth-1-half img-fluid"
                            alt="Sample avatar"
                        />
                        <h4 className="font-weight-bold dark-grey-text my-4">
                            Noor Tshepo Mosia
                        </h4>
                        <h6 className="text-uppercase grey-text mb-3">backend engineer</h6>
                        <MDBBtn tag="a" size="sm" className="mx-1 mb-0 btn-fb">
                            <MDBIcon fab icon="facebook-f" />
                        </MDBBtn>
                        <MDBBtn
                            tag="a"
                            size="sm"
                            className="mx-1 mb-0 btn-dribbble"
                        >
                            <MDBIcon fab icon="dribbble" />
                        </MDBBtn>
                        <MDBBtn tag="a" size="sm" className="mx-1 mb-0 btn-tw">
                            <MDBIcon fab icon="twitter" />
                        </MDBBtn>
                    </MDBCol>

                    <MDBCol md="4" className="mb-md-0 mb-5">
                        <img
                            tag="img"
                            src={image}
                            className="rounded z-depth-1-half img-fluid"
                            alt="Sample avatar"
                        />
                        <h4 className="font-weight-bold dark-grey-text my-4">
                            Noor Tshepo Mosia
                        </h4>
                        <h6 className="text-uppercase grey-text mb-3">
                            Front-end Developer
                        </h6>
                        <MDBBtn
                            tag="a"
                            size="sm"
                            className="mx-1 mb-0 btn-email"
                        >
                            <MDBIcon icon="envelope" />
                        </MDBBtn>
                        <MDBBtn tag="a" size="sm" className="mx-1 mb-0 btn-fb">
                            <MDBIcon fab icon="facebook-f" />
                        </MDBBtn>
                        <MDBBtn tag="a" size="sm" className="mx-1 mb-0 btn-git">
                            <MDBIcon fab icon="github" />
                        </MDBBtn>
                    </MDBCol>

                    <MDBCol md="4" className="mb-md-0 mb-5">
                        <img
                            tag="img"
                            src={image}
                            className="rounded z-depth-1-half img-fluid"
                            alt="Sample avatar"
                        />
                        <h4 className="font-weight-bold dark-grey-text my-4">
                            Noor Tshepo Mosia
                        </h4>
                        <h6 className="text-uppercase grey-text mb-3">UI/UX designer</h6>
                        <MDBBtn tag="a" size="sm" className="mx-1 mb-0 btn-li">
                            <MDBIcon fab icon="linkedin-in" />
                        </MDBBtn>
                        <MDBBtn tag="a" size="sm" className="mx-1 mb-0 btn-tw">
                            <MDBIcon fab icon="twitter" />
                        </MDBBtn>
                        <MDBBtn tag="a" size="sm" className="mx-1 mb-0 btn-pin">
                            <MDBIcon fab icon="pinterest" />
                        </MDBBtn>
                    </MDBCol>
                </MDBRow>
            </MDBCardBody>
        </MDBCard>
    );
}

export default TeamPage;