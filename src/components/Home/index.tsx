import React, {useEffect} from "react";
import "./index.scss";

import Header from "./Header";
import Keywords from "./Keywords";
import RoomList from "./RoomList";

import {useDispatch} from "react-redux";
import {getData} from "../../reducers/api";

function Home() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getData());
    }, [dispatch]);

    return (
        <div className="Home">
            <Header />
            <div className="contents">
                <p>검색 키워드</p>
                <Keywords />
                <p>JAAAZZZ방 목록</p>
                <RoomList />
            </div>
        </div>
    );
}

export default Home;
