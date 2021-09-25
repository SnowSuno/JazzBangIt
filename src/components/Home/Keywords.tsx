import React from "react";
import "./Keywords.scss";

import {TransitionGroup} from "react-transition-group";
import {Collapse} from "@mui/material";

import {Chip} from "@mui/material";
import {Add, Clear} from '@mui/icons-material';


import {useSelector, useDispatch} from "react-redux";
import {RootState} from "../../reducers";
import {deleteKeyword} from "../../reducers/keyword";

interface KeywordProps {
    toggleDrawer: (open: boolean) => () => void;
}

function Keywords({toggleDrawer}: KeywordProps) {
    const keywords = useSelector(((state: RootState) => state.keyword.keywords));
    const dispatch = useDispatch();

    return (
        <div className="Keywords">
            <Chip
                className="chip add"
                icon={<Add transform="scale(0.9)"/>}
                onClick={toggleDrawer(true)}
            />
            <TransitionGroup>
                {keywords.map((keyword) => (
                    <Collapse key={keyword} orientation="horizontal">
                        <Chip
                            className="chip"
                            label={keyword}
                            onDelete={() => dispatch(deleteKeyword(keyword))}
                            deleteIcon={<Clear transform="scale(0.9)"/>}
                        />
                    </Collapse>
                ))}
            </TransitionGroup>
        </div>
    );
}

export default Keywords;