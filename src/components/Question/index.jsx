import React from 'react';
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import cx from 'classnames'

const useStyles = makeStyles(() => ({
    answerGroup: {
        paddingTop: '20px',
        padding: '0',
        listStyleType: 'none',
    },
    answerItem: {
        display: 'block',
        padding: '12px',
        marginBottom: '10px',
        boxShadow: '0 2px 5px rgba(0,0,0, 0.1)',
        backgroundColor: '#ffffff',
        transition: 'all 0.15s linear',
        cursor: 'pointer',
        border: 'none !important',
        outline: 'none',
        textAlign: 'left',
        '&:hover': {
            backgroundColor: '#f8f8f8'
        }
    }
}));

const Question = ({ item, userAnswer, isDisable, counter, checkAnswer }) => {
    const classes = useStyles();

    const handleClick = index => {
        checkAnswer(index);
    };

    return (
        <div>
            <Typography variant={'h5'}>{counter}. {item.question}</Typography>
            <ul className={cx(classes.answerGroup, 'answerGroup')}>
                {
                    item.answers.map((answer, index) => {

                        return (
                            <li
                                style={{
                                    pointerEvents: isDisable ? 'none' : 'visible',
                                }}
                                key={answer}
                                onClick={() => handleClick(index)}
                                className={cx(
                                    classes.answerItem,
                                    {
                                        'correct': userAnswer === item.correctIndex && userAnswer === index,
                                        'incorrect': userAnswer === index && userAnswer !== item.correctIndex,
                                    }
                                )}
                            >
                                <Typography variant={'body2'}>{answer}</Typography>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
};

export default Question;