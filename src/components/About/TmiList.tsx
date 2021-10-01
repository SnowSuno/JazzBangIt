import React, {useState} from "react";

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

import {ReactComponent as SaxophoneIcon} from "../../resources/icons/saxophone.svg";
import JazzBangItImage from "../../resources/images/jazzbangit.png";

function TmiList() {
    const [open, setOpen] = useState(Array(4).fill(false));
    const handleOpen = (index: number) => () => {
        const newOpen = [...open];
        newOpen[index] = !open[index];
        setOpen(newOpen);
    };

    return (
        <div className="body">
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
                    넵 이분께 영감을 받아 만든 프로젝트입니다...
                </Collapse>

                <ListItemButton onClick={handleOpen(1)}>
                    <ListItemIcon>
                        <ArticleIcon />
                    </ListItemIcon>
                    <ListItemText primary="사용 방법"/>
                    {open[1] ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open[1]} timeout="auto" unmountOnExit className="collapse">

                </Collapse>
                
                <ListItemButton onClick={handleOpen(2)}>
                    <ListItemIcon>
                        <TimelapseIcon />
                    </ListItemIcon>
                    <ListItemText primary="심심해서 찍어본 타임랩스"/>
                    {open[2] ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open[2]} timeout="auto" unmountOnExit className="collapse">

                </Collapse>
                
                <ListItemButton onClick={handleOpen(3)}>
                    <ListItemIcon>
                        <ShareIcon />
                    </ListItemIcon>
                    <ListItemText primary="싱크룸 코리아 홍보"/>
                    {open[3] ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open[3]} timeout="auto" unmountOnExit className="collapse">

                </Collapse>
                
                <ListItemButton >
                    <ListItemIcon>
                        <GitHubIcon />
                    </ListItemIcon>
                    <ListItemText primary="소스 보기"/>
                </ListItemButton>
                
                <ListItemButton >
                    <ListItemText primary="초기화"/>
                </ListItemButton>
            </List>
        </div>
    );
}

export default TmiList;
