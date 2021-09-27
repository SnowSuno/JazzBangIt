import React from "react";
import "./Room.scss";

import {Card} from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';

import {RoomType} from "../../common/types/dataTypes";
import {ReactComponent as LockIcon} from "../../resources/icons/lock.svg";

interface RoomProps {
   room: RoomType;
}

function Room({room}: RoomProps) {
    return (
        <Card className="Room" variant="outlined">
            <div className="inner">
                <div className="title">
                    {room.isPrivate ? <LockIcon/> : null}
                    <span>{room.name}</span>
                </div>
                <div className="extra">
                    <div className="desc">{room.desc}</div>

                </div>
                <div className="member">
                    <PersonIcon sx={{fontSize: 14}}/>
                    <span>{room.members}</span>
                </div>
            </div>
        </Card>
    );
}

export default Room;
