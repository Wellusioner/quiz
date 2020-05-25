import React from 'react';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import Typography from '@material-ui/core/Typography'
import { formatTime } from '../../helpers'

const Time = ({ time }) =>{

    const data = formatTime(time);

    return (
        <>
            <div style={{ padding: '15px 0'}}>
                <Typography variant={'h5'} className={'text-white'}>
                    <div className="icon-wrapper">
                        <AccessAlarmIcon style={{
                            fontSize: '50px'
                        }}/>
                        <span style={{ fontSize: 30}}>{data.hours}:{data.minutes}:{data.seconds}</span>
                    </div>
                </Typography>
            </div>
        </>
    );
};

export default Time;