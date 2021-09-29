import React, {useEffect, useRef} from "react";
import "./index.scss";
import classNames from "classnames";

import {IconButton} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {RouteComponentProps, withRouter} from "react-router-dom";

import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';

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
    }, [show]);

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
                <span>About</span>
            </div>
            <div className="body">
                <List>
                    <ListItemButton>
                        <ListItemText primary="왜 만들었나요?"/>
                    </ListItemButton>
                    {Array(20).fill(<ListItemButton>
                        <ListItemText primary="qwer"/>
                    </ListItemButton>)}
                </List>
            </div>
        </div>
    );
}

export default withRouter(React.memo(About));
