import React, {useState} from "react";

import Button from "@mui/material/Button";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function Reset() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Button
                variant="outlined"
                color="error"
                className="reset"
                onClick={() => setOpen(true)}
            >
                초기화
            </Button>
            <Dialog
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"재즈방 있나요? 초기화"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        저장된 모든 키워드가 초기화됩니다. 
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false)}>취소</Button>
                    <Button onClick={() => {
                        setOpen(false);
                        reset();
                    }} autoFocus>
                        확인
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

const reset = () => {
    localStorage.clear();
    window.location.href = document.URL.slice(0, -6);
};

export default Reset;