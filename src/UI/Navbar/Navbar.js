import React from "react";
import { Link } from "react-router-dom"

import Logo from "./Ithute.png";
import { MDBBtn } from "mdbreact";
import * as Styles from "./Navbar.module.css";

const Navbar = () => {
    return (
        <React.Fragment>
            <div className={Styles.Navbar} >
                <Link to="profile" >
                    <div className={Styles.Logo}>
                        <img src={Logo} className="rounded" alt="aligment" />
                    </div>
                </Link>
                <div className={Styles.Links}>
                    <div className={Styles.LeftLinks}>
                        <div className={Styles.Categories}>
                            categories
                    </div>
                    </div>
                    <div className={Styles.RightLinks}>
                        <div className={Styles.SignIn}>
                            <MDBBtn color="white" className="font-weight-bold">Log in</MDBBtn>
                        </div>
                        <div className={Styles.SignUp}>
                            <MDBBtn color="dark" className="font-weight-bold">Sign Up</MDBBtn>

                        </div>

                    </div>
                </div>
            </div>
            <div className={Styles.FakeNav} ></div>
        </React.Fragment>
    )
}

export default Navbar;