import React, { Component } from 'react';
// import CommonUtils from '../../../util/commonUtils';
// import { ToastContainer, toast } from 'react-toastify';


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
                            <li className="dropdown">
                                <a href="#" className="nav-link has-dropdown"><i className="fas fa-fire"></i><span>Investor</span></a>

                            </li>
                        </ul>
                    </aside>
                </div>
            </>
        )
    }
}


export default LeftSideNav