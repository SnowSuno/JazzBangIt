import React, {useEffect, useState} from "react";
import "./index.scss";

import Header from "./Header";
import Keywords from "./Keywords";
import RoomList from "./RoomList";
import Overlay from "./Overlay";

import {useDispatch} from "react-redux";
import {getData} from "../../reducers/api";

import {Fab} from "@mui/material";

function Home() {
    const dispatch = useDispatch();
    const [open, setOpen] = useState<boolean>(false);

    const toggleDrawer = (open: boolean) => () => setOpen(open);

    useEffect(() => {
        dispatch(getData());
    }, [dispatch]);

    return (
        <div className="Home">
            <Header />
            <div className="contents">
                <p>검색 키워드</p>
                <Keywords toggleDrawer={toggleDrawer}/>
                <p>재즈방 목록</p>
                <RoomList />
            </div>

            <Fab variant="extended">
                새로고침
            </Fab>

            <Overlay open={open} toggleDrawer={toggleDrawer}/>
        </div>
    );
}

export default Home;
