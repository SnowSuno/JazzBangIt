import React, {useState} from "react";

import Reset from "./Reset";

import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ListItemIcon from '@mui/material/ListItemIcon';

import HelpIcon from '@mui/icons-material/Help';
import ArticleIcon from '@mui/icons-material/Article';
import TimelapseIcon from '@mui/icons-material/Timelapse';
import ShareIcon from '@mui/icons-material/Share';
import GitHubIcon from '@mui/icons-material/GitHub';

import YouTubeIcon from '@mui/icons-material/YouTube';

import {ReactComponent as SaxophoneIcon} from "../../resources/icons/saxophone.svg";
import JazzBangItImage from "../../resources/images/jazzbangit.png";
import SyncroomKrImage from "../../resources/images/syncroomkr.png";

function TmiList() {
    const [open, setOpen] = useState(Array(4).fill(false));
    const handleOpen = (index: number) => () => {
        const newOpen = [...open];
        newOpen[index] = !open[index];
        setOpen(newOpen);
    };

    return (
        <div className="body">
            <div>
                <div className="info">
                    <SaxophoneIcon />
                    <p className="title">재즈방 있나요?</p>
                    <p className="desc">inspired by Sangmin</p>
                    <p className="desc">developed by 늅늅이</p>
                </div>

                <List>
                    <ListItemButton onClick={handleOpen(0)}>
                        <ListItemIcon>
                            <HelpIcon />
                        </ListItemIcon>
                        <ListItemText primary="왜 만들었나요?"/>
                        {open[0] ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={open[0]} timeout="auto" unmountOnExit className="collapse">
                        <img alt="무수히 많은 재방있" src={JazzBangItImage} />
                        <p>▲ 무수히 많은 <i>재방있?</i> 들 (출처 : Sangmin님)</p>
                        넵... 이분께 영감을 받아 만든 프로젝트입니다...
                    </Collapse>

                    <ListItemButton onClick={handleOpen(1)}>
                        <ListItemIcon>
                            <ArticleIcon />
                        </ListItemIcon>
                        <ListItemText primary="사용 방법 및 꿀팁"/>
                        {open[1] ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={open[1]} timeout="auto" unmountOnExit className="collapse">
                        <div className="title">사용 방법</div>
                        <div className="desc">
                            메인 화면에는 '키워드'가 포함된 방들이 표시됩니다.
                            키워드를 추가하거나 제거할 수 있습니다.
                        </div>
                        <div className="title">꿀팁</div>
                        <div className="desc">
                            <strong>#1</strong><br/>
                            추가하거나 제거한 키워드들은 다시 페이지에 접속해도 유지됩니다.
                            키워드로 'ccm'등을 추가해 <i>CCM방 있나요?</i> 처럼 활용할 수도 있겠죠.
                            <br/>
                            <strong>#2</strong><br/>
                            <i>재즈방 있나요?</i> 는 PWA를 지원합니다.
                            '홈 화면에 추가'를 이용하면 앱처럼 활용할 수 있습니다.
                        </div>
                    </Collapse>

                    <ListItemButton onClick={handleOpen(2)}>
                        <ListItemIcon>
                            <TimelapseIcon />
                        </ListItemIcon>
                        <ListItemText primary="심심해서 찍어본 타임랩스"/>
                        {open[2] ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={open[2]} timeout="auto" unmountOnExit className="collapse">
                        심심해서 개발과정 한번 타임랩스로 찍어봤습니다...
                        <span className="like">좋아요와 구독</span>
                        <div className="video">
                            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/wlEJQrzHtQg"
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen />
                        </div>
                        <ListItemButton onClick={linkTo("https://youtu.be/wlEJQrzHtQg/")}>
                            <ListItemIcon>
                                <YouTubeIcon />
                            </ListItemIcon>
                            <ListItemText primary="YouTube에서 보기"/>
                        </ListItemButton>
                    </Collapse>

                    <ListItemButton onClick={handleOpen(3)}>
                        <ListItemIcon>
                            <ShareIcon />
                        </ListItemIcon>
                        <ListItemText primary="싱크룸 코리아 홍보"/>
                        {open[3] ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={open[3]} timeout="auto" unmountOnExit className="collapse">
                        <img alt="싱크룸 코리아" src={SyncroomKrImage} />
                        <div className="desc">
                            싱크룸 코리아 많이 써주세요...!! <br/>
                            <a href="https://syncroom.kr/">https://syncroom.kr/</a>
                        </div>
                    </Collapse>

                    <ListItemButton onClick={linkTo("https://github.com/SnowSuno/JazzBangIt")}>
                        <ListItemIcon>
                            <GitHubIcon />
                        </ListItemIcon>
                        <ListItemText primary="소스 코드 보기"/>
                    </ListItemButton>
                </List>
                <Reset />
            </div>
        </div>
    );
}

const linkTo = (url: string) => () => {
    window.open(url, '_blank')?.focus();
};

export default TmiList;
