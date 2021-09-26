import React, {useEffect, useState} from "react";
import "./index.scss";

import Header from "./Header";
import Keywords from "./Keywords";
import RoomList from "./RoomList";
import Overlay from "./Overlay";

import {useDispatch, useSelector} from "react-redux";
import {getData} from "../../reducers/api";
import {RootState} from "../../reducers";

import LoadingButton from '@mui/lab/LoadingButton';
import SearchIcon from '@mui/icons-material/Search';

function Home() {
    const {loading} = useSelector((state: RootState) => state.api);
    const keywords = useSelector((state: RootState) => state.keyword.keywords);
    const dispatch = useDispatch();
    const [open, setOpen] = useState<boolean>(false);

    const toggleDrawer = (open: boolean) => () => setOpen(open);

    useEffect(() => {
        dispatch(getData(keywords));
    }, [dispatch, keywords]);

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
                {/*<Fab*/}
                {/*    className="fab"*/}
                {/*    color="primary"*/}
                {/*    variant="extended"*/}
                {/*>*/}
                {/*    <SearchIcon sx={{mr: 1}}/>*/}
                {/*    /!*<CircularProgress sx={{mr: 1}}/>*!/*/}
                {/*    재즈 방 찾기*/}
                {/*</Fab>*/}
                <LoadingButton
                    color="primary"
                    variant="contained"
                    loading={loading}
                    loadingPosition="start"
                    startIcon={<SearchIcon/>}
                    onClick={() => dispatch(getData(keywords))}
                >
                    재즈 방 찾기
                </LoadingButton>
            </div>
            <Overlay open={open} toggleDrawer={toggleDrawer}/>
        </div>
    );
}

export default Home;
