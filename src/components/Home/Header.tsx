import React from "react";
import "./Header.scss";

import {Parallax} from "react-scroll-parallax";

import {useScroll} from "../../common/hooks/useScroll";

import {ReactComponent as BigLogo} from "../../resources/images/logo-big.svg";
import {ReactComponent as SmallLogo} from "../../resources/images/logo-small.svg";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

function Header() {
    const y = useScroll({max: 175});

    return (
        <div className="Header">
            <Parallax y={['-170px', '80px']}>
                <BigLogo className="logo big" opacity={scrollOpacity(80, 0, y)}/>
            </Parallax>


            <div className="small-header">
                <SmallLogo className="logo small" opacity={scrollOpacity(60, 120, y)}/>
                <InfoOutlinedIcon className="info"/>
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
