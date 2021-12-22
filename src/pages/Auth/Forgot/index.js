import React, { Component } from 'react';
import CommonUtils from '../../../util/commonUtils';
import { ToastContainer, toast } from 'react-toastify';
import loginbackground from '../../../assets/images/png/LoginImage.png';
// import mainlogo from '../../assets/images/svg/hyre_logo.svg';
import mainlogo from '../../../assets/images/svg/hyre_logo.svg';
import { Link } from 'react-router-dom';

class Forgot extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            errorEmail: '',
            errorPassword: '',
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.userLogin.failure == true && nextProps.userLogin.isFetching == false) {
            toast.error(nextProps.userLogin.errorMessage);
        }
        if (!nextProps.userLogin.isFetching && Object.keys(nextProps.userLogin.data).length > 0) {
            toast.success('you are logged in');
            this.props.history.push('/');
        }
    }

    saveLogin = () => {
        let payload = {};
        if (CommonUtils.stringIsEmpty(this.state.email)) {
            this.setState({ errorEmail: 'Enter Your Email' });
            return false;
        }
        if (CommonUtils.emailRegex().test(this.state.email) === false && this.state.email.length > 0) {
            this.setState({ errorEmail: 'Enter valid Email' });
            return false;
        } else {
            this.setState({ errorEmail: '' });
        }
        if (CommonUtils.stringIsEmpty(this.state.password)) {
            this.setState({ errorPassword: 'Enter valid Password' });
        }
        payload.email = this.state.email;
        payload.password = this.state.password;
        // this.props.loginRequest(kApiLogin, payload);
    };

    onChange = (e) => {
        let { name, value } = e.target;
        if (name == 'email' || name == 'password') {
            this.setState({
                errorEmail: '',
                errorPassword: ''
            })
        }
        this.setState({
            [name]: value,
        });
    };

    render() {
        return (
            <>
                <ToastContainer />
                <section className="AuthMainWrapper">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-12 col-lg-10">
                                <div className="wrap d-md-flex">
                                    <div className="login-wrap">
                                        <div className="mainlogo">
                                            <img src={mainlogo} alt="Hyre Application Logo" />
                                            <p>Welcome Back, Login Now To Continue</p>
                                        </div>
                                        <form action="#" className="auth-form">
                                            <div className="form-group email mb-3">
                                                <label className="label" htmlFor="email">
                                                    Email
                                                </label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    className="form-control"
                                                    id="exampleInputEmail1"
                                                    aria-describedby="emailHelp"
                                                    placeholder="Enter email"
                                                    value={this.state.email}
                                                    onChange={this.onChange}
                                                />
                                                <p className="text-danger">{this.state.errorEmail}</p>
                                            </div>
                                            <div className="form-group pswd mb-3">
                                                <label className="label" htmlFor="password">
                                                    Password
                                                </label>
                                                <input
                                                    type="password"
                                                    name="password"
                                                    className="form-control"
                                                    placeholder="**********"
                                                    required=""
                                                    value={this.state.password}
                                                    onChange={this.onChange}
                                                />
                                                <p className="text-danger">{this.state.errorPassword}</p>
                                            </div>
                                            <div className="form-group d-md-flex">
                                                <div className="w-100 forgot-pwd">
                                                    <Link className="hvr-float-shadow" to={'/ForgotPassword'}> Forgot Password </Link>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <button
                                                    type="button"
                                                    className="mainBtn hvr-sweep-to-right hyre-hover-fill-primary ms-auto me-auto"
                                                    onClick={this.saveLogin}
                                                >
                                                    Sign In
                                                </button>
                                            </div>
                                        </form>
                                        <p className="not-member">
                                            Don’t have an account?{' '}
                                            <Link className="hvr-float-shadow" to={'/Signup'}> Signup Now </Link>
                                            {/* <a data-toggle="tab" href="#signup" className="hvr-float-shadow">
                      </a> */}
                                        </p>
                                        <p className="SignWithSocial">Or Sign In With </p>
                                        <div className="social-media d-flex justify-content-center w-100 ">
                                            <a
                                                href="#"
                                                className="social-icon d-flex align-items-center justify-content-center hvr-icon-wobble-horizontal"
                                            >
                                                <span className="fa fa-facebook hvr-icon"></span>
                                            </a>
                                            <a
                                                href="#"
                                                className="social-icon d-flex align-items-center justify-content-center hvr-icon-wobble-horizontal"
                                            >
                                                <span className="fa fa-google hvr-icon"></span>
                                            </a>
                                            <a
                                                href="#"
                                                className="social-icon d-flex align-items-center justify-content-center hvr-icon-wobble-horizontal"
                                            >
                                                <span className="fa fa-apple hvr-icon"></span>
                                            </a>
                                        </div>
                                    </div>
                                    <div
                                        className="img fade-in-top"
                                        style={{ backgroundImage: `url(${loginbackground})` }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}



export default Forgot
