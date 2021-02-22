import React from "react";
import { Link } from "react-router-dom"

import Logo from "./Ithute.png";
import * as Styles from "./Navbar.module.css";

import Modal from "../../components/Modal/Modal";
import Login from "../../containers/Login/Login";
import Signup from "../../containers/Signup/Signup";

const Navbar = () => {

    return (
        <React.Fragment>
            <div className={Styles.Navbar} >
                <Link to="/" >
                    <div className={Styles.Logo}>
                        <img src={Logo} className="rounded" alt="aligment" />
                    </div>
                </Link>
                <div className={Styles.Links}>
                    <div className={Styles.LeftLinks}>
                        {/* <div className={Styles.Categories}>
                            categories
                        </div> */}
                    </div>
                    <div className={Styles.RightLinks}>
                        <div className={Styles.SignIn}>
                            <Modal title="login" color="white">
                                <Login></Login>
                            </Modal>
                        </div>

                        <div className={Styles.SignUp}>
                            <Modal title="signup" color="black">
                                <Signup></Signup>
                            </Modal>
                        </div>

                    </div>
                </div>
            </div>
            <div className={Styles.FakeNav} ></div>
        </React.Fragment>
    )
}

export default Navbar;