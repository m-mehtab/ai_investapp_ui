import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Forgot from './pages/Auth/Forgot';
import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Signup';
import Dashboard from './pages/Dashboard/index';
import Funds from './pages/Funds/index';
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
                <Route path="/Funds" component={Funds}>
                    <Funds />
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
