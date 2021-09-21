import React from "react";
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";

function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/about" component={About}/>
                <Route component={() => <Redirect to="/"/>}/>
            </Switch>
        </Router>
    );
}

export default Routes;
