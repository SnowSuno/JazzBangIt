import React from "react";
import "./Keywords.scss";

import {Chip} from "@mui/material";

import {useSelector, useDispatch} from "react-redux";
import {RootState} from "../../reducers";
import {deleteKeyword} from "../../reducers/keyword";

function Keywords() {
    const keywords = useSelector(((state: RootState) => state.keyword.keywords));
    const dispatch = useDispatch();

    return (
        <div className="Keywords">
            {keywords.map((keyword) => (
                <Chip
                    className="chip"
                    label={keyword}
                    onDelete={() => dispatch(deleteKeyword(keyword))}/>
            ))}

            <div className="add">
                <Chip
                    className="chip"
                />
                <input type="text"/>
            </div>
        </div>
    );
}

export default Keywords;