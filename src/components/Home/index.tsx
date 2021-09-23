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
            <Keywords />
            <div className="contents">
                <RoomList />
            </div>
        </div>
    );
}

export default Home;
