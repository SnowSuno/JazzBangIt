import React from "react";
import "./Routes.scss";

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";

function Routes() {
    return (
        <Router>
            <Home />
            <Switch>
                <Route
                    render={({location}) => (
                        <About show={location.pathname === '/about'}/>
                    )}
                />
            </Switch>
        </Router>
    );
}

export default Routes;
