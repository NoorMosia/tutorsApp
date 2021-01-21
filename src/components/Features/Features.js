import React from "react";
import * as Styles from "./Features.module.css";
import { MDBRow, MDBCol, MDBIcon } from "mdbreact";

const FeaturesPage = () => {
    return (
        <section className={`text-center my-5" + ${Styles.Features}`}>
            <h2 className="h1-responsive font-weight-bold my-5">
                Features
        </h2>
            <MDBRow>
                <MDBCol md="4">
                    <MDBIcon icon="book" size="3x" className="red-text" />
                    <h5 className="font-weight-bold my-4">Notes</h5>
                    <p className=" mb-md-0 mb-5">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Reprehenderit maiores aperiam minima assumenda deleniti hic.
                    </p>
                </MDBCol>
                <MDBCol md="4">
                    <MDBIcon icon="users" size="3x" className="cyan-text" />
                    <h5 className="font-weight-bold my-4">Group Livestream</h5>
                    <p className=" mb-md-0 mb-5">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Reprehenderit maiores aperiam minima assumenda deleniti hic.
                    </p>
                </MDBCol>
                <MDBCol md="4">
                    <MDBIcon far icon="user" size="3x" className="orange-text" />
                    <h5 className="font-weight-bold my-4">1-on-1 Video Calls</h5>
                    <p className=" mb-md-0 mb-5">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Reprehenderit maiores aperiam minima assumenda deleniti hic.
                    </p>
                </MDBCol>
            </MDBRow>
        </section>
    );
}

export default FeaturesPage;