import React from "react";
import "./RoomList.scss";

import {useSelector} from "react-redux";
import {RootState} from "../../reducers";

function RoomList() {
    const rooms = useSelector((state: RootState) => state.api.data);

    return (
        <div className="RoomList">
            {rooms.map(({name}) => <div>{name}</div>)
            }
        </div>
    );
}

export default RoomList;