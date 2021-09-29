import React, {useState} from "react";
import "./Routes.scss";

import {BrowserRouter as Router, Route} from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";

function Routes() {
    const [bodyScroll, setBodyScroll] = useState<boolean>(true);
    const enableBodyScroll = (state: boolean) => setBodyScroll(state);

    return (
        <Router>
            <Route
                render={({location}) => (<>
                    <Home bodyScroll={bodyScroll}/>
                    <About
                        show={location.pathname === '/about'}
                        enableBodyScroll={enableBodyScroll}
                    />
                </>)}
            />
        </Router>
    );
}

export default Routes;
