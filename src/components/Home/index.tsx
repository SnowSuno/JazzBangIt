import React, {useEffect, useState} from "react";
import "./index.scss";

import Header from "./Header";
import Keywords from "./Keywords";
import RoomList from "./RoomList";

import {useDispatch} from "react-redux";
import {getData} from "../../reducers/api";

import {Button, Drawer, Divider, TextField} from "@mui/material";

import useInput from "../../common/hooks/useInput";

function Home() {
    const dispatch = useDispatch();
    const [open, setOpen] = useState<boolean>(false);
    const {input} = useInput("");

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
                <p>JAAAZZZ방 목록</p>
                <RoomList />
            </div>

            <Drawer
                className="drawer"
                open={open}
                anchor='bottom'
                onClose={() => setOpen(false)}
                variant="temporary"
            >   
                <div className="topbar">
                    <span>검색 키워드</span>
                    <Button>추가</Button>
                </div>
                <Divider />
                <TextField
                    variant="standard"
                />
            </Drawer>
        </div>
    );
}

export default Home;
