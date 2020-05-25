import React from 'react';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import Typography from '@material-ui/core/Typography'

const Score = ({ result, total }) =>{

    return (
        <>
            <div style={{ padding: '15px 0'}}>
                <Typography variant={'h5'} className={'text-white'}>
                    <div className="icon-wrapper">
                        <TrendingUpIcon fontSize={'large'} />
                        <span style={{ fontSize: 30}}> {result} out of { total }</span>
                    </div>
                </Typography>
            </div>
        </>
    );
};

export default Score;