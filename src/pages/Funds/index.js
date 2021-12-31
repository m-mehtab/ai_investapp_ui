import React, { Component } from 'react';
import Footer from '../../components/footer';
import FundsForm from '../../components/fundsForm';
import Navbar from '../../components/navbar'
import Table from '../../components/table';
import LeftSideNav from '../Dashboard/sideNav/index';
const columns = ["S.No", "Date", "Amount", "Description", "Status", "Actions"]

class Funds extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            isModal: false,
            isEdit: false,
            editObj: {},
            tableData: [
                { id: 1, date: "12 Jun 2021", amount: "2500$", description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout", status: "Pending" },
                { id: 2, date: "20 Jul 2021 ", amount: "100000$", description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout", status: "Paid" },
                { id: 3, date: "14 Aug 2021", amount: "250000$", description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout", status: "Pending" },
                { id: 4, date: "11 Dec 2021", amount: "965200$", description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout", status: "Paid" },
            ]
        };
    }

    toggleModal = () => {
        this.setState({
            isModal: !this.state.isModal
        })
    }
    editModalOn = (data) => {
        this.setState({
            isModal: true,
            isEdit: true,
            editObj: (!data ? data : {})
        })
    }
    editModalOff = (data) => {
        this.setState({
            isModal: false,
            isEdit: false,
            editObj: (!data ? data : {})
        })
    }
    render() {
        return (
            <>
                <div className="main-wrapper main-wrapper-1">
                    <Navbar />
                    <LeftSideNav />

                    <div className="main-content">
                        <section className="section">
                            <div className="section-header">
                                <h1>Funds</h1>
                                <div className="section-header-breadcrumb">
                                    <div className="breadcrumb-item active"><a href="#">Dashboard</a></div>
                                    <div className="breadcrumb-item"><a href="#">Funds</a></div>
                                    <div className="breadcrumb-item">Funds</div>
                                </div>
                            </div>

                            <div className="section-body">
                                <h2 className="section-title">ADD Funds Forms</h2>
                                <p className="section-lead">This page is just an example for you to create your own page.</p>

                                <div className="card">
                                    <div className="card-header justify-content-between">
                                        <h4>Funds List</h4>
                                        ,
                                        <a href="#" className="btn btn-primary btn-large" onClick={() => this.toggleModal()} >Add Funds</a>
                                    </div>
                                    <div className="card-body">

                                        <Table columns={columns} data={this.state.tableData} toggle={this.toggleModal} editModalOn={this.editModalOn} />


                                    </div>
                                </div>

                            </div>
                        </section>
                    </div>
                    <FundsForm isEdit={this.state.isEdit} label="Funds" isOpen={this.state.isModal} editModalOff={this.editModalOff} editModalOn={this.editModalOn} />

                    <Footer />
                </div>


            </>

        );
    }
}



export default Funds
