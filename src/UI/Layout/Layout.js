import React from "react";
import { Route, Switch } from "react-router-dom";
import * as Styles from "./Layout.module.css";
import Navbar from "../Navbar/Navbar";


import Home from "./../../containers/Home/Home";
import Field from "./../../containers/Field/Field";
import Profile from "./../../containers/Profile/Profile";
import SectionCourses from "./../../containers/SectionCourses/SectionCourses";
import Tutors from "./../../containers/Tutors/Tutors";
import LiveClass from "./../../containers/LiveClass/LiveClass";
import CreateRoom from "./../../containers/LiveClass/CreateRoom";
import Room from "./../../containers/LiveClass/Room";


const Layout = () => {
    return (
        <div className={Styles.Layout}>
            <div className={Styles.Navigation}>
                <Navbar></Navbar>
            </div>

            <div className={Styles.Main}>
                <Switch>
                    <Route path="/field" component={Field} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/livestream/:id" component={LiveClass} />
                    <Route path="/category/:id" component={SectionCourses} />
                    <Route path="/tutors/:id" component={Tutors} />
                    <Route path="/room" exact component={CreateRoom} />
                    <Route path="/room/:roomID" component={Room} />
                    <Route path="/" component={Home} />
                </Switch>
            </div>
        </div >
    )
}

export default Layout;