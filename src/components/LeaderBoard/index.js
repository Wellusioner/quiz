import React from 'react';
import Time from "../Time";
import Divider from "@material-ui/core/Divider";
import Score from "../Score";
import Result from "../Result";
import Box from "@material-ui/core/Box";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(() => ({
    rightBox: {
        background: 'linear-gradient(to right bottom, #4776E6, #8E54E9)',
        borderRadius: '7px',
    },
    divider: {
        backgroundColor: '#9479ff'
    }
}));

const Board  = ({ score, total, result, time}) => {
    const classes = useStyles();

    return (
        <>
            <Box padding={2} className={classes.rightBox}>
                <Time {...{ time }}/>
                <Divider className={classes.divider}/>
                <Score {...{ score }}/>
                <Divider className={classes.divider}/>
                <Result {...{ total, result }}/>
            </Box>
        </>
    );
};

export default Board;