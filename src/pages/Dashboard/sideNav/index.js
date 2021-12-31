import React, { Component } from 'react';
// import CommonUtils from '../../../util/commonUtils';
// import { ToastContainer, toast } from 'react-toastify';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
  } from "react-router-dom";

class LeftSideNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
        };
    }


    render() {
        return (
            <>
                <div className="main-sidebar sidebar-style-2">
                    <aside id="sidebar-wrapper">
                        <div className="sidebar-brand">
                            <a href="index.html">Stisla</a>
                        </div>
                        <div className="sidebar-brand sidebar-brand-sm">
                            <a href="index.html">St</a>
                        </div>
                        <ul className="sidebar-menu">
                        <Link to={"/"}>
                            <li className="dropdown">
                                <a href="#" className="nav-link"><i className="fas fa-fire"></i><span>Investor</span></a>

                            </li>
                            </Link>
                            <Link to={"/Funds"}>

                            <li className="dropdown">
                                <a href="#" className="nav-link"><i className="fas fa-fire"></i><span>Funds</span></a>

                            </li>
                            </Link>
                        </ul>
                    </aside>
                </div>
            </>
        )
    }
}


export default LeftSideNav