import React from "react";
import "./index.scss";
import classNames from "classnames";

import {Link} from "react-router-dom";

interface AboutProps {
    show: boolean;
}

function About({show}: AboutProps) {
    return (
        <div className={classNames("About", {show})}>
            About
            <Link to="/"><button>home</button></Link>
        </div>
    );
}

export default About;
