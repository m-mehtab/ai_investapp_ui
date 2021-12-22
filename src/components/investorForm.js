import React from 'react';
import { Modal } from 'react-bootstrap'
const InvestorForm = ({ isEdit, isOpen, toggle }) => {

    return (
        <Modal show={isOpen} onHide={toggle} >
            <Modal.Header >
                <h5 className="modal-title">{isEdit ? "Update" : "Add"} Investor</h5>
                <button type="button" onClick={() => toggle()} className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </Modal.Header>

            <div className="modal-body">
                <div className="form-group">
                    <label>Name:</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label>Phone Number:</label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <i className="fas fa-phone"></i>
                            </div>
                        </div>
                        <input type="text" className="form-control phone-number" />
                    </div>
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <i className='fas fa-envelope'></i>
                            </div>
                        </div>
                        <input type="email" className="form-control pwstrength" data-indicator="pwindicator" />
                    </div>
                    <div id="pwindicator" className="pwindicator">
                        <div className="bar"></div>
                        <div className="label"></div>
                    </div>
                </div>
                <div className="form-group">
                    <label>City:</label>
                    <div className="input-group">
                        <input type="text" className="form-control pwstrength" data-indicator="pwindicator" />
                    </div>
                    <div id="pwindicator" className="pwindicator">
                        <div className="bar"></div>
                        <div className="label"></div>
                    </div>
                </div>
            </div>
            <div className="modal-footer bg-whitesmoke br">
                <button onClick={() => toggle()} type="button" className="btn btn-secondary" >Close</button>
                <button onClick={() => toggle()} type="button" className="btn btn-primary">Save changes</button>
            </div>
        </Modal >
    )
}
export default InvestorForm