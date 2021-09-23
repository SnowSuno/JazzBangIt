import React from "react";

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
                    label={keyword}
                    onDelete={() => dispatch(deleteKeyword(keyword))}/>
            ))}
        </div>
    );
}

export default Keywords;