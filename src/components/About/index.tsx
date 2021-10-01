import React, {useEffect, useRef} from "react";
import "./index.scss";
import classNames from "classnames";

import TmiList from "./TmiList";

import {IconButton} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {RouteComponentProps, withRouter} from "react-router-dom";

interface AboutProps {
    show: boolean;
    enableBodyScroll: (state: boolean) => void;
}

function About({show, enableBodyScroll, history}: AboutProps & RouteComponentProps) {
    const goBack = () => {
        history.goBack();
    };
    const aboutRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!show) enableBodyScroll(true);
    }, [show, enableBodyScroll]);

    return (
        <div
            className={classNames("About", {show})}
            onTransitionEnd={({target}) => {
                if (target === aboutRef.current && show) enableBodyScroll(false);
            }}
            ref={aboutRef}
        >
            <div className="header">
                <IconButton
                    size="large"
                    onClick={goBack}
                >
                    <ArrowBackIcon sx={{color: "white"}} fontSize="inherit"/>
                </IconButton>
                <span>TMI page</span>
            </div>
            <TmiList />
        </div>
    );
}

export default withRouter(React.memo(About));
