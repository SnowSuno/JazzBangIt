import React from "react";
import "./index.scss";
import classNames from "classnames";

import {IconButton} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {RouteComponentProps, withRouter} from "react-router-dom";

interface AboutProps {
    show: boolean;
}

function About({show, history}: AboutProps & RouteComponentProps) {
    const goBack = () => {
        history.goBack();
    };

    return (
        <div className={classNames("About", {show})}>
            <div className="header">
                <IconButton
                    size="large"
                    onClick={goBack}
                >
                    <ArrowBackIcon sx={{color: "white"}} fontSize="inherit"/>
                </IconButton>
            </div>


            About

        </div>
    );
}

export default withRouter(About);
