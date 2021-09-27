import React from "react";
import "./Header.scss";

import {useScroll} from "../../common/hooks/useScroll";

import {ReactComponent as BigLogo} from "../../resources/images/logo-big.svg";
import {ReactComponent as SmallLogo} from "../../resources/images/logo-small.svg";

import {IconButton} from "@mui/material";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

function Header() {
    const y = useScroll({max: 175});

    return (
        <div className="Header">
            <BigLogo className="logo big" opacity={scrollOpacity(80, 0, y)}/>

            <div className="small-header">
                <SmallLogo className="logo small" opacity={scrollOpacity(60, 120, y)}/>
                <IconButton size="large">
                    <InfoOutlinedIcon className="info"/>
                </IconButton>
            </div>

        </div>
    );
}

const scrollOpacity = (start: number, end: number, y: number) => {
    const opacity = (y - start) / (end - start);
    if (opacity < 0) {
        return 0
    } else if (opacity > 1) {
        return 1
    } else {
        return opacity
    }
}



export default Header;
