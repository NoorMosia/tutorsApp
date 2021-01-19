import React from "react";
import { Link } from "react-router-dom"

import { MDBBtn } from "mdbreact";

import * as Styles from "./Navbar.module.css";

const Navbar = () => {
    return (
        <div className={Styles.Navbar} >
            <Link to="profile" >
                <div className={Styles.Logo}>
                    <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-1.jpg" className="rounded" alt="aligment" />
                </div>
            </Link>
            <div className={Styles.Links}>
                <div className={Styles.LeftLinks}>
                    <div className={Styles.Categories}>
                        categories
                    </div>
                    {/* <div className={Styles.Search}>
                        <input className={Styles.SearchInput} placeholder="SEARCH"></input>
                    </div> */}
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
    )
}

export default Navbar;