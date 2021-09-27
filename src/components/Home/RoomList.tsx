import React from "react";
import "./RoomList.scss";

import {useSelector} from "react-redux";
import {RootState} from "../../reducers";

import Room from "./Room";

function RoomList() {
    const rooms = useSelector((state: RootState) => state.api.data);

    return (
        <div className="RoomList">
            {rooms.map((room, index) => <Room room={room} key={index} />)}
        </div>
    );
}

export default RoomList;