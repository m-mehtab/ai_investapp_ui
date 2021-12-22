import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

// import Login from './components/Auth/Login';
// import Signup from './components/Auth/Signup';
// import ForgotPassword from './components/Auth/ForgotPassword';

import Forgot from './pages/Auth/Forgot';
import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Signup';
import Dashboard from './pages/Dashboard/index';
import history from './History';
export default function RouteFile() {
    return (
        <Router history={history}>
            <Switch>
                <Route exact path="/Login" component={Login}>
                    <Login />
                </Route>
                <Route path="/Dashboard" component={Dashboard}>
                    <Dashboard />
                </Route>

                <Route path="/" component={Dashboard}>
                    <Dashboard />
                </Route>
                <Route exact path="/Signup" component={Signup}>
                    <Signup />
                </Route>
                <Route exact path="/Forgot" component={Forgot}>
                    <Forgot />
                </Route>
            </Switch>
        </Router>
    );
}
