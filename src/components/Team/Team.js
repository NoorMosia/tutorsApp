import React from "react";
import { MDBRow, MDBCol, MDBCardBody, MDBIcon, MDBBtn } from "mdbreact";

const TeamPage = () => {
    return (
        <div className="my-5 px-1 pb-5 text-center">
            <MDBCardBody>
                <h2 className="h1-responsive font-weight-bold my-5">
                    Our amazing team
                </h2>
                <MDBRow>
                    <MDBCol md="4" className="mb-md-0 mb-5">
                        <img
                            tag="img"
                            src={`${process.env.PUBLIC_URL}assets/noor.jpg`}
                            className="rounded z-depth-1-half img-fluid"
                            alt="Sample avatar"
                        />
                        <h4 className="font-weight-bold dark-grey-text my-4">
                            Noor Tshepo Mosia
                        </h4>
                        <h6 className="text-uppercase grey-text mb-3">UI/UX designer</h6>
                        <MDBBtn tag="a" size="sm" className="mx-1 mb-0 btn-fb">
                            <MDBIcon fab icon="linkedin" />
                        </MDBBtn>
                        <MDBBtn tag="a" size="sm" className="mx-1 mb-0 btn-tw">
                            <MDBIcon fab icon="twitter" />
                        </MDBBtn>
                        <MDBBtn tag="a" size="sm" className="mx-1 mb-0 btn-tw">
                            <MDBIcon fab icon="github" />
                        </MDBBtn>
                    </MDBCol>

                    <MDBCol md="4" className="mb-md-0 mb-5">
                        <img
                            tag="img"
                            src={`${process.env.PUBLIC_URL}assets/noor.jpg`}
                            className="rounded z-depth-1-half img-fluid"
                            alt="Sample avatar"
                        />
                        <h4 className="font-weight-bold dark-grey-text my-4">
                            Noor Tshepo Mosia
                        </h4>
                        <h6 className="text-uppercase grey-text mb-3">
                            Front-end Developer
                        </h6>
                        <MDBBtn tag="a" size="sm" className="mx-1 mb-0 btn-fb">
                            <MDBIcon fab icon="linkedin" />
                        </MDBBtn>
                        <MDBBtn tag="a" size="sm" className="mx-1 mb-0 btn-tw">
                            <MDBIcon fab icon="twitter" />
                        </MDBBtn>
                        <MDBBtn tag="a" size="sm" className="mx-1 mb-0 btn-tw">
                            <MDBIcon fab icon="github" />
                        </MDBBtn>
                    </MDBCol>

                    <MDBCol md="4" className="mb-md-0 mb-5">
                        <img
                            tag="img"
                            src={`${process.env.PUBLIC_URL}assets/noor.jpg`}
                            className="rounded z-depth-1-half img-fluid"
                            alt="Sample avatar"
                        />
                        <h4 className="font-weight-bold dark-grey-text my-4">
                            Noor Tshepo Mosia
                        </h4>
                        <h6 className="text-uppercase grey-text mb-3">backend engineer</h6>
                        <MDBBtn tag="a" size="sm" className="mx-1 mb-0 btn-fb">
                            <MDBIcon fab icon="linkedin" />
                        </MDBBtn>
                        <MDBBtn tag="a" size="sm" className="mx-1 mb-0 btn-tw">
                            <MDBIcon fab icon="twitter" />
                        </MDBBtn>
                        <MDBBtn tag="a" size="sm" className="mx-1 mb-0 btn-tw">
                            <MDBIcon fab icon="github" />
                        </MDBBtn>
                    </MDBCol>
                </MDBRow>
            </MDBCardBody>
        </div>
    );
}

export default TeamPage;