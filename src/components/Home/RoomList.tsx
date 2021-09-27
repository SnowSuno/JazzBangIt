import React from "react";
import "./RoomList.scss";

import {useSelector} from "react-redux";
import {RootState} from "../../reducers";

import { Skeleton } from '@mui/material';
import SignalWifiOffIcon from '@mui/icons-material/SignalWifiOff';
import MusicOffIcon from '@mui/icons-material/MusicOff';

import Room from "./Room";

function RoomList() {
    const {data, loading, error} = useSelector((state: RootState) => state.api);
    return (
        <div className="RoomList">
            {loading
                ? Array(5).fill(<Skeleton
                    sx={{bgcolor: "#FBFBFC", borderRadius: "12px"}}
                    height={87}
                    width={"100%"}
                    variant="rectangular"
                    animation="wave"
                />)
                : error
                    ? <div className="no-room">
                        <SignalWifiOffIcon sx={{fontSize: 150, color: "#AFB1B4"}}/>
                        <p>인터넷 연결 안됨</p>
                    </div>
                    : (data.length > 0)
                        ? data.map((room, index) => <Room room={room} key={index} />)
                        : <div className="no-room">
                            <MusicOffIcon sx={{fontSize: 150, color: "#AFB1B4"}}/>
                            <p>재즈방 없어요...</p>
                        </div>
            }
        </div>
    );
}

export default RoomList;
