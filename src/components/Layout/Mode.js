import React from 'react'
import Brightness4Icon from '@mui/icons-material/Brightness4';
import IconButton from '@mui/material/IconButton';

const Mode = (props) => {

    const onModeHandler = () => {
        props.onModeChange()
    }

    return (
        <IconButton onClick={onModeHandler}>
            <Brightness4Icon />
        </IconButton>

    )
}

export default Mode