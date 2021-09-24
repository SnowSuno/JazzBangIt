import React from "react";
import "./Keywords.scss";

import {Chip} from "@mui/material";

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
                onClick={toggleDrawer(true)}
            />

            {keywords.map((keyword) => (
                <Chip
                    className="chip"
                    label={keyword}
                    onDelete={() => dispatch(deleteKeyword(keyword))}/>
            ))}
        </div>
    );
}

export default Keywords;