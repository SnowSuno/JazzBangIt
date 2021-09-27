import React from "react";
import "./index.scss";
import classNames from "classnames";

import {Link} from "react-router-dom";

import {IconButton} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

interface AboutProps {
    show: boolean;
}

function About({show}: AboutProps) {
    return (
        <div className={classNames("About", {show})}>
            <div className="header">
                <Link to="/">
                    <IconButton size="large">
                        <ArrowBackIcon sx={{color: "white"}} fontSize="inherit"/>
                    </IconButton>
                </Link>
            </div>


            About

        </div>
    );
}

export default About;
