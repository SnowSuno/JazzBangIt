import React, {useEffect, useState} from "react";
import "./index.scss";

import Header from "./Header";
import Keywords from "./Keywords";
import RoomList from "./RoomList";
import Overlay from "./Overlay";

import {useDispatch} from "react-redux";
import {getData} from "../../reducers/api";

import {Fab} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

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
            <div className="float">
                <Fab
                    className="fab"
                    color="primary"
                    variant="extended"
                >
                    <SearchIcon sx={{mr: 1}}/>
                    재즈 방 찾기
                </Fab>
            </div>
            <Overlay open={open} toggleDrawer={toggleDrawer}/>
        </div>
    );
}

export default Home;
