import React, { Component } from 'react';
import CommonUtils from '../../../util/commonUtils';
import { ToastContainer, toast } from 'react-toastify';
import { withRouter } from 'react-router-dom';

class Login extends Component {
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
            this.props.history.push('/Dashboard');
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
                <section className="section">
                    <div className="container mt-5">
                        <div className="row">
                            <div className="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4">
                                <div className="login-brand">
                                    <img src="https://demo.getstisla.com/assets/img/stisla-fill.svg" alt="logo" width="100" className="shadow-light rounded-circle" />
                                </div>

                                <div className="card card-primary">
                                    <div className="card-header"><h4>Login</h4></div>

                                    <div className="card-body">
                                        <div className="form-group">
                                            <label for="email">Email</label>
                                            <input id="email" type="email" className="form-control" name="email" tabindex="1" required autofocus />
                                            <div className="invalid-feedback">
                                                Please fill in your email
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <div className="d-block">
                                                <label for="password" className="control-label">Password</label>
                                                <div className="float-right">
                                                    <a href="auth-forgot-password.html" className="text-small">
                                                        Forgot Password?
                                                    </a>
                                                </div>
                                            </div>
                                            <input id="password" type="password" className="form-control" name="password" tabindex="2" required />
                                            <div className="invalid-feedback">
                                                please fill in your password
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" name="remember" className="custom-control-input" tabindex="3" id="remember-me" />
                                                <label className="custom-control-label" for="remember-me">Remember Me</label>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <button onClick={() => {
                                                console.log("props", this.props.history.push("/Dashboard"))
                                            }} className="btn btn-primary btn-lg btn-block" tabindex="4">
                                                Login
                                            </button>
                                        </div>
                                        <div className="text-center mt-4 mb-3">
                                            <div className="text-job text-muted">Login With Social</div>
                                        </div>
                                        <div className="row sm-gutters">
                                            <div className="col-6">
                                                <a className="btn btn-block btn-social btn-facebook">
                                                    <span className="fab fa-facebook"></span> Facebook
                                                </a>
                                            </div>
                                            <div className="col-6">
                                                <a className="btn btn-block btn-social btn-twitter">
                                                    <span className="fab fa-twitter"></span> Twitter
                                                </a>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="mt-5 text-muted text-center">
                                    Don't have an account? <a href="auth-register.html">Create One</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}



export default withRouter(Login);
