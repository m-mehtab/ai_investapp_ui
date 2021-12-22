import React, { Component } from 'react';
import Footer from '../../components/footer';
import InvestorForm from '../../components/investorForm';
import Navbar from '../../components/navbar'
import Table from '../../components/table';
import LeftSideNav from '../Dashboard/sideNav/index';
const columns = ["Name", "Email", "Phone No", "City", "Actions"]

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            isModal: false,
            isEdit: false,
            editObj: {},
            tableData: [
                { id: 1, name: "John", email: "John@gmail.com", number: "+91 212-313-123", city: "New York" },
                { id: 2, name: "Mark", email: "Mark@gmail.com", number: "+91 555-231-432", city: "London" },
                { id: 3, name: "John", email: "John@gmail.com", number: "+91 212-313-123", city: "New York" },
                { id: 4, name: "Mark", email: "Mark@gmail.com", number: "+91 555-231-432", city: "London" },
            ]
        };
    }

    toggleModal = () => {
        this.setState({
            isModal: !this.state.isModal
        })
    }
    editToggleModal = (data) => {
        this.setState({
            isModal: !this.state.isModal,
            isEdit: !this.state.isEdit,
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
                                <h1>Investor</h1>
                                <div className="section-header-breadcrumb">
                                    <div className="breadcrumb-item active"><a href="#">Dashboard</a></div>
                                    <div className="breadcrumb-item"><a href="#">Investor</a></div>
                                    <div className="breadcrumb-item">Investor</div>
                                </div>
                            </div>

                            <div className="section-body">
                                <h2 className="section-title">ADD INVESTOR</h2>
                                <p className="section-lead">This page is just an example for you to create your own page.</p>

                                <div className="card">
                                    <div className="card-header justify-content-between">
                                        <h4>Investor List</h4>
                                        ,
                                        <a href="#" className="btn btn-primary btn-large" onClick={() => this.toggleModal()} >Add Investor</a>
                                    </div>
                                    <div className="card-body">

                                        <Table columns={columns} data={this.state.tableData} toggle={this.toggleModal} />


                                    </div>
                                </div>

                            </div>
                        </section>
                    </div>
                    <InvestorForm isEdit={this.state.isEdit} isOpen={this.state.isModal} toggle={this.editToggleModal} />

                    <Footer />
                </div>


            </>

        );
    }
}



export default Dashboard
