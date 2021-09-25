import React, {KeyboardEvent, useEffect, useLayoutEffect, useRef, useState} from "react";
import "./index.scss";

import Header from "./Header";
import Keywords from "./Keywords";
import RoomList from "./RoomList";

import {useDispatch} from "react-redux";
import {getData} from "../../reducers/api";
import {addKeyword} from "../../reducers/keyword";

import {Button, Drawer, Divider, Fab} from "@mui/material";

import useInput from "../../common/hooks/useInput";

function Home() {
    const dispatch = useDispatch();
    const [open, setOpen] = useState<boolean>(false);
    const {input, setValue} = useInput("");

    const inputRef = useRef<HTMLInputElement>(null);

    const toggleDrawer = (open: boolean) => () => {
        setOpen(open);
        if (open) setValue("");
    };

    const submit = () => {
        if (input.value.length > 0) {
            dispatch(addKeyword(input.value));
            toggleDrawer(false)();
        }
    };

    const onKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') submit()
    };


    useLayoutEffect(() => {
        if (open) inputRef.current?.focus();
    }, [open])


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

            <Drawer
                open={open}
                anchor='bottom'
                onClose={toggleDrawer(false)}
                variant="temporary"
                ModalProps={{
                    keepMounted: true,
                }}
            >
                <div className="drawer">
                    <div className="topbar">
                        <span>검색 키워드</span>
                        <Button
                            size="small"
                            onClick={submit}
                            disabled={input.value.length === 0}
                        >
                            추가
                        </Button>
                    </div>
                    <Divider />
                    <input
                        type="text"
                        placeholder="키워드를 입력하세요"
                        onKeyPress={onKeyPress}
                        ref={inputRef}
                        {...input}
                    />
                </div>
            </Drawer>
        </div>
    );
}

export default Home;
