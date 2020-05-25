export const formatTime = time => {
    const seconds = Math.floor(time % 60);
    const minutes = Math.floor((time / 60) % 60 );
    const hours = Math.floor((time / 60) / 60);


    return {
        seconds: seconds > 9 ? seconds : `0${seconds}`,
        minutes: minutes > 9 ? minutes : `0${minutes}`,
        hours: hours > 9 ? hours : `0${hours}`
    }
};