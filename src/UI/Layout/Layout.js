import React from "react";
import { Route } from "react-router-dom";


import * as Styles from "./Layout.module.css";
import Navbar from "../Navbar/Navbar";
import Footer from "./../../components/Footer/Footer";


import Home from "./../../containers/Home/Home";
import Field from "./../../containers/Field/Field";
import Profile from "./../../containers/Profile/Profile";

const Layout = () => {
    return (
        <div className={Styles.Layout}>
            <div className={Styles.Navigation}>
                <Navbar></Navbar>
            </div>

            <div className={Styles.Main}>
                <Route path="/" component={Home} exact />
                <Route path="/field" component={Field} exact />
                <Route path="/profile" component={Profile} exact />
            </div>

            <div>
                <Footer></Footer>
            </div>

        </div >
    )
}

export default Layout;