import React from 'react';
import SpeedOutlinedIcon from '@material-ui/icons/SpeedOutlined';
import Typography from '@material-ui/core/Typography'

const Score = ({ score }) =>{

    return (
        <>
            <div style={{ padding: '15px 0'}}>
                <Typography variant={'h5'} className={'text-white'}>
                    <span className={'icon-wrapper'}>
                        <SpeedOutlinedIcon style={{
                            fontSize: '50px'
                        }}/>
                        <span style={{ fontSize: 30}}>{score} ball</span>
                    </span>
                </Typography>
            </div>
        </>
    );
};

export default Score;