import React, { useState, useEffect } from 'react'
import { Header, Question, Board } from '../../components'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { list } from '../../questions';
import { formatTime } from "../../helpers";

const Home = () => {

    const [questions, setQuestions] = useState([]);
    const [counter, setCounter] = useState(1);
    const [isDisable, setDisable] = useState(false);
    const [state, setState] = useState({
        score: 0,
        result: 0
    });
    const [userAnswer, setAnswer] = useState(null);
    const [selected, setSelected] = useState(null);
    const [start, setStart] = useState(1);
    const [time, setTime] = useState(0);

    useEffect(() => {
        let timer = start === 2 && setInterval(() => {
                setTime(time => time + 1);
            },1000);

        return () => {
            clearInterval(timer)
        };

    },[start]);

    useEffect(() => {
        const amount = list.length > 5 ? 5 : list.length;
        setQuestions(list.sort(() => 0.5 - Math.random()).slice(0,amount));
    },[start]);

    useEffect(() => {
        setSelected(() => questions[counter-1]);
    }, [counter, selected, questions]);

    const checkAnswer = index => {
        const current = questions[counter-1];
        setDisable(true);
        setAnswer(index);

        if(current.correctIndex === index ){
            setState(state => ({
                    ...state,
                result: state.result + 1,
                score: state.score + 5,
            }));
        }
    };

    const nextQuestion = () => {
        if(counter < questions.length){
            setCounter(counter + 1);
            setDisable(false);
        }else{
            setCounter(1);
        }
        setAnswer(null);
    };

    const restartQuiz = value => {
        setStart(value);
        setTime(0);
        setState({
            score: 0,
            result: 0
        });
        setAnswer(null);
        setSelected(() => questions[counter-1]);
        setCounter(1);
        setDisable(false);
    };

    let data = {};
    if(start === 3){
        data = formatTime(time);
    }

    return (
        <>
            <Header />
            <Container>
                <Paper style={{
                    backgroundColor: '#f7f7f7'
                }} elevation={0}>
                    <Box padding={3} marginY={3}>
                        <Grid
                            container
                            spacing={2}
                            justify={'center'}
                        >
                            {
                                start === 2 ?
                                    <Grid item className={'w-100'}>
                                        <Grid container>
                                            <Grid item md={9}>
                                                <Box paddingRight={6}>
                                                    <Typography variant={'h4'}>Answer the questions below</Typography>
                                                    <Box paddingY={3}>
                                                        <Question {...{ checkAnswer, userAnswer, counter, isDisable, item: selected}} />
                                                    </Box>
                                                    <Box
                                                        display={'flex'}
                                                        justifyContent={'space-between'}
                                                    >
                                                        <Button
                                                            onClick={() => restartQuiz(1)}
                                                            variant={'outlined'}
                                                            color={'default'}
                                                        >
                                                            I Give up
                                                        </Button>
                                                        <span>
                                                            {
                                                                counter >= questions.length ? <Button
                                                                        onClick={() => setStart(3)}
                                                                        variant={'contained'}
                                                                        color={'secondary'}
                                                                        disabled={!isDisable}
                                                                    >
                                                                        Finish
                                                                    </Button> :
                                                                    <Button
                                                                        onClick={nextQuestion}
                                                                        variant={'contained'}
                                                                        color={'primary'}
                                                                        disabled={!isDisable}
                                                                    >
                                                                        Next
                                                                    </Button>
                                                            }
                                                        </span>
                                                    </Box>
                                                </Box>
                                            </Grid>
                                            <Grid item md={3}>
                                                <Board {...{ time, result: state.result, score: state.score, total: questions.length }} />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    : null
                            }
                            {
                                start === 1 ?
                                    <Grid item md={4}>
                                        <Paper className={'align-center'} elevation={0} style={{ padding: '20px'}} >
                                            <Typography variant={'h4'} gutterBottom>Simple Quiz</Typography>
                                            <Typography variant={'subtitle1'} gutterBottom >you will get 5 for each correct answer</Typography>
                                            <Typography variant={'h5'} gutterBottom >Try your luck</Typography>
                                            <Button variant={'contained'} fontSize={'large'} onClick={() => setStart(2)}>Start Quiz</Button>
                                        </Paper>
                                    </Grid>
                                    : null
                            }
                            {
                                start === 3 ?
                                    <Grid item md={4}>
                                        <Paper className={'align-center'} elevation={0} style={{ padding: '20px'}}>
                                            <Typography variant={'h4'} gutterBottom>Time spent: {data.hours}:{data.minutes}:{data.seconds}</Typography>
                                            <Typography variant={'h4'} gutterBottom>Score: {state.score} ball</Typography>
                                            <Typography variant={'h4'} gutterBottom>Result: {state.result} out of {questions.length}</Typography>
                                            <Button style={{ marginRight: '10px'}} variant={'contained'} color={'default'} fontSize={'large'} onClick={() => restartQuiz(1)}>Home</Button>
                                            <Button variant={'contained'} color={'secondary'} fontSize={'large'} onClick={() => restartQuiz(2)}>Restart Quiz</Button>
                                        </Paper>
                                    </Grid>
                                    : null
                            }
                        </Grid>
                    </Box>
                </Paper>
            </Container>
        </>
    );
};

export default Home;