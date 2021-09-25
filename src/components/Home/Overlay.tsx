import React, {KeyboardEvent, useLayoutEffect, useRef} from "react";
import "./Overlay.scss";

import {useDispatch} from "react-redux";
import {addKeyword} from "../../reducers/keyword";

import {Button, Divider, Drawer} from "@mui/material";


import useInput from "../../common/hooks/useInput";


interface OverlayProps {
    open: boolean;
    toggleDrawer: (open: boolean) => () => void;
}

function Overlay({open, toggleDrawer}: OverlayProps) {
    const dispatch = useDispatch();

    const {input, setValue} = useInput("");
    const inputRef = useRef<HTMLInputElement>(null);

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
        if (open) {
            inputRef.current?.focus();
            setValue("");
        }
    }, [open, setValue])


    return <Drawer
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
            <Divider/>
            <input
                type="text"
                placeholder="키워드를 입력하세요"
                onKeyPress={onKeyPress}
                ref={inputRef}
                {...input}
            />
        </div>
    </Drawer>
}

export default Overlay;